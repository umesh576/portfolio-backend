import mongoose from "mongoose";

const techstackSchema = new mongoose.Schema(
  {
    techStackName: {
      required: [true, "TechStack name is required"],
      type: String,
      trim: true,
    },
    description: {
      required: [true, "Description is needed."],
      type: String,
      trim: true,
      minLength: [10, "Provide more description."],
    },
    techStackProfile: {
      required: [true, "tecjStackProfile is required."],
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const TechStack = mongoose.model("techstack", techstackSchema);

export default TechStack;
