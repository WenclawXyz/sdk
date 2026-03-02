import express from "express";
import cors from "cors";
import inferenceRoutes from "./routes/inference.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/inference", inferenceRoutes);

app.use(errorMiddleware);

export default app;
