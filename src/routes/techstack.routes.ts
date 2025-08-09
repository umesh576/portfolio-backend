import { Router } from "express";
import { addTechStack } from "../controller/techStack.controller";

const server = Router();

server.post("/add-techstack", addTechStack);

export default server;
