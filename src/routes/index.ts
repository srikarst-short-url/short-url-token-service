import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.send(`Welcome to URL shortener token service`);
});

export { router as indexRouter };

export * from "./range";
