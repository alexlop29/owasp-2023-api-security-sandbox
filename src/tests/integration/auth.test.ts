import { app } from "../../index";
import { getAuthenticationCookie } from "../utils/getAuthCookie";
import * as http from "http";
import { AUTH_USER } from "../../config/environment";

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

describe("Should describe the Auth0 OpenID Connect integration", () => {
  it("should return 200 and logged in status if an authenticated user requests /", (done) => {
    request(server)
      .get("/")
      .set("Cookie", [`appSession=${cookie}`])
      .send()
      .expect(200)
      .expect("Logged in")
      .end(done);
  });

  it("should return 200 and logged out status if an unauthenticated user requests /", (done) => {
    request(server).get("/").send().expect(200).expect("Logged out").end(done);
  });

  it("should return 200 and output the token claim if an authenticated user requests /profile", async () => {
    const res = await request(server)
      .get("/profile")
      .set("Cookie", [`appSession=${cookie}`]);
    expect(res.body).toContain(AUTH_USER);
    expect(res.status).toBe(200);
  });
});
