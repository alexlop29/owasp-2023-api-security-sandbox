import { ShopController } from "../../controllers/shop";
import { user } from "../fixtures/user";

describe("Should describe the shop controller", () => {
  test("Should return all available shops", () => {
    const shop = new ShopController();
    expect(shop.getAllShops()).toStrictEqual({
      Shops: [
        {
          Name: "Delicious Pie",
        },
        {
          Name: "Fresh Kicks",
        },
      ],
    });
  });
  test("Should return a shop's revenue report", async () => {
    const shop = new ShopController();
    expect(await shop.getShopRevenue("freshkicks", user)).toStrictEqual({
      Name: "Fresh Kicks",
      Revenue: 500.0,
    });
  });
});
