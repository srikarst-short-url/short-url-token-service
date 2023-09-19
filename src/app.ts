import express from "express";
import cors from "cors";
import { json } from "body-parser";

import { indexRouter, rangeRouter } from "./routes";

var app = express();

app.use(cors());
app.set("trust proxy", true);

app.use(json());
app.use(indexRouter);
app.use(rangeRouter);

export { app };
