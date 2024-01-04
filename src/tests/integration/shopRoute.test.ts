import { app } from "../../index";
import { getAuthenticationCookie } from "../utils/getAuthCookie";
import * as http from "http";

const request = require("supertest");
let server: http.Server;
let cookie: string;

const startServer = async (): Promise<http.Server> => {
  return new Promise((resolve) => {
    server = app.listen(3001, () => resolve(server));
  });
};

beforeAll(async () => {
  server = await startServer();
  cookie = await getAuthenticationCookie();
});

afterAll((done) => {
  server.close((err) => {
    if (err) {
      process.exit(1);
    } else {
      done();
    }
  });
});

/* NOTE: (alopez) Improvement Suggestion
Use Sinon to stub the returned response.
We want to mock external dependencies.
*/

describe("Should describe the Shop route", () => {
  it("should return 200 and all available shops when the user requests /shop", (done) => {
    request(app)
      .get("/shop")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res: any) => {
        const shops = res.body.Shops;
        const firstShop = shops[0];
        expect(firstShop).toHaveProperty("Name", "Delicious Pie");
      })
      .end(done);
  });
  it("should return 200 if the user is authenticated, has the right claim, and requests /:storeName/revenue.json", (done) => {
    request(app)
      .get("/shop/freshkicks/revenue.json")
      .set("Cookie", [`appSession=${cookie}`])
      .expect("Content-Type", /json/)
      .expect((res: any) => {
        expect(res.body).toHaveProperty("Name", "Fresh Kicks");
      })
      .end(done);
  });
  it("should return 401 if the user is authenticated, does not have the right claim, and requests /:storeName/revenue.json", (done) => {
    request(app)
      .get("/shop/deliciouspie/revenue.json")
      .set("Cookie", [`appSession=${cookie}`])
      .expect((res: any) => {
        console.log(`deliciouspie: ${JSON.stringify(res.body)}`);
      })
      .expect(401)
      .end(done);
  });
});

/*
Should return 401 if the user submits an empty claim
Should submit @DocumentResponse if 200
const validateUserClaim
*/
