import { Router } from "express";
import {
  addProject,
  seeProject,
  seeProjectById,
} from "../controller/project.controller";
import upload from "../middleware/MultipleFileUploadOnCloudianry";
import cloudinaryFileUploader from "../middleware/FileUploader";

const router = Router();

router.post("/add-project", upload.array("projectPicture", 5), addProject);
router.get("/", seeProject);
router.get("/:projectId", seeProjectById);

export default router;
