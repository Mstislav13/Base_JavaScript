/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
   где arg1, arg2 — значения аргументов, operation — строка с названием операции.
   В зависимости от переданного значения выполнить одну из арифметических операций
   (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/
'use strict'

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case plus:
            return arg1 + arg2;
        case minus:
            return arg1 - arg2;
        case multiply:
            return arg1 * arg2;
        case split:
            return arg1 / arg2;
    }
}

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

let arg1 = 5;
let arg2 = 8;
let operation = plus;

console.log(mathOperation(arg1, arg2, operation));
