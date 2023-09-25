import express from "express";
import router from "../src/routes/ProductAPI";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

dotenv.config();

const server = express();

const port = process.env.PORT || 4000;
server.use(express.urlencoded({ extended: true }));

server.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

server.use(router);

server.use(express.static(path.join(__dirname, "../public")));

server.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

server.get("/ping", (req, res) => {
  res.send({ message: "PONG!" });
});
