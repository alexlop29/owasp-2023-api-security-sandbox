import { DocumentController } from "../../controllers/document";
import { DocumentError } from "../../types/Documents";
import { Revenue } from "../../types/Shop";

test("Should read file", async() => {
    let document = new DocumentController();
    expect(await document.readFile("src/data/deliciouspie.json")).toStrictEqual(
        {
            "Name": "Delicious Pie",
            "Revenue": 10000.00
        }
    );
});

test("Should return 404 when a file is not found", async() => {
    let document = new DocumentController();
    let contents: Revenue | DocumentError = await document.readFile("src/data/awesomesocks.json");
    if ('Status' in contents && 'Message' in contents) {
        expect(contents['Status']).toEqual(404);
        expect(contents['Message']).toBe("File Not Found");
    };
});

test("Should return 400 when an invalid file name is provided", async() => {
    
});
