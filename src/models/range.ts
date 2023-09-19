import mongoose from "mongoose";

interface RangeDoc extends mongoose.Document {
  range: number[];
}

interface RangeAttrs {
  range: number[];
}

interface RangeModel extends mongoose.Model<RangeDoc> {
  build(attrs: RangeAttrs): RangeDoc;
}

const rangeSchema = new mongoose.Schema(
  {
    range: {
      type: [Number],
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

rangeSchema.statics.build = (attrs: RangeAttrs) => {
  return new Range(attrs);
};

const Range = mongoose.model<RangeDoc, RangeModel>("Range", rangeSchema);

export { Range };
