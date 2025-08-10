import { Router } from "express";
import { addTechStack } from "../controller/techStack.controller";
import uploadOncloudinary from "../config/cloudinary.config";
import cloudinaryFileUploader from "../middleware/FileUploader";

const server = Router();

server.post(
  "/add-techstack",
  cloudinaryFileUploader.single("techStackProfile"),
  addTechStack
);

export default server;
