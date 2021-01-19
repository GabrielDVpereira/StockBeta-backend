import jwt from "jsonwebtoken";

export default function authorization(req, res, next) {
  try {
    const token = req.headers["x-auth-token"];
    if (!token) {
      return res.status(401).json({ message: "Auth token must be provided" });
    }
    const decodedInfo = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decodedInfo;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Access forbidden" });
  }
}
