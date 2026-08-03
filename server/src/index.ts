import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ZodError } from "zod";
import { config } from "./config";
import authRoutes from "./routes/auth";
import quoteRoutes from "./routes/quotes";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
app.use(cors({ origin: config.clientUrl, methods: ["GET", "POST"], allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(express.json({ limit: "100kb" }));
app.get("/api/health", (_request, response) => response.json({ status: "ok" }));
app.use("/api/auth", authRoutes);
app.use("/api/quotes", quoteRoutes);
app.use((error: unknown, _request: express.Request, response: express.Response) => {
  if (error instanceof ZodError) return response.status(400).json({ error: "Validation failed", details: error.issues });
  console.error(error);
  response.status(500).json({ error: "Unexpected server error" });
});

mongoose.connect(config.mongoUri).then(() => app.listen(config.port, () => console.log(`API listening on http://localhost:${config.port}`))).catch((error) => { console.error("MongoDB connection failed", error); process.exit(1); });
