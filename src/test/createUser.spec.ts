import { app } from "../app";
import request from "supertest";

describe("test", () => {
  it("testando router", async () => {

    const response = await request(app).get("/")
    console.log(response)
    expect(response.body).toBe('rafael')

  });
});
