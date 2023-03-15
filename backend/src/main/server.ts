import express from "express";
import routes from "./config/routes";
import cors from "cors";
import http from "http";
import socket from "./config/socket";

export class Server {
  private app = express();
  private PORT: number = 3000;
  private server =  http.createServer(this.app);

  private middlewares() {
    this.app.use(cors({ credentials: true, origin: "*" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static("public"))
  }

  private start() {
    const cb = () => console.log(`Server running at ${this.PORT}`);
    this.app.listen(this.PORT, cb);
  }

  public bootstrap() {
    this.middlewares();
    socket(this.server);
    routes(this.app);
    this.start();
  }
}
