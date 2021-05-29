/* Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
   надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
   десятки и сотни. Например, для числа 245 надо получить следующий объект:
   {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
   необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
'use strict'

function decomposition(number) {
    if (number < 0 || number > 999) {
        console.log('Не корректное число, введите число от 0 до 999 ');
        let obj = {};
        return obj;
    } else {
        let digits = ['unit', 'tenner', 'hundreds'];
        let obj = {};
        let i = 0;
        for (let i = 0; number != 0; i++) {
            obj[digits[i]] = number % 10;
            number = (number - number % 10) / 10;
        }
        return obj;
    }
}

let x = 578;

console.log(decomposition(x));
