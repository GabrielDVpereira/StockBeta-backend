"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 async function GenerateHash(password) {
  try {
    const salt = await _bcryptjs2.default.genSalt(10);

    const hash = await _bcryptjs2.default.hash(password, salt);

    return hash;
  } catch (error) {
    console.log(error);
    return error;
  }
} exports.default = GenerateHash;
