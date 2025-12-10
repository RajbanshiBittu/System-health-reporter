import express from 'express';
import {systemInfoController, homeController }from "../Controllers/controller.js";

const router = express.Router();

router.get('/', homeController);

// get system metrics route
router.get("/system-health", systemInfoController);

export default router;