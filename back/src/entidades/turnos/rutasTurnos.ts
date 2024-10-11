import { Router } from "express";
import {
  getAppointmentsController,
  getAppointmentByIdController,
  scheduleAppointmentController,
  cancelAppointmentController,
} from "./controladorTurnos";
import { validateAppointmentData } from "../../middleware/validate";
const router = Router();

router.get("/", getAppointmentsController);
router.get("/:id", getAppointmentByIdController);
router.post(
  "/schedule",
  validateAppointmentData,
  scheduleAppointmentController
);
router.put("/cancel/:id", cancelAppointmentController);

export default router;
