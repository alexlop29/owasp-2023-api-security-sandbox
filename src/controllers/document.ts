import { Revenue } from "../types/shop";
import { DocumentError, DocumentResponse } from "../types/documents";
import { promises as fs } from "fs";
import { User } from "../types";

class DocumentController {
  constructor() {}
  /*
    NOTE: (ALopez) As mentioned in the README, the scope of the project is limited to
    demonstrating bola and rate-limiting remediation strategies.
    `await fs.readFile(`src/data/${Name}`, "utf-8");` is vulnerable to path traversal 
    vulnerabilites, in which case we would need to add a helper function to validate 
    the Name. However, in production, we are most likely working with an external 
    storage service, such as a document database or file storage service (e.g. S3),
    avoiding this particular vulnerability. 
  */
  async readFile(Name: string, User: User): Promise<Revenue | DocumentError> {
    try {
      let userAccess: DocumentResponse | DocumentError  = this.readFilePermissions(Name, User["storeName"]);
      let file = await fs.readFile(`src/data/${Name}.json`, "utf-8");
      return JSON.parse(file);
    } catch (error: unknown) {
      
      return { Status: 404, Message: "File Not Found" };
    }
  };

  readFilePermissions(
    Name: string,
    UserClaim: User["storeName"],
  ): DocumentResponse | DocumentError {
    if (Name == UserClaim) {
      return { Status: 200, Message: "OK" };
    } else {
      return { Status: 401, Message: "Unauthorized" };
    }
  };
}

export { DocumentController };
