import { FastifyInstance } from "fastify";
import { Controller } from "./controller";

async function Route(app: FastifyInstance): Promise<void> {
    app.get("/:name", Controller);
}

export  default Route;