import express, { Request, Response, urlencoded } from "express";
import project from "./routes/project.routes";
import connectDatbase from "./config/connectDatbase.config";
import blog from "./routes/blog.routes";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI || "";

connectDatbase(DB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/project", project);
app.use("/api/blog", blog);

app.listen(PORT, () => {
  console.log(`server running at http//localhost:${PORT}`);
});
