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
  }
}

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads",
    public_id: (req: Request, file: any) => file.originalname.split(".")[0],
    resource_type: "auto",
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  } as Options["params"],
});

const upload = multer({ storage, limits: { fileSize: 5.1024 * 1024 } });
export default upload;
