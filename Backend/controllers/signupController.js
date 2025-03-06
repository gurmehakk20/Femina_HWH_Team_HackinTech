import User from "../models/User.js"; // ✅ Ensure correct path

export const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    // Create new user
    user = new User({ firstName, lastName, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
