# API server

Express API for quote requests and user accounts.

## Run locally

1. Copy `.env.example` to `.env` and set a strong `JWT_SECRET` plus your MongoDB URI.
2. Start MongoDB locally or set `MONGODB_URI` to a MongoDB Atlas connection string.
3. Run `npm run api:dev`.

The API listens on `http://localhost:4000` by default.

## Routes

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Health check |
| POST | `/api/auth/register` | Create account and receive JWT |
| POST | `/api/auth/login` | Sign in and receive JWT |
| GET | `/api/auth/me` | Current user (`Authorization: Bearer <token>`) |
| POST | `/api/quotes` | Submit a project quote request |
| GET | `/api/quotes` | List quotes (admin JWT required) |
