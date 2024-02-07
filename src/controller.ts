import { FastifyReply, FastifyRequest } from "fastify";
import Search from "./models/search";
import Puppeteer from "./puppeteer";

export const Controller = async (request: FastifyRequest, reply: FastifyReply) => {
    const {name} = request.params as Search;
    try {
    const result = await Puppeteer(name);
    reply.code(200).send(result);
    } catch (error) {
        reply.code(500).send(error);
    }
}