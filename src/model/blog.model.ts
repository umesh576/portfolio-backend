import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: [
      {
        required: [true, "Title must be string."],
        type: String,
      },
    ],
    content: [
      {
        type: String,
        required: [true, "Content must be type of string."],
      },
    ],
    blogImage: [
      {
        type: String,
      },
    ],
    keyPoints: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blog", blogSchema);
export default Blog;
