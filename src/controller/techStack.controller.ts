import { Request, Response } from "express";
import CustomError from "../middleware/CustomError.middleware";
import TechStack from "../model/techstack.model";

export const addTechStack = async (req: Request, res: Response) => {
  try {
    console.log("umehs");
    const body = req.body;
    body.techStackProfile = req.file ? req.file.path : null;
    if (!body.techStackName || !body.description) {
      throw new CustomError("All details are nedded.", 404);
    }

    const newTech = await TechStack.create(body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "New techstack added sucessfully.",
      data: newTech,
    });
  } catch (error) {
    res.status(500).json({
      success: false, // Fixed typo
      message: "Tech stack cannot created.",
    });
  }
};
