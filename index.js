import "dotenv/config";
import { app } from "./src/app.js";
import { connectedBD } from "./src/config/db.config.js";
import { createAdmin } from "./src/utils/createDefalut.util.js";

const sarverStart = async (req, res) => {
  try {
    await connectedBD();
    await createAdmin();
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Sarver Started Successfly on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Server not started");
  }
};

sarverStart();
