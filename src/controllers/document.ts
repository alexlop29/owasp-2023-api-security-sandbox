import { Revenue } from "../types/Shop";
import { DocumentError } from "../types/Documents";
import { promises as fs } from "fs";

class DocumentController {
  constructor() {}

  // Improve error handling for non-ENOENT: no such file or directory errors
  async readFile(Name: string): Promise<Revenue | DocumentError> {
    try {
      let file = await fs.readFile(Name, "utf-8");
      return JSON.parse(file)
    } catch (error: unknown) {
      return { Status: 404, Message: "File Not Found" };
    }
  };

}

export { DocumentController };
