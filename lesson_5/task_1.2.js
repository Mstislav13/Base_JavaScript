/* Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
   Доска должна быть верно разлинована на черные и белые ячейки.
   Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/

'use strict'

function drawChess() {
    let table = document.createElement('table');
    let flag = true;
    let line = document.createElement('tr');
    let arr = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        let tdd = document.createElement('td');
        tdd.style.width = '60px';
        tdd.style.height = '60px';
        tdd.style.textAlign = 'center';
        tdd.innerHTML = 8 - i;
        tr.appendChild(tdd);
        for (let j = 0; j < 8; j++) {
            if (j == 0)
                flag = !flag;
                let td = document.createElement('td');
                td.style.width = '60px';
                td.style.height = '60px';
                td.style.border = 'solid 1px';
            if (flag) {
                td.style.background = 'black';
            } else
                td.style.background = 'white';
                tr.appendChild(td);
                flag = !flag;
        }
        table.appendChild(tr);
    }

    for (let k = 0; k < 9; k++) {
        let td = document.createElement('td');
        td.style.width = '60px';
        td.style.height = '60px';
        td.style.textAlign = 'center';
        td.style.background = 'white';
        td.innerHTML = arr[k];
        line.appendChild(td);
    }
    table.appendChild(line);
    document.body.appendChild(table);
}
drawChess();
