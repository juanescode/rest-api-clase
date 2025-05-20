import express from "express";
import { PORT } from "./config.js";
import { db } from "./db.js";
import router from "./routes/routes.ejemplo.js";

const app = express();

app.use(express.json());
app.use("/api", router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


