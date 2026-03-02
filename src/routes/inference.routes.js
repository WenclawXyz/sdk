import express from "express";
import { runInference } from "../controllers/inference.controller.js";

const router = express.Router();

router.post("/", runInference);

export default router;
