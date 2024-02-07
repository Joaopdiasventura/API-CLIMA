import fastify from "fastify";
import startServer from "./server";
import Route from "./route";

const app = fastify({logger: true});

app.register(Route);

async function main() {
    await startServer(app);
}

main()