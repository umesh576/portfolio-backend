import { Request, Response } from "express";
import Blog from "../model/blog.model";

export const addBlog = async (req: Request, res: Response) => {
  const { title, content, keyPoints } = req.body;
  if (!title || !content) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "blog cannot created",
    });
  }
  const newBlog = await Blog.create({ title, content, keyPoints });

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "new blog added",
    data: newBlog,
  });
};
