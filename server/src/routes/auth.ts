import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { config } from "../config";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { UserModel } from "../models/User";

const router = Router();
const credentials = z.object({ email: z.email(), password: z.string().min(8).max(128) });
const registerInput = credentials.extend({ name: z.string().trim().min(2).max(80) });
const issueToken = (user: { _id: unknown; role: "customer" | "admin" }) => jwt.sign({ userId: String(user._id), role: user.role }, config.jwtSecret, { expiresIn: "7d" });

router.post("/register", async (request, response, next) => { try {
  const input = registerInput.parse(request.body);
  if (await UserModel.exists({ email: input.email.toLowerCase() })) return response.status(409).json({ error: "An account with this email already exists" });
  const user = await UserModel.create({ name: input.name, email: input.email, passwordHash: await bcrypt.hash(input.password, 12) });
  response.status(201).json({ token: issueToken(user), user: { id: user.id, name: user.name, email: user.email, role: user.role } });
} catch (error) { next(error); } });

router.post("/login", async (request, response, next) => { try {
  const input = credentials.parse(request.body);
  const user = await UserModel.findOne({ email: input.email.toLowerCase() }).select("+passwordHash");
  if (!user || !(await bcrypt.compare(input.password, user.passwordHash))) return response.status(401).json({ error: "Invalid email or password" });
  response.json({ token: issueToken(user), user: { id: user.id, name: user.name, email: user.email, role: user.role } });
} catch (error) { next(error); } });

router.get("/me", requireAuth, async (request: AuthRequest, response, next) => { try {
  const user = await UserModel.findById(request.auth!.userId);
  if (!user) return response.status(404).json({ error: "User not found" });
  response.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
} catch (error) { next(error); } });

export default router;
