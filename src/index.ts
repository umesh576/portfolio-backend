import express, { Request, Response } from "express";
import project from "./routes/project.routes";

const app = express();

app.use(express.json());

app.use("/", project);
app.listen(8000, () => {
  console.log(`server running at http//localhost:8000`);
});
