import { Router } from "express";
import { addProject } from "../controller/project.controller";
import upload from "../middleware/MultipleFileUploadOnCloudianry";
import cloudinaryFileUploader from "../middleware/FileUploader";

const server = Router();
server.post("/add-project", upload.array("projectPicture", 5), addProject);

export default server;
