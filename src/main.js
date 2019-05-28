"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import $ from 'jquery'
var livro_1 = __importDefault(require("./modelo/livro"));
var livro = new livro_1.default('Dom Quixote', 108.80, 0.10);
console.log(livro.precoComDesconto());
/*
$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`
    <h2>Preço: R$${livro.precoComDesconto()}</h2>
`)
*/
