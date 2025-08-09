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
        required: false,
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Random = mongoose.model("Random", randomSchema);
export default Random;
