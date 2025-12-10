import express from "express";
import router from "./Routes/routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1", router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running at Localhost:${process.env.PORT}`);
})