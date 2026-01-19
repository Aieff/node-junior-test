import request from "supertest";
import app from "../app.js";

describe("Auth - Register", () => {

    it("deve registrar um novo usuário", async () => {

        const email = `teste_${Date.now()}@email.com`;

        const response = await request(app)
        .post("/auth/register")
        .send({
            name: "Usuário Teste",
            email: email,
            password: "123456"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("email", email);
        expect(response.body).not.toHaveProperty("password");
    });

    it("não deve permitir cadastro com email duplicado", async () => {
    const response = await request(app)
        .post("/auth/register")
        .send({
        name: "Usuário Teste",
        email: "teste@email.com",
        password: "123456"
        });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    });

});

describe("Auth - Login", () => {

    it("deve autenticar o usuário e retornar um token JWT", async () => {
        const response = await request(app)
        .post("/auth/login")
        .send({
            email: "teste@email.com",
            password: "123456"
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("token");
        expect(typeof response.body.token).toBe("string");
    });

    it("não deve autenticar com senha inválida", async () => {
        const response = await request(app)
        .post("/auth/login")
        .send({
            email: "teste@email.com",
            password: "senha_errada"
        });

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty("error");
    });

});
