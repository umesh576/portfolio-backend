import mongoose from "mongoose";

const techstackSchema = new mongoose.Schema(
  {
    techStackName: {
      type: String,
      required: [true, "TechStack name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is needed."],
      trim: true,
      minLength: [10, "Description must be at least 10 characters"],
    },
    techStackProfile: {
      type: String,
      default: null, // Make it optional
    },
    project: [
      {
        type: mongoose.Types.ObjectId,
        ref: "project",
      },
    ],
  },
  { timestamps: true }
);
const TechStack = mongoose.model("techstack", techstackSchema);

export default TechStack;
