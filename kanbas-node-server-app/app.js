import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";

const app = express()
Lab5(app)
app.use(cors())
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Hello(app)
app.listen(process.env.PORT || 4000);



