import e from "express";
import dotenv from "dotenv";
import cors from "cors";

import {connectDB} from "./config/db.js";

import schoolRoutes from "./routes/school.route.js";

dotenv.config();

const app = e();
app.use(cors());
app.use(e.json());

const port = process.env.PORT || 5000;

app.use("/api/schools", schoolRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});

