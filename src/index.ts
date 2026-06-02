import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Fernando Nobre").listen(3000);
const even = process.env.nome

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}
  nome = ${even}
  `
);

