import express from 'express';
import si from 'systeminformation';
import fs from "fs";
import { stringify } from 'querystring';



export const homeController = (req, res) => {
  return res.status(200).send('Hello, World!');
};


//function to getting system information
const getSystemMetrics = async () => {
  try {
    const cpu = await si.cpu();
    const load = await si.currentLoad();
    const memory = await si.mem();
    const diskArr = await si.fsSize({fsPath: '/hostroot'}); // Get disk usage on the root directory

    const diskMetrics = {
      total: diskArr.reduce((acc, d) => acc + d.size, 0) / 1024 / 1024 / 1024,
      used: diskArr.reduce((acc, d) => acc + d.used, 0) / 1024 / 1024 / 1024,
      free: diskArr.reduce((acc, d) => acc + (d.size - d.used), 0) / 1024 / 1024 / 1024,
    };

    // Return an object with all the necessary data
    return {
        cpu: {
            model: cpu.model,
            cores: cpu.cores,
            usage: load.currentLoad.toFixed(2), // Percentage of CPU usage
        },
        memory: {
            total: (memory.total / 1024 / 1024 / 1024).toFixed(2), // Convert bytes to GB
            used: (memory.used / 1024 / 1024 / 1024).toFixed(2),
            free: (memory.free / 1024 / 1024 / 1024).toFixed(2),
        },
        disk: {
          total: diskMetrics.total.toFixed(2),
          used: diskMetrics.used.toFixed(2),
          free: diskMetrics.free.toFixed(2),
        }
      }
  } catch (error) {
    // console.error("Error fetching system metrics:", error);
    // return null;
    console.error("Error fetching system metrics:", error);
    throw error;
  }
};

const saveReportInfo = (data) => {
  const filePath = "./system_report.json";

  fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("System report saved to system_report.json");
    }
  });
}

export const systemInfoController = async (req, res) => {
    try {
      const systemMetrics = await getSystemMetrics();
      saveReportInfo(systemMetrics);
      return res.status(200).json({ systemMetrics });
    } catch (error) {
        return res.status(500).json({message: "Something went wrong while fetching system metrics!",    error: error.message,
        });
    }
};