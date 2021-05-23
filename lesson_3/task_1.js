// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

'use strict'

let i = 0;
let j = 0;
let count = 0;

while (i <= 100) {
    for (j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++
        }
    }
    if (count == 2)
        console.log(i);
    count = 0;
    i++;
}
