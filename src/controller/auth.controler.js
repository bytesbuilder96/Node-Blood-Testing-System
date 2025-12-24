import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name) {
      res.status(400).json({
        success: false,
        message: "Name is Required",
      });
    }
    if (!password) {
      res.status(400).json({
        success: false,
        message: "password is Required",
      });
    }
    const user = await User.findOne({
      name,
      role: "Admin",
    }).select("+password");
    if (!user) {
      res.status(403).json({
        success: false,
        message: "User not found",
      });
    }
    let isPasswordValid = false;
    if (user.role === "Admin") {
      isPasswordValid = await bcrypt.compare(password, user.password);
    } else {
      isPasswordValid = user.password === password;
    }
    if (!isPasswordValid) {
      res.status(400).json({
        message: "Invaild Credentinals",
      });
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        role: "Admin",
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    return res.status(200).json({
      message: "Login successful",
      data: {
        id: user._id,
        name: user.name,
        role: user.role,
        accessToken,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login field error",
      error,
    });
    console.log("error", error);
  }
};
