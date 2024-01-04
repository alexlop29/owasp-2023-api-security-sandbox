//@ts-nocheck
import express from "express";
import { ShopController } from "../controllers/shop";
import { requiresAuth } from "express-openid-connect";
import { DocumentError, User } from "../types";
import { validateUserClaim } from "../helpers/validateUserClaim";
import { getShopErrorResponse } from "../helpers/getShopErrorResponse";

const shopRoute = express.Router();
shopRoute.use(express.json());

shopRoute.get("/", async (_req, res) => {
  const shops = new ShopController();
  let listOfShops = shops.getAllShops();
  res.status(200).json(listOfShops);
});

shopRoute.get("/:storeName/revenue.json", requiresAuth(), async (req, res) => {
  const storeName = req.params.storeName; // may want to offload check to custom middleware! // can use to further expand
  try {
    const user: User | DocumentError = validateUserClaim(req.oidc.user!);
    
    console.log(user); // outputs error, but it is not captured by the external try .. catch {}
    // will create a custom error object which extends error
    const shops = new ShopController();
    let revenueData = await shops.getShopRevenue(storeName, user);
    console.log(revenueData);
    return res.status(200).json(revenueData);
  } catch (error) {
    const handledError: DocumentError = getShopErrorResponse(error);
    res.status(handledError["Status"]).json(handledError["Message"]);
  }
});

export { shopRoute };
