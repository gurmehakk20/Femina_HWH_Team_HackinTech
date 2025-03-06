import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const signup = async (req, res) => {
  console.log("INSIDE THE SIGNUP");
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  try {
    let user = await User.findOne({ email });
    console.log(user);
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    user = new User({ firstName, lastName, email, password });
    await user.save();

    // Create a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "User registered successfully",
      token, // Send the token back to the frontend
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
