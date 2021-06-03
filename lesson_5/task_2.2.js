/* Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
   Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
   Пустая корзина должна выводить строку «Корзина пуста»;
   Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
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

function countBasketItem(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].quantity;
    }
    return sum;
}

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
// В таком виде работает

let show = document.getElementById("shopBasket");
show.innerHTML = 'В корзине: ' + countBasketItem(basket) + ' товаров на сумму: '
+ countBasketPrice(basket) + ' рублей.';

// Не понимаю, почему не срабатывает

//function full() {
//    for (let i = 0; i < arr.length; i++) {
//        if (arr.length == 0) {
//            return 'Корзина пуста'
//        } else {
//            return 'В корзине: ' + countBasketItem(basket) + ' товаров на сумму: '
//+ countBasketPrice(basket) + ' рублей.';
//        }
//    }
//}
//
//let show = document.getElementById("shopBasket");
//show.innerHTML = full(arr);