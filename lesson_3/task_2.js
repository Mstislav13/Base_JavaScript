/* С этого урока начинаем работать с функционалом интернет-магазина.
   Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины
   в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
   a) Организовать такой массив для хранения товаров в корзине;
   b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

'use strict'

let basket = [
    { name: '', price: 128.67 },
    { name: '', price: 2150 },
    { name: '', price: 15 },
    { name: '', price: 368 },
    { name: '', price: 97.50 },
    { name: '', price: 1802 },
]
let y = basket.reduce(function countBasketPrice(acc, elem) {
    return { count: acc.count + 1, sum: acc.sum + elem.price }
}, { sum: 0 });

console.log(y);
