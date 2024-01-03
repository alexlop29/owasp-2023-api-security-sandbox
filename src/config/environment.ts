import dotenv from "dotenv";
dotenv.config();

export const EXPRESS_PORT = 3000;
export const AUTH_ISSUER_BASE_URL = process.env.AUTH_ISSUER_BASE_URL;
export const AUTH_CLIENT_ID = process.env.AUTH_CLIENT_ID ?? "";
export const AUTH_BASE_URL = process.env.AUTH_BASE_URL ?? "";
export const AUTH_SECRET = process.env.AUTH_SECRET;
export const AUTH_USER = process.env.AUTH_USER;
export const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
