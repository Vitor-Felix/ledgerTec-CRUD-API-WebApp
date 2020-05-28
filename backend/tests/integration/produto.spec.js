const request = require("supertest");
const app = require("../../src/app");

function toHaveProdutoDefault(response) {
    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("descricao");
    expect(response).toHaveProperty("categoria");
    expect(response.categoria).toHaveProperty("id");
    expect(response.categoria).toHaveProperty("categoria");
}

describe("Produto", () => {
    beforeAll(async () => {
        await request(app)
            .post("/categorias")
            .send({ categoria: "Categoria 1" });

        await request(app)
            .post("/categorias")
            .send({ categoria: "Categoria 2" });
    });

    it("should be able to create a new Produto", async () => {
        const response = await request(app).post("/produtos").send({
            categoriaId: 1,
            descricao: "Hello Tests",
        });

        expect(response.body).toHaveProperty("produtoId");
        expect(response.body.produtoId).toBeGreaterThan(0);
    });

    it("should be able to update a Produto", async () => {
        const response = await request(app).put("/produtos/1").send({
            categoriaId: 2,
            descricao: "Tests, hello",
        });

        toHaveProdutoDefault(response.body.produto);

        expect(response.body.produto.descricao).not.toMatch("Hello Tests");
        expect(response.body.produto.categoria.id).not.toBe(1);
    });

    it("should be able to get one instance of Produto", async () => {
        const response = await request(app).get("/produtos/1").expect(200);

        toHaveProdutoDefault(response.body.produto);

        expect(typeof response.body.produto.categoria).toBe("object");
    });

    it("should be able to get all instances of Produto", async () => {
        const response = await request(app).get("/produtos").expect(200);

        toHaveProdutoDefault(response.body.produtos[0]);
    });

    it("should be able to delete a Produto", async () => {
        const response = await request(app).delete("/produtos/1").expect(200);

        expect(response.text).toBe("Produto removido com sucesso");
    });
});
