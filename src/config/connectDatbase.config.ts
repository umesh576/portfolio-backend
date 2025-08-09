import mongoose from "mongoose";

const connectDatbase = async (url: string) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Datbase connected.");
    })
    .catch((e) => {
      console.log("error getting");
    });
};
export default connectDatbase;
