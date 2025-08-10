import { Router } from "express";
import {
  addTechStack,
  seeAllTechStack,
  seeTechStackByid,
} from "../controller/techStack.controller";
import cloudinaryFileUploader from "../middleware/FileUploader";

const router = Router();

router.post(
  "/add-techstack",
  cloudinaryFileUploader.single("techStackProfile"),
  addTechStack
);
router.get("/", seeAllTechStack);
router.get("/:techId", seeTechStackByid);

export default router;
