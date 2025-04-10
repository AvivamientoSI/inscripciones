import e from "express";
import dotenv from "dotenv";
import cors from "cors";

import {connectDB} from "./config/db.js";

import schoolRoutes from "./routes/school.route.js";
import inscriptionRoutes from "./routes/inscription.route.js";
//import loginRoutes from "./routes/login.routes.js"
import registrationRoutes from "./routes/registration.route.js";

dotenv.config();

const app = e();
app.use(cors());
app.use(e.json());

const port = process.env.PORT || 5000;

app.use("/api/schools", schoolRoutes);
app.use("/inscription", inscriptionRoutes);
app.use("/registration", registrationRoutes);
app.use("/", schoolRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});

