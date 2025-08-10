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
