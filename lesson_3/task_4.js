/* *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
    только у вашей пирамиды должно быть 20 рядов, а не 5:
    x
    xx
    xxx
    xxxx
    xxxxx
*/

'use strict'

let a = 20;

for (let x = 0; x < a; x++) {
    let str = "";
    for (let y = 0; y <= x; y++) {
        str += "x";
    }
    console.log(str);
}
