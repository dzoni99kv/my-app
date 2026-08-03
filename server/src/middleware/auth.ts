import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

export type AuthRequest = Request & { auth?: { userId: string; role: "customer" | "admin" } };

export function requireAuth(request: AuthRequest, response: Response, next: NextFunction) {
  const token = request.header("Authorization")?.replace(/^Bearer\s+/i, "");
  if (!token) return response.status(401).json({ error: "Authentication required" });
  try {
    request.auth = jwt.verify(token, config.jwtSecret) as AuthRequest["auth"];
    next();
  } catch {
    response.status(401).json({ error: "Invalid or expired token" });
  }
}

export function attachAuth(request: AuthRequest, response: Response, next: NextFunction) {
  const token = request.header("Authorization")?.replace(/^Bearer\s+/i, "");
  if (!token) return next();
  try {
    request.auth = jwt.verify(token, config.jwtSecret) as AuthRequest["auth"];
    next();
  } catch {
    response.status(401).json({ error: "Invalid or expired token" });
  }
}

export function requireAdmin(request: AuthRequest, response: Response, next: NextFunction) {
  if (request.auth?.role !== "admin") return response.status(403).json({ error: "Admin access required" });
  next();
}
