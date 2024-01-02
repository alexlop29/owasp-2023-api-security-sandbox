import { DocumentError } from "../types/documents";
import { Shops, Revenue } from "../types";
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

  async getShopRevenue(Shop: string): Promise<Revenue | DocumentError> {
    try {
      return await this.Document.readFile(Shop);
    } catch (error: unknown) {
      return error as DocumentError;
    }
  }
}

export { ShopController };
