import { Router } from "express";
import { z } from "zod";
import { attachAuth, AuthRequest, requireAdmin, requireAuth } from "../middleware/auth";
import { QuoteModel } from "../models/Quote";

const router = Router();
const quoteInput = z.object({ name: z.string().trim().min(2).max(80), email: z.email(), service: z.string().trim().min(2).max(80), message: z.string().trim().min(10).max(2000) });

router.post("/", attachAuth, async (request: AuthRequest, response, next) => { try {
  const quote = await QuoteModel.create({ ...quoteInput.parse(request.body), userId: request.auth?.userId });
  response.status(201).json({ quote: { id: quote.id, status: quote.status, createdAt: quote.createdAt } });
} catch (error) { next(error); } });

router.get("/mine", requireAuth, async (request: AuthRequest, response, next) => { try {
  const quotes = await QuoteModel.find({ userId: request.auth!.userId }).sort({ createdAt: -1 }).limit(100);
  response.json({ quotes });
} catch (error) { next(error); } });

router.get("/", requireAuth, requireAdmin, async (_request, response, next) => { try {
  const quotes = await QuoteModel.find().sort({ createdAt: -1 }).limit(100);
  response.json({ quotes });
} catch (error) { next(error); } });
export default router;
