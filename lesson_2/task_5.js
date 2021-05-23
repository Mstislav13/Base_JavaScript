/* Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
   Обязательно использовать оператор return.
*/
'use strict'

function plus(a, b) {
    return (a + b);
}

function minus(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function split(a, b) {
    return (a / b);
}

let a = 15;
let b = 7;

console.log(plus(a, b));
console.log(minus(a, b));
console.log(multiply(a, b));
console.log(split(a, b));
