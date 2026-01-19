import request from "supertest";
import app from "../app.js";

let token;
let taskId;

beforeAll(async () => {
  // Faz login para obter token JWT
  const response = await request(app)
    .post("/auth/login")
    .send({
      email: "teste@email.com",
      password: "123456"
    });

  token = response.body.token;
});

describe("Tasks - Proteção", () => {

  it("não deve permitir acesso sem token", async () => {
    const response = await request(app)
      .get("/task");

    expect(response.status).toBe(401);
  });

});

describe("Tasks - CRUD", () => {

  it("deve criar uma nova task", async () => {
    const response = await request(app)
      .post("/task")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Minha primeira task"
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title", "Minha primeira task");

    taskId = response.body.id;
  });

  it("deve listar todas as tasks do usuário", async () => {
    const response = await request(app)
      .get("/task")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("deve buscar uma task específica", async () => {
    const response = await request(app)
      .get(`/task/${taskId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", taskId);
  });

  it("deve atualizar uma task", async () => {
    const response = await request(app)
      .put(`/task/${taskId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        completed: true
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("completed", true);
  });

  it("não deve acessar task de outro usuário", async () => {
    const response = await request(app)
      .get("/task/99999")
      .set("Authorization", `Bearer ${token}`);

    expect([403, 404]).toContain(response.status);
  });

  it("deve deletar uma task", async () => {
    const response = await request(app)
      .delete(`/task/${taskId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(204);
  });

});
