"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var livro_1 = __importDefault(require("./modelo/livro"));
var livro = new livro_1.default('Dom Quixote', 108.80, 0.10);
// console.log(livro.precoComDesconto())
jquery_1.default('body').append("<h1>" + livro.nome + "</h1>");
jquery_1.default('body').append("\n    <h2>Pre\u00E7o: R$" + livro.precoComDesconto() + "</h2>\n");
