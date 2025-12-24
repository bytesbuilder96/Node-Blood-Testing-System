import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes/index.js";
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send(
    "<h1 style='display: flex; justify-content: center; align-items: center; font-size:9rem; margin-top:10rem;'>Server is running.</h1>"
  );
});

app.use("/api", router);

export { app };
