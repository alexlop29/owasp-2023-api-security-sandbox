import { DocumentError } from "../types";

class shopError extends Error {
  constructor() {
    super();
  }

  getShopError(error: any): DocumentError {
    if ("Status" in error && error["Status"] == 401) {
      return { Status: 401, Message: "Unauthorized" };
    } else {
      return { Status: 500, Message: "Internal Server Error" };
    }
  }
}

export { shopError };
