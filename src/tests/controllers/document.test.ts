import { DocumentController } from "../../controllers/document";
import { Revenue } from "../../types";
import { DocumentError, DocumentResponse } from "../../types/documents";
import { user } from "../fixtures/user";

describe("Should describe the document controller", () => {
  test("Should return 200 when the user requests a file and has access to it", async () => {
    let document = new DocumentController();
    expect(await document.readFile("freshkicks", user)).toStrictEqual({
      Name: "Fresh Kicks",
      Revenue: 500.00,
    });
  });

  test("Should return 401 when the user requests a file and does not have access to it", async() => {
    let document = new DocumentController();
    let response: Revenue | DocumentError = await document.readFile("deliciouspie", user);
    if ('Status' in response && 'Message' in response){
        expect(response["Status"]).toEqual(401);
        expect(response["Message"]).toBe("Unauthorized");
    }
  });

  test("Should return 404 when the user requests a file and it is not found", async () => {
    let document = new DocumentController();
    let contents: Revenue | DocumentError =
      await document.readFile("awesomesocks", user);
    if ("Status" in contents && "Message" in contents) {
      expect(contents["Status"]).toEqual(404);
      expect(contents["Message"]).toBe("File Not Found");
    }
  });

  test("Should return 500 when the user requests a file and it returns an unhandled error", async() => {
    
  });


  test("Should return 200 if the user has access to the file", () => {
    let document = new DocumentController();
    let contents: DocumentResponse | DocumentError =
      document.readFilePermissions("freshkicks", user["storeName"]);
    expect(contents["Status"]).toEqual(200);
    expect(contents["Message"]).toBe("OK");
  });

  test("Should return 401 if user does not have access to the file", () => {
    let document = new DocumentController();
    let contents: DocumentResponse | DocumentError =
      document.readFilePermissions("deliciouspie", user["storeName"]);
    expect(contents["Status"]).toEqual(401);
    expect(contents["Message"]).toBe("Unauthorized");
  });
});

// /*
//     NOTE: (ALopez) Continue handling the various fail scenarios.
// */
// test("Should return 400 when an invalid file name is provided", async() => {
// });