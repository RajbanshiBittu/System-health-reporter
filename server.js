import express from "express";
import router from "./Routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.options("", cors()); 

// const allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:5500"];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin) return callback(null, true); // curl/Postman
//     const normalizedOrigin = origin.replace(/\/$/, "");
//     if (allowedOrigins.includes(normalizedOrigin)) return callback(null, true);
//     callback(new Error("CORS not allowed"), false);
//   },
//   methods: ["GET","POST","OPTIONS"],
//   allowedHeaders: ["Content-Type","Authorization"],
//   preflightContinue: false,  // IMPORTANT
//   optionsSuccessStatus: 204   // respond to OPTIONS requests with 204 No Content
// }));

// const allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:5500"];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin) return callback(null, true); // curl/Postman
//     if (allowedOrigins.includes(origin.replace(/\/$/, ""))) return callback(null, true);
//     return callback(new Error("CORS not allowed"), false);
//   },
//   methods: ["GET","POST","OPTIONS"],
//   allowedHeaders: ["Content-Type","Authorization"]
// }));

// app.use(cors({
//   origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
//   methods: ["GET","POST","OPTIONS"],
//   allowedHeaders: ["Content-Type","Authorization"]
// }));

// app.use(cors());

app.use(express.json());

app.use("/api/v1", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
