

import { Router } from "express";
import { addBlog } from "../controller/blog.controller";
const server = Router()


server.post('/add-blog',addBlog)


export default server