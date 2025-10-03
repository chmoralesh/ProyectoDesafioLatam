import { Router } from "express";
import { alarmaController } from "../controllers/alarma.controller.js";

const router = Router();

router.get("/", alarmaController.readAlarmas);
router.get("/:id", alarmaController.readAlarma);

export default router;
