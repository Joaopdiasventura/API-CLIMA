import fastify from "fastify";
import cors from '@fastify/cors';
import startServer from "./server";
import Route from "./route";

const app = fastify({logger: true});

app.register(cors, {
    origin: "*",
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH']
  });

app.register(Route);

async function main() {
    await startServer(app);
}

main()