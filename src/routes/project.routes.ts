import { Router } from "express";
import { addProject } from "../controller/project.controller";
import upload from "../middleware/MultipleFileUploadOnCloudianry";

const server = Router();
server.get("/add-project", upload.array("projectPicture"), addProject);

export default server;
