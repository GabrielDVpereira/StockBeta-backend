"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _CategoryController = require('./controllers/CategoryController'); var _CategoryController2 = _interopRequireDefault(_CategoryController);
var _ProductController = require('./controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);
var _SessionController = require('./controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _authorization = require('./middlewares/authorization'); var _authorization2 = _interopRequireDefault(_authorization);

const routes = _express2.default.Router();

routes.post("/user", _UserController2.default.create);
routes.post("/auth", _SessionController2.default.auth);

routes.use(_authorization2.default);
routes.post("/category", _CategoryController2.default.create);
routes.get("/categories/:userId", _CategoryController2.default.index);
routes.post("/product", _ProductController2.default.create);
routes.get("/products/:userId", _ProductController2.default.index);
routes.put("/product/:productId", _ProductController2.default.update);

exports. default = routes;
