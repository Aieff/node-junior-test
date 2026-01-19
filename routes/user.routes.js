import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/me", auth, (req, res) => {
  return res.json({
    userId: req.userId
  });
});

export default router;
