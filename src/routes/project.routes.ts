import { Router } from "express";
import { addProject } from "../controller/project.controller";
import cloudinaryFileUploader from "../middleware/FileUploader";

const server = Router();
server.get("/add-project", cloudinaryFileUploader, addProject);

export default server;
