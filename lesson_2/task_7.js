/* С помощью рекурсии организовать функцию возведения числа в степень.
   Формат: function power(val, pow), где val – заданное число, pow – степень.
*/
'use strict'

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

let x = 3;
let y = 2;

console.log(power(x, y));
