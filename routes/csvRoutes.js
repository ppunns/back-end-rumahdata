import express from "express";
import { getPTK } from "../controllers/csvController.js";

const router = express.Router();

router.get("/ptk", getPTK);

export default router;
