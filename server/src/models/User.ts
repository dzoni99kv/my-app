import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true, select: false },
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
}, { timestamps: true });

export type User = InferSchemaType<typeof userSchema>;
export const UserModel = model("User", userSchema);
