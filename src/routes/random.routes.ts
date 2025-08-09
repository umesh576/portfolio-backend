import { Router } from "express";
import cloudinaryFileUploader from "../middleware/FileUploader";
import { createRandom } from "../controller/random.controller";

const router = Router();

router.post("/random", cloudinaryFileUploader.single("photo"), createRandom); // Added controller

export default router;
