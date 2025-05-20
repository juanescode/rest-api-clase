import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "universidadd",
});

db.query("SELECT 1")
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.log("Database connection failed", err);
  });

db.on("error", (err) => {
  console.log("Database error", err);
});
