import express, { Request, Response } from "express";
import project from "./routes/project.routes";
import connectDatbase from "./config/connectDatbase.config";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI || "";

connectDatbase(DB_URI);

app.use(express.json());

app.use("/project", project);
app.listen(PORT, () => {
  console.log(`server running at http//localhost:${PORT}`);
});
