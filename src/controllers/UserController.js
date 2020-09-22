import User from "../models/User";
import generateHash from "../utils/generateHash";

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
      res.json(user);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Não foi possível criar seu usuário", error });
    }
  }
}

export default new UserCotroller();
