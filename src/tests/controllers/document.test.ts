import { DocumentController } from "../../controllers/document";

test("Should locate a file", () => {
    let document = new DocumentController;
    expect(document.getFile("deliciouspie")).toBe("src/data/deliciouspie.json");
});

// may want to mock this function
test("Should read a file", () => {
    let document = new DocumentController();
    expect(document.readFile("src/data/deliciouspie.json").toBe()
})
