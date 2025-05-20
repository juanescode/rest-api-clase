import { db } from "../db.js";

export const getController = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM ejemplo");
    res.json(rows);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const postConstroller = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await db.query(
      "INSERT INTO ejemplo (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const patchController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, salary } = req.body;
        const [result] = await db.query(
        "UPDATE ejemplo SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
        [name, salary, id]
        );

     const [rows] = await db.query("SELECT * FROM ejemplo WHERE id = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM ejemplo WHERE id = ?", [id]);
    res.sendStatus(204);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};