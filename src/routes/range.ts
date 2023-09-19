import express, { Request, Response } from "express";
import { Range } from "../models";

const router = express.Router();

router.get("/api/range", async (req: Request, res: Response) => {
  let existing = await Range.findOne();
  if (!existing) {
    let newRange = {
      range: [0, 100]
    }
    let rangeDoc = Range.build(newRange);
    await rangeDoc.save();
    existing = await Range.findOne()
  }
  else {
    existing.set({ range: [existing.range[1] + 1, existing.range[1] + 100] });
    await existing.save();
    existing = await Range.findOne()
  }

  res.status(200).send(existing);
});

export { router as rangeRouter };
