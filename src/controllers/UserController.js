import User from "../models/User";
import generateHash from "../utils/generateHash";
import generateToken from "../utils/generateToken";

class UserCotroller {
  async create(req, res) {
    const { name, password, email } = req.body;

    const password_hash = await generateHash(password);

    try {
      const user = await User.create({
        name,
        password_hash,
        email,
      });
      const jwt_payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
      };
      const token = generateToken(jwt_payload);
      return res.header("x-auth-token", token).json(user);
    } catch (error) {
      console.log(error.message);
      return res
        .status(400)
        .json({ message: "Something went wrong to create your user", error });
    }
  }
}

export default new UserCotroller();
