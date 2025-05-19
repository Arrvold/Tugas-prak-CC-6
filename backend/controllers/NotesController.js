import Note from "../models/NotesModel.js";

// GET
async function getUsers(req, res) {
  // try {
  //   const response = await Note.findAll();
  //   res.status(200).json(response);
  // } catch (error) {
  //   console.log(error.message);
  // }
  const id = req.user.id;

  try {
    const notes = await Note.findAll({ where: { userId: id } });

    res.status(200).json({
      message: "Notes berhasil diambil",
      userId: id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET
async function getUserById(req, res) {
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
async function createUser(req, res) {
  // try {
  //   const inputResult = req.body;
  //   await Note.create(inputResult);
  //   res.status(201).json({ msg: "Notes Created" });
  // } catch (error) {
  //   console.log(error.message);
  // }
  const { title, text, date } = req.body;
  const id = req.user.id;

  try {
    const notes = await Note.create({
      title,
      text,
      date,
      userId: id,
    });
    res.status(201).json({
      message: "Notes berhasil dibuat",
      userId: id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { getUsers, createUser, getUserById };


export const updateUser = async (req, res) => {
  // try {
  //   await Note.update(req.body, {
  //     where: {
  //       id: req.params.id
  //     }
  //   });
  //   res.status(200).json({ msg: "Notes Updated" });
  // }
  // catch (error) {
  //   console.log(error.message);
  // }
  const { id } = req.params;

  const userId = req.user.id;
  const { title, text, date } = req.body;
  try {
    const notes = await Note.update(
      {
        title,
        text,
        date,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({
      message: "Notes berhasil diupdate",
      userId,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteUser = async (req, res) => {
  // try {
  //   const result = await Note.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   });
  //   if (result === 0) {
  //     res.status(404).json({ msg: "Notes Not Found" });
  //   } else {
  //     res.status(200).json({ msg: "Notes Deleted" });
  //   }
  // }
  // catch (error) {
  //   console.log(error.message);
  // }
  const { id } = req.params;
  console.log("ID NOTES = ", id);

  const userId = req.user.id;
  try {
    const notes = await Note.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      message: "Notes berhasil dihapus",
      userId,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}