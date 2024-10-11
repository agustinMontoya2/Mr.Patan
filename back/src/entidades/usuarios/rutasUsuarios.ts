import { Router } from "express";
import {
  getUsersController,
  getUserByIdController,
  loginUsersController,
  registerUsersController,
} from "./controladorUsuarios";
import { validateUserData, validateLoginData } from "../../middleware/validate";
const router = Router();

router.get("/", getUsersController);
router.post("/register", validateUserData, registerUsersController);
router.post("/login", validateLoginData, loginUsersController);
router.get("/:id", getUserByIdController);

export default router;
