"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const ProductSchema = new _mongoose2.default.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    user: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model("Product", ProductSchema);
