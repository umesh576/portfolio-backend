import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: [true, "Project name is required."],
      trim: true,
      minLength: [3, "Name is must more than 3 letter."],
    },
    techStack: [
      {
        required: [true, "techStack is required necessary"],
        trim: true,
        type: mongoose.Types.ObjectId,
        ref: "techstack",
      },
    ],
    description: {
      required: [true, "Description is required"],
      type: String,
    },
    startingDate: {
      required: [true, "Provide date is neccessary."],
      type: Date,
    },
    endDate: {
      required: [true, "Provide date is neccessary."],
      type: Date,
    },
    keyPoints: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("project", projectSchema);
export default Project;
