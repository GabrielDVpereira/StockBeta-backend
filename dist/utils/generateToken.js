"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

 function generateToken(payload) {
  const token = _jsonwebtoken2.default.sign(payload, process.env.PRIVATE_KEY);
  return token;
} exports.default = generateToken;
