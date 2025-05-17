import Note from "../models/NoteModel.js";

// GET
async function getNotes(req, res) {
  try {
    const response = await Note.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// GET
async function getNoteById(req, res) {
  try {
    const response = await Note.findOne({
      where:{
        id: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createNote(req, res) {
  try {
    const inputResult = req.body;
    await Note.create(inputResult);
    res.status(201).json({ msg: "Notes Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getNotes, createNote, getNoteById };


export const updateNote = async (req, res) => {
  try {
    await Note.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Notes Updated" });
  }
  catch (error) {
    console.log(error.message);
  }
}

export const deleteNote = async (req, res) => {
  try {
    const result = await Note.destroy({
      where: {
        id: req.params.id
      }
    });
    if (result === 0) {
      res.status(404).json({ msg: "Notes Not Found" });
    } else {
      res.status(200).json({ msg: "Notes Deleted" });
    }
  }
  catch (error) {
    console.log(error.message);
  }
}