import express from "express";
import {
  register,
  login,
  getUserDetails,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { check } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    check("firstName").notEmpty().withMessage("First name is required"),
    check("lastName").notEmpty().withMessage("Last name is required"),
    check("mobileNumber")
      .isLength({ min: 10, max: 10 })
      .withMessage("Mobile number must be 10 characters"),
    check("email").isEmail().withMessage("Invalid email address"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  register
);

router.post("/login", login);
router.get("/getCurrentUser", authMiddleware, getUserDetails);

export default router;
