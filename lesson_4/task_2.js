/* Продолжить работу с интернет-магазином:
   В прошлом домашнем задании вы реализовали корзину на базе массивов.
   Какими объектами можно заменить их элементы?
   Реализуйте такие объекты.
   Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
'use strict'

function ProductBasket(arr, name, quantity, price) {
    arr.push({
        product: name,
        quantity: quantity,
        price: price,
        total: totalSum
    });
}

function totalSum() {
    return this.quantity * this.price;
}

let basket = [
    {
        product: 'Компьютер ASUS',
        price: 31990,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'Флешка USB SAMSUNG',
        price: 2090,
        quantity: 3,
        total: totalSum
    },
    {
        product: 'Клавиатура LOGITECH K120',
        price: 560,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'Мышь XIAOMI Mi Dual',
        price: 1090,
        quantity: 1,
        total: totalSum
    },
]

function countBasketPrice(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}

function descBasketPrice(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * '
        + arr[i].quantity + ' шт.' + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}

console.log('В вашей корзине находятся следующие товары:\n' + descBasketPrice(basket) + '\n
Общая стоимость товаров в корзине составляет: ' + countBasketPrice(basket));

