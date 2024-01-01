import { Shop } from "../types/Shop";
import * as path from "path";
import { readFileSync } from "fs";
import { Revenue } from "../types/Shop";

class DocumentController {
  constructor() {}

  getFile(Shop: Shop["Name"]): string {
    return path.join(__dirname, "..", "data", `${Shop}.json`);
  }

  // Should be async func?
  readFile(File: string): Revenue {
    return JSON.parse(readFileSync(File, "utf8"));
  }
}

export { DocumentController };
