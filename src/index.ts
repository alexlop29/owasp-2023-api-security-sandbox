import express from "express";
import { auth, requiresAuth } from "express-openid-connect";
import { EXPRESS_PORT } from "../src/config/environment";
import { config } from "../src/config/auth";
import * as http from "http";
import { shopRoute } from "./routes/shop";

const app = express();

app.use(auth(config));
app.use("/shop", shopRoute);

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

const server: http.Server = app.listen(EXPRESS_PORT);

export { app, server };
