import multer from "multer";
import { Request } from "express";
import "dotenv/config";
import { CloudinaryStorage, Options } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

declare module "multer-storage-cloudinary" {
  interface Params {
    folder?: string;
    format?: any;
    public_id?: any;
  }
}

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads",
    public_id: (req: Request, file: any) => {
      const name = file.originalname.split(".")[0];
      return `${name}-${Date.now()}`;
    },
    resource_type: "auto",
    transformation: [{ width: 500, height: 500, crop: "limit" }],
    allowed_formats: ["jpg", "png", "jpeg", "gif", "webp"],
  } as Options["params"],
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    // Add logging to verify files are received
    cb(null, true);
  },
});
export default upload;
