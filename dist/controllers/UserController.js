"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _generateHash = require('../utils/generateHash'); var _generateHash2 = _interopRequireDefault(_generateHash);
var _generateToken = require('../utils/generateToken'); var _generateToken2 = _interopRequireDefault(_generateToken);

class UserCotroller {
  async create(req, res) {
    const { name, password, email } = req.body;

    const password_hash = await _generateHash2.default.call(void 0, password);

    try {
      const user = await _User2.default.create({
        name,
        password_hash,
        email,
      });
      const jwt_payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
      };
      const token = _generateToken2.default.call(void 0, jwt_payload);
      return res.header("x-auth-token", token).json(user);
    } catch (error) {
      console.log(error.message);
      return res
        .status(400)
        .json({ message: "Não foi possível criar seu usuário", error });
    }
  }
}

exports. default = new UserCotroller();
