import express from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/NotesController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { Register, Login, refreshToken, logout } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users/", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserById);
router.post("/add-users", verifyToken, createUser);
router.put("/user/:id", verifyToken, updateUser);
router.delete("/user/:id", verifyToken, deleteUser);

// User Routes
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", logout);

export default router;
