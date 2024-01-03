import express from "express";
import { auth, requiresAuth } from "express-openid-connect";
import { EXPRESS_PORT } from "../src/config/environment";
import { config } from "../src/config/auth";

const app = express();

app.use(auth(config));

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

const server = app.listen(EXPRESS_PORT, () => {
  console.log(`Server is running on http://localhost:${EXPRESS_PORT}`);
});

export { app, server };
