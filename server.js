"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = process.env.PORT || 5000; // Heroku will need the PORT environment variable
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
console.log(__dirname);
app.listen(port, function () { return console.log("Server is listening to " + port + "."); });
