"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const CategorySchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

exports. default = _mongoose2.default.model("Category", CategorySchema);
