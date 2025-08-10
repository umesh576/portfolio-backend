import { Request, Response } from "express";
import Random from "../model/random.model";
export const createRandom = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    body.photo = req.file ? req.file.path : null; // Fixed file access

    const random = await Random.create(body); // Remove the extra save()

    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "random created",
      data: random,
    });
  } catch (error) {
    res.status(500).json({
      success: false, // Fixed typo
      message: "not created random",
    });
  }
};
