import { fastify } from "fastify";

const server = fastify({
  logger: true,
});

server.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

server.listen({ port: 9000 }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
