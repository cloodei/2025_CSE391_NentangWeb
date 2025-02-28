import y from "./index4.html";

const server = Bun.serve({
  port: 8080,
  
  routes: {
    "/": y,
  },
});

console.log(`Server running at http://${process.env.NW_IP}:${server.port} | ${server.url}`);
