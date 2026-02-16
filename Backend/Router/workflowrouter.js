import express from "express"
import workflow from "../controllers/workflow.js";
const router=express.Router();

router.post("/data",workflow);
export default router
