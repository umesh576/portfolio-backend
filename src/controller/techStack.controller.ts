import { Request, Response } from "express";

export const addTechStack = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    body.techStackProfile = req.file ? req.file.path : null;
  } catch (error) {
    res.status(500).json({
      success: false, // Fixed typo
      message: "Tech stack cannot created.",
    });
  }
};
