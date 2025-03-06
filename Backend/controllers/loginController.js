import jwt from 'jsonwebtoken';
import User from "../models/User.js"; // Import User model
console.log(User); 
export const login = async (req, res) => {
  console.log("Inside login controller")
  const { email, password } = req.body;

  console.log(req.body)

  try {
    // Check if the user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    console.log(user)

    // Check if the entered password matches the stored hashed password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    console.log("PASSWORD IS MATCHED")
    console.log(process.env.JWT_SECRET)
    console.log(user._id)

    let token;
    try {
      token = jwt.sign({ id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1d' });
    } catch (err) {
      console.error("Error generating JWT:", err);
      return res.status(500).json({ error: "Error generating token" });
    }


    // Send the token back to the frontend
    res.status(200).json({
      message: "Login successful",
      token, 
      user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
