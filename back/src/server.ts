import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
import router from "./router";

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
express.urlencoded();
app.use(router);

export default app;
