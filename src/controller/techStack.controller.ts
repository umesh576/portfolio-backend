import { Request, Response } from "express";
import CustomError from "../middleware/CustomError.middleware";
import TechStack from "../model/techstack.model";

export const addTechStack = async (req: Request, res: Response) => {
  try {
    // Create tech stack data
    const body = req.body;
    const file = req.file?.path[0];
    body.techStackProfile = file;

    // Create and save to database
    const newTech = await TechStack.create(body);

    // Successful response
    return res.status(201).json({
      success: true,
      statusCode: 200,
      message: "Tech stack added successfully",
      data: newTech,
    });
  } catch (error: any) {
    console.error(error); // Always log for debugging

    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: error.success,
        status: error.status,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      status: "error",
      message: error.message || "Internal server error",
    });
  }
};

export const seeAllTechStack = async (req: Request, res: Response) => {
  try {
    const techkStack = await TechStack.find().populate("project");
    if (!techkStack) {
      throw new CustomError("No teckStack found", 404);
    }

    res.status(200).json({
      status: "success",
      statusCode: 200,
      success: true,
      message: "Languages are fetched sucessfully.",
      data: techkStack,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "failed",
      message: error.message || "server went wrong.",
    });
  }
};

export const seeTechStackByid = async (req: Request, res: Response) => {
  try {
    const { techId } = req.params;
    if (!techId) {
      throw new CustomError("TechId not found.", 404);
    }
    const techStack = await TechStack.findById(techId).populate("project");
    if (!techStack) {
      throw new CustomError("No lanaguage found", 404);
    }

    res.status(200).json({
      status: "success",
      statusCode: 200,
      success: true,
      message: "Language are fetched sucessfully.",
      data: techStack,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "failed",
      message: error.message || "server went wrong.",
    });
  }
};

export const updateTechStack = async (req: Request, res: Response) => {
  try {
    const { techId } = req.params;
    const { techStackName, description, techStackProfile } = req.body;
    if (!techId) {
      throw new CustomError("TechId needed for update", 404);
    }
    const techStack = await TechStack.findByIdAndUpdate(techId, {
      techStackName,
      description,
      techStackProfile,
    });
    if (!techStack) {
      throw new CustomError("Language not found", 404);
    }

    res.status(200).json({
      status: "success",
      statusCode: 200,
      success: true,
      message: "Language is update sucessfully.",
      data: techStack,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "failed",
      message: error.message || "server went wrong.",
    });
  }
};
