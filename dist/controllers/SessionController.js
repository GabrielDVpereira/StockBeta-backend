"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _generateToken = require('../utils/generateToken'); var _generateToken2 = _interopRequireDefault(_generateToken);

class SessionController {
  async auth(req, res) {
    try {
      const { email, password } = req.body;
      const user = await _User2.default.findOne({ email });

      if (!user) {
        throw { message: "Não existe usuário com esse endereço de email" };
      }

      const isPasswordValid = await _bcryptjs2.default.compare(
        password,
        user.password_hash
      );

      if (isPasswordValid) {
        const jwt_payload = {
          _id: user._id,
          name: user.name,
          email: user.email,
        };
        const jwt_token = _generateToken2.default.call(void 0, jwt_payload);
        return res.header("x-auth-token", jwt_token).json(user);
      } else {
        throw { message: "Verifique suas credenciais" };
      }
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}
exports. default = new SessionController();
