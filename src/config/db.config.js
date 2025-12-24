import mongoose from "mongoose";

export const connectedBD = async () => {
  try {
    const DB_URL = process.env.DB_URL;
    if (!DB_URL) {
      console.log("DB_URL not available or define in Envermental Variable");
    }
    const connectionInstance = await mongoose.connect(DB_URL);
    console.log(
      `Database connected Successfuly on host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database Not Connected");
  }
};
