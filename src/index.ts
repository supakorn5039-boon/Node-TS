import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router";

const app = express();
dotenv.config();

const port = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

const server = http.createServer(app);

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database is connected sucessfully.");
    server.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/", router());
