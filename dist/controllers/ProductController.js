"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);

class ProductController {
  async create(req, res) {
    try {
      const product = await _Product2.default.create(req.body);
      return res.json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }
  async index(req, res) {
    const { userId } = req.params;
    const user = req.user;
    try {
      const products = await _Product2.default.find({ user: userId }).populate(
        "category"
      );
      return res.json(products);
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }
  async update(req, res) {
    const { productId } = req.params;
    try {
      const product = await _Product2.default.findOne({ _id: productId });
      await product.update(req.body);
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }
}

exports. default = new ProductController();
