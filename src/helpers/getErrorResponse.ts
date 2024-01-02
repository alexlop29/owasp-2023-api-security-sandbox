import { DocumentError } from "../types";

const getErrorResponse = (error: any): DocumentError => {
  if (error.includes("not found")) {
    return { Status: 404, Message: "File Not Found" };
  } else if ("Status" in error && error["Status"] == 401) {
    return { Status: 401, Message: "Unauthorized" };
  } else {
    return { Status: 500, Message: "Internal Server Error" };
  }
};

export { getErrorResponse };
