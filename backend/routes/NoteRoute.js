import express from "express";
import { getNotes, getNoteById, createNote, updateNote, deleteNote } from "../controllers/NoteController.js";

const router = express.Router();

router.get("/users/", getNotes);
router.get("/users/:id", getNoteById);
router.post("/add-users", createNote);
router.put("/user/:id", updateNote);
router.delete("/user/:id", deleteNote);

export default router;
