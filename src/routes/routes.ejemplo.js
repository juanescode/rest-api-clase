import { Router } from "express";
import { deleteController, getController, patchController, postConstroller } from "../controllers/controllers.ejemplo.js";

const router = Router();

router.get("/", getController);
router.post("/", postConstroller)
router.patch("/:id", patchController);
router.delete("/:id",  deleteController)

export default router;