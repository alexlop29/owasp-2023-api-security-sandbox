import { readFileSync } from "fs";
import path = require("path");

class ShopController {
  constructor() {}

  getAllShops() {
    return {
      Shops: [
        {
          ShopName: "Delicious Pie",
        },
        {
          ShopName: "Fresh Kicks",
        },
      ],
    };
  };

  getShopRevenue(shopName: string) {
    let filePath = path.join(__dirname, "..", "data", `${shopName}.json`);
    let contents = readFileSync(filePath, "utf8");
    return JSON.parse(contents);
  };
}

export { ShopController };
