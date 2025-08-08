import { Router } from "express";
import { addProject } from "../controller/project.controller";

const server = Router();
server.get("/", addProject);

export default server;
