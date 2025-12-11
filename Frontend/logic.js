document.getElementById("health-btn").addEventListener("click", async () => {
  const table = document.getElementById("health-table");

  table.innerHTML = `<tr><td>Fetching system health data...</td></tr>`;

  try {
    const res = await fetch("http://localhost:5000/api/v1/system-health");  //here's the erreor occurs
    const data = await res.json();
    console.log(data);

    const cpu = data.systemMetrics.cpu;
    const memory = data.systemMetrics.memory;
    const disk = data.systemMetrics.disk;

    const display = (val) => val === null || val === undefined ? "N/A" : val + " GB";

    table.innerHTML = `
      <tr><td><b>CPU Model</b></td><td>${cpu.model}</td></tr>
      <tr><td><b>CPU Cores</b></td><td>${cpu.cores}</td></tr>
      <tr><td><b>CPU Usage</b></td><td>${cpu.usage} %</td></tr>

      <tr><td><b>Memory Total</b></td><td>${memory.total} GB</td></tr>
      <tr><td><b>Memory Used</b></td><td>${memory.used} GB</td></tr>
      <tr><td><b>Memory Free</b></td><td>${memory.free} GB</td></tr>

      <tr><td><b>Disk Total</b></td><td>${display(disk.total)}</td></tr>
      <tr><td><b>Disk Used</b></td><td>${display(disk.used)}</td></tr>
      <tr><td><b>Disk Free</b></td><td>${display(disk.free)}</td></tr>
    `;

  } catch (err) {
    console.error(err); //and here  - error occurs
    table.innerHTML = `<tr><td>Error fetching system data</td></tr>`;
  }
});
