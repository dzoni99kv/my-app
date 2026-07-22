import { InferSchemaType, Schema, model } from "mongoose";

const quoteSchema = new Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, lowercase: true, trim: true },
  service: { type: String, required: true, trim: true, maxlength: 80 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export type Quote = InferSchemaType<typeof quoteSchema>;
export const QuoteModel = model("Quote", quoteSchema);
