import { app } from "../app";
import request from "supertest";
import { UserRepository } from "../modules/Repository/UserRepository";

describe("test endpoints Users", () => {
  it("testando create User", async () => {

    const name = "Rafael"

    const response = await request(app).post("/create").send({name:name})
    console.log(response)
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")

    await new UserRepository().delete(response.body.id)
    
  });


});
