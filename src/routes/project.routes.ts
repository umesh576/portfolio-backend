import { Router } from "express";
import { addProject } from "../controller/project.controller";

const server = Router();
server.get("/add-project", addProject);

export default server;
