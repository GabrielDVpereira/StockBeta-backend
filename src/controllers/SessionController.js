import User from "../models/User";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken";

class SessionController {
  async auth(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        throw { message: "User not found for this email address" };
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        user.password_hash
      );

      if (isPasswordValid) {
        const jwt_payload = {
          _id: user._id,
          name: user.name,
          email: user.email,
        };
        const jwt_token = generateToken(jwt_payload);
        return res.header("x-auth-token", jwt_token).json(user);
      } else {
        throw { message: "Check your credentials" };
      }
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}
export default new SessionController();
