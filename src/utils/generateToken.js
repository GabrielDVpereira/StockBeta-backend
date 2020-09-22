import jwt from "jsonwebtoken";

export default function generateToken(payload) {
  const token = jwt.sign(payload, process.env.PRIVATE_KEY);
  return token;
}
