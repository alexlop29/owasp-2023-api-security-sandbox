import express from "express";
import { ShopController } from "../controllers/shop";
import { requiresAuth } from "express-openid-connect";
import { User } from "../types";

const shopRoute = express.Router();
shopRoute.use(express.json());

shopRoute.get("/", async (_req, res) => {
  const shops = new ShopController();
  let listOfShops = shops.getAllShops();
  res.status(200).json(listOfShops);
});

// May instead want to implement some sort of middleware to handle matching the userMetadata
// Route is doing too much!
shopRoute.get("/:storeName/revenue.json", requiresAuth(), async (req, res) => {
  const storeName = req.params.storeName;
  const userMetadata = req.oidc.user;
  if (
    userMetadata &&
    "storeName" in userMetadata &&
    "email" in userMetadata &&
    "email_verified" in userMetadata &&
    "iss" in userMetadata &&
    "sub" in userMetadata &&
    "aud" in userMetadata &&
    "iat" in userMetadata &&
    "exp" in userMetadata
  ) {
    const shops = new ShopController();
    let revenueData = await shops.getShopRevenue(
      storeName,
      userMetadata as User,
    );
    res.status(200).json(revenueData);
  } else {
    res.status(400).json({ error: "Invalid user metadata" });
  }
});

export { shopRoute };

/*
Improve error-handling in the routes.
*/
