import { Request, Response } from "express";
import TechStack from "../model/techstack.model";
import mongoose from "mongoose";
import Project from "../model/project.model";

export const addProject = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    // const files = req.files as {
    //   map(arg0: (file: any) => { url: any; publicId: any }): unknown;
    //   projectPicture?: Express.Multer.File[];
    // };
    // console.log("Uploaded files:", req.files)` ;
    const picturePaths = req.files
      ? (req.files as Express.Multer.File[]).map((file) => file.path)
      : [];
    if (!body.projectName || !body.description) {
      return res.status(400).json({
        status: "failed",
        message: "Project name and description are required",
      });
    }

    // Handle file uploads - IMPORTANT FIX HERE

    // Create project with picture URLs
    const newProject = await Project.create({
      ...body,
      projectPicture: picturePaths, // Ensure this matches your schema
    });
    // const pictureUrls =
    //   files?.map((file: any) => ({
    //     url: file.path,
    //     publicId: file.filename, // Cloudinary public_id
    //   })) || [];
    // body.projectPicture = picturePaths;
    // const newProject = await Project.create({
    //   ...body,
    //   projectPictures: pictureUrls,
    // });
    res.status(200).json({
      status: "success",
      statusCode: 200,
      success: true,
      message: "New poroject added Sucessfully",
      data: newProject,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "failed",
      message: error.message || "server went wrong.",
    });
  }
};
