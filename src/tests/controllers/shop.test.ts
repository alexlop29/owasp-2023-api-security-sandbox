import { ShopController } from "../../controllers/shop";

test("Should return available shops", () => {
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
