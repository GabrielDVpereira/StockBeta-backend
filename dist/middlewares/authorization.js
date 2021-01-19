"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

 function authorization(req, res, next) {
  try {
    const token = req.headers["x-auth-token"];
    if (!token) {
      return res.status(401).json({ message: "Não achei seu token :(" });
    }
    const decodedInfo = _jsonwebtoken2.default.verify(token, process.env.PRIVATE_KEY);
    req.user = decodedInfo;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Usuário não autorizado  :<" });
  }
} exports.default = authorization;
