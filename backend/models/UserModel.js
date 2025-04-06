import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const User = db.define(
  "notes", // Nama Tabel
  {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    title: Sequelize.STRING,
    text: Sequelize.STRING,
    date: Sequelize.DATEONLY,
  }
);

db.sync().then(() => console.log("Database synced"));

export default User;
