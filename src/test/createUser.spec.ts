import { app } from "../app";
import request from "supertest";
import { UserRepository } from "../modules/Repository/UserRepository";
import { prismaClient } from "../database/prismaClient";

describe("test endpoints Users", () => {
  it("testando create User", async () => {

    const name = "Rafael"
    
    const response = await request(app).post("/create").send({name:name})
    console.log(response)
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")

    await new UserRepository().delete(response.body.id)

  });

  it("test get User", async () => {

    const user1 = await prismaClient.user.create({ data: { name: "Rafael" } })
    const user2 = await prismaClient.user.create({ data: { name: "Adriano" } })
    const user3 = await prismaClient.user.create({ data: { name: "Waguininho" } })

    const response = await request(app).get("/findAll")
    console.log(response)
    expect(response.body).toHaveLength(3)

    await prismaClient.user.delete({ where: { id: user1.id } })
    await prismaClient.user.delete({ where: { id: user2.id } })
    await prismaClient.user.delete({ where: { id: user3.id } })

  })

});
