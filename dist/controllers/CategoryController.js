"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);

class CategoryController {
  async create(req, res) {
    try {
      const category = await _Category2.default.create(req.body);
      return res.json(category);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async index(req, res) {
    const { userId } = req.params;

    try {
      const categories = await _Category2.default.find({ user: userId });

      return res.json(categories);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}

exports. default = new CategoryController();
