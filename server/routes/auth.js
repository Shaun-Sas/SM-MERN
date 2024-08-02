import express from "express";
import { login } from "../controller/auth.js";

const router = express.Router();

router.post("/login", login); //this will be auth/login

export default router;