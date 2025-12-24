import { User } from "../models/user.model.js";

export const createAdmin = async (req, res) => {
  try {
    if (!process.env.ADMIN_NAME) {
      res.status(400).json({
        success: false,
        message: "Admin Name does Not Exist in enviroment variable",
      });
    }
    if (!process.env.ADMIN_PASSWORD) {
      res.status(400).json({
        success: false,
        message: "Admin password does Not Exist in enviroment variable",
      });
    }
    const adminName = process.env.ADMIN_NAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const existAdmin = await User.findOne({ name: adminName });
    if (existAdmin) {
      console.log("✓ Admin user already exists");
      return;
    }
    await User.create({
      name: adminName,
      password: adminPassword,
      role: "Admin",
    });
    console.log("✓ Admin user created successfully");
  } catch (error) {
    console.error("✗ Failed to create admin user:", error.message);
  }
};
