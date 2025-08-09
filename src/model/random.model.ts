import mongoose from "mongoose";

const randomSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: [true, "Project name is required."],
      trim: true,
      minLength: [3, "Name is must more than 3 letter."],
    },
    photo: [
      {
        required: [true, "techStack is required necessary"],
        trim: true,
        type: mongoose.Types.ObjectId,
        ref: "techstack",
      },
    ],
  },
  { timestamps: true }
);

const Random = mongoose.model("Random", randomSchema);
export default Random;
