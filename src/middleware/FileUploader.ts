import multer from "multer";
import { Request } from "express";
import "dotenv/config";
import { CloudinaryStorage, Options } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
declare module "multer-storage-cloudinary" {
  interface Params {
    folder?: string;
    format?: any;
    public_id?: any;
    // Add other Cloudinary parameters you need
  }
}
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, // Fixed typo
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads",
    format: async () => ["png", "jpeg"], // Simplified since we don't use req/file params
    public_id: (req: Request, file: any) => file.originalname.split(".")[0],
    resource_type: "auto",
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  } as Options["params"],
});

const cloudinaryFileUploader = multer({ storage });

export default cloudinaryFileUploader;
