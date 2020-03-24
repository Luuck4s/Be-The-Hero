const request = require("supertest");
const api = require("../src/index");

const MOCK_ONG = {
  name: "APAD",
  email: "contato@apad.com.br",
  whatsapp: "47000000",
  city: "Rio do Sul",
  uf: "SC"
};

const MOCK_INCIDENT = {
  title: "Caso 1",
  description: "Detalhes do caso",
  value: 120
};

let MOCK_ONG_ID = "";
let MOCK_INCIDENT_ID = "";

describe("Suíte de Testes - API", () => {
  describe("Routes Create", () => {
    it("Deverá cadastrar uma ONG", async () => {
      const response = await request(api)
        .post("/ongs")
        .send(MOCK_ONG);

      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty("id");

      MOCK_ONG_ID = response.body.id;
    });

    it("Deverá retornar um erro caso ong não exista", async () => {
      const MOCK_ONG_ID_INVALID = "dasdasdsad";

      const response = await request(api)
        .post("/incidents")
        .set("Authorization", MOCK_ONG_ID_INVALID)
        .send(MOCK_INCIDENT);

      expect(response.status).toEqual(401);
      expect(response.body).toHaveProperty("error");
    });

    it("Deverá cadastrar uma caso", async () => {
      const response = await request(api)
        .post("/incidents")
        .set("Authorization", MOCK_ONG_ID)
        .send(MOCK_INCIDENT);

      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty("id");

      MOCK_INCIDENT_ID = response.body.id;
    });
  });

  describe("Routes List", () => {
    it("Deverá retornar uma lista de ONG's", async () => {
      const response = await request(api).get("/ongs");

      expect(response.status).toEqual(200);
      expect(Array.isArray(response.body)).toEqual(true);
    });

    it("Deverá trazer uma lista do caso com o número total de registros", async () => {
      const response = await request(api).get(`/incidents`);

      expect(response.status).toEqual(200);
      expect(Array.isArray(response.body)).toEqual(true);
      expect(response.header).toHaveProperty("x-total-count");
    });

    it("Deverá retornar uma lista de casos de uma ONG", async () => {
      const response = await request(api)
        .get("/profile")
        .set("Authorization", MOCK_ONG_ID);

      expect(response.status).toEqual(200);
      expect(Array.isArray(response.body)).toEqual(true);
    });
  });

  describe("Rota Sessions", () => {
    it("Deverá retornar um erro ao tentar logar com id inválido", async () => {
      const MOCK_ONG_ID_INVALID = "4das5da";

      const response = await request(api)
        .post("/sessions")
        .send({ id: MOCK_ONG_ID_INVALID });

      expect(response.status).toEqual(400);
    });

    it("Deverá retornar o nome da ONG", async () => {
      const response = await request(api)
        .post("/sessions")
        .send({ id: MOCK_ONG_ID });

      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty("name");
    });
  });

  describe("Router Delete", () => {
    it("Deverá retornar um erro ao tentar deletar uma ONG, erro de casos associados a ong", async () => {
      const response = await request(api)
        .delete("/ongs")
        .set("Authorization", MOCK_ONG_ID);

      expect(response.status).toEqual(401);
      expect(response.body).toHaveProperty("error");
    });

    it("Deverá retornar erro ao tentar deletar uma caso com Id Ong inválido", async () => {
      const ID_NOT_VALID = "123q4dsa";

      const response = await request(api)
        .delete(`/incidents/${MOCK_INCIDENT_ID}`)
        .set("Authorization", ID_NOT_VALID);

      expect(response.status).toEqual(401);
      expect(response.body).toHaveProperty("error");
    });

    it("Deverá deletar um caso", async () => {
      const response = await request(api)
        .delete(`/incidents/${MOCK_INCIDENT_ID}`)
        .set("Authorization", MOCK_ONG_ID);

      expect(response.status).toEqual(204);
    });

    it("Deverá retornar um erro ao tentar deletar uma ONG, erro de ong não existente", async () => {
      const MOCK_ONG_ID_INVALID = "31dsad";

      const response = await request(api)
        .delete("/ongs")
        .set("Authorization", MOCK_ONG_ID_INVALID);

      expect(response.status).toEqual(404);
      expect(response.body).toHaveProperty("error");
    });

    it("Deverá deletar uma ONG", async () => {
      const response = await request(api)
        .delete("/ongs")
        .set("Authorization", MOCK_ONG_ID);

      expect(response.status).toEqual(204);
    });
  });
});
