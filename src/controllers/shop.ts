import { DocumentError } from "../types/documents";
import { Shops, Revenue, User } from "../types";
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

  async getShopRevenue(
    Shop: string,
    User: User,
  ): Promise<Revenue | DocumentError> {
    try {
      return await this.Document.readFile(Shop, User);
    } catch (error: unknown) {
      return error as DocumentError;
    }
  }
}

export { ShopController };
