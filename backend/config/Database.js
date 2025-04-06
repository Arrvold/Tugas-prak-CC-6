import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("RECOVER_YOUR_DATA", "root", "", {
  host: "35.225.144.134",
  dialect: "mysql",
});

export default db;
