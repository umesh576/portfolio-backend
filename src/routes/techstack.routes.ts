import { Router } from "express";
import { addTechStack } from "../controller/techStack.controller";
import cloudinaryFileUploader from "../middleware/FileUploader";

const router = Router();

router.post(
  "/add-techstack",
  cloudinaryFileUploader.single("techStackProfile"),
  addTechStack
);

export default router;
