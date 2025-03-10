import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  console.log("Generating token for user:", userId); // Debug log
  console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debug log

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined");
    return res.status(500).json({ message: "Internal Server Error" });
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
  });

  console.log("Token generated:", token); // Debug log
  return token;
};