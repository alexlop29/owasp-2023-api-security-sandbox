import { Revenue, Shops } from "../types/Shop";
import { DocumentController } from "./document";

class ShopController {
  constructor(public Document = new DocumentController()) {}

  getAllShops(): Shops {
    return {
      Shops: [
        {
          Name: "Delicious Pie",
        },
        {
          Name: "Fresh Kicks",
        },
      ],
    };
  }

//   getShopRevenue(Shop: string): Revenue {
//     const revenue = this.Document.getFile(Shop);
//     return this.Document.readFile(revenue);
//   }
}

export { ShopController };
