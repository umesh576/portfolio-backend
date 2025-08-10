import { Request, Response } from "express";
import TechStack from "../model/techstack.model";
import mongoose from "mongoose";
import Project from "../model/project.model";

export const addProject = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const file = req.files;
    // const files = req.files as { projectPicture?: Express.Multer.File[] };

    // let picturePaths: string[] = [];

    // if (files?.projectPicture && files.projectPicture.length > 0) {
    //   picturePaths = files.projectPicture.map((file) => file.path);
    // }
    body.projectPicture = file;
    // console.log(file);
    const newProject = await Project.create(body);
    // body.useLanguage.map(
    //   async (language: mongoose.Types.ObjectId, index: any) => {
    //     const techStack = await TechStack.findById(language);
    //     techStack?.project.push(newProject._id);
    //     await techStack?.save();
    //   }
    // );

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
