import express from "express";
import { getNotes, getNoteById, createNote, updateNote, deleteNote } from "../controllers/NoteController.js";

const router = express.Router();

router.get("/notes/", getNotes);
router.get("/notes/:id", getNoteById);
router.post("/add-users", createNote);
router.put("/note/:id", updateNote);
router.delete("/note/:id", deleteNote);

export default router;
