"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

class Database {
  constructor() {
    this.init();
  }

  async init() {
    try {
      await _mongoose2.default.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("banco conectado com sucesso!");
    } catch (error) {
      console.log("Erro ao conectar banco -> " + error);
    }
  }
}
exports. default = new Database();
