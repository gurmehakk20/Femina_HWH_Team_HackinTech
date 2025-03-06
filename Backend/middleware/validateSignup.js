import { check, validationResult } from "express-validator";

export const validateSignup = [
  check("firstName", "First Name is required").not().isEmpty(),
  check("lastName", "Last Name is required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password must be 8 or more characters").isLength({ min: 8 }),
  check("confirmPassword", "Confirm Password is required").not().isEmpty(),
  // Custom validator to ensure password match
  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
  // Middleware to check validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
