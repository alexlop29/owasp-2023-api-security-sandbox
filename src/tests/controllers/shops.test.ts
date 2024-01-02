import { ShopController } from "../../controllers/shop";

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
    expect(await shop.getShopRevenue("deliciouspie")).toStrictEqual({
      Name: "Delicious Pie",
      Revenue: 10000.0,
    });
  });
});
