import express, { Request, Response } from "express";
import connectDatbase from "./config/connectDatbase.config";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

import project from "./routes/project.routes";
import blog from "./routes/blog.routes";
import techStack from "./routes/techstack.routes";
import random from "./routes/random.routes";
import CustomError from "./middleware/CustomError.middleware";

const app = express();

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI || "";

connectDatbase(DB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/project", project);
app.use("/api/blog", blog);
app.use("/api/tech-stack", techStack);

app.use("/api/random", random);

// Global error handling middleware
app.use((err: any, req: Request, res: Response, next: Function) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      success: err.success,
      status: err.status,
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    status: "error",
    message: err.message || "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`server running at http//localhost:${PORT}`);
});
