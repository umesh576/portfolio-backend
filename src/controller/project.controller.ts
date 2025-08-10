import { Request, Response } from "express";
import TechStack from "../model/techstack.model";
import mongoose from "mongoose";
import Project from "../model/project.model";
import CustomError from "../middleware/CustomError.middleware";

export const addProject = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const picturePaths = req.files
      ? (req.files as Express.Multer.File[]).map((file) => file.path)
      : [];

    if (!body.projectName || !body.description) {
      return res.status(400).json({
        status: "failed",
        message: "Project name and description are required",
      });
    }
    const newProject = await Project.create({
      ...body,
      projectPicture: picturePaths,
    });

    const techStack = await TechStack.findById(body.useLanguage);
    if (!techStack) {
      throw new CustomError("This language is not found", 404);
    }
    techStack.project.push(newProject._id);
    await techStack.save();

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

export const seeProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.find().populate("useLanguage");
    if (!project) {
      throw new CustomError("No project are added.", 400);
    }

    res.status(200).json({
      status: "success",
      statusCode: 200,
      success: true,
      message: "Project are fetched sucessfully.",
      data: project,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "failed",
      message: error.message || "server went wrong.",
    });
  }
};

export const seeProjectById = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;

    if (!projectId) {
      throw new CustomError("ProjectId is required", 404);
    }

    const projects = await Project.findById(projectId).populate("useLanguage");
    res.status(200).json({
      status: "success",
      statusCode: 200,
      success: true,
      message: "Project fetched sucessfully.",
      data: projects,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "failed",
      message: error.message || "server went wrong.",
    });
  }
};
