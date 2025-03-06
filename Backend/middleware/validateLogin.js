import { check, validationResult } from "express-validator";

export const validateLogin = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
  // Middleware to check validation result
  (req, res, next) => {
    const errors = validationResult(req);
    console.log("INSIDE THE LOGIN VALIDATIOn")
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
