/* Когда написал добавление в карзину - количество товара увеличивалось, а сумма нет.
   Когда дописал вычитание, вообще перестало работать.
*/
'use strict'

let d = document,
    itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
    cartCont = d.getElementById('cart_content'); // блок вывода данных корзины

// получаем данные из LocalStorage
function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}
// записываем данные в LocalStorage
function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}
// добавляем товар в корзину
function addToCart(e) {
    this.disabled = true; // блокируем кнопку на время операции с корзиной
    let cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
        itemId = this.getAttribute('data-id'), // ID товара
        itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
        itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара

    if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[itemId][2] += 1;
    } else { // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemTitle, itemPrice, 1];
    }
    if (cartData.hasOwnProperty(itemPrice)) { // добавляем цену товара
        cartData[itemPrice][2] += 1;
    }
    if (!setCartData(cartData)) { // обновляем данные в LocalStorage
        this.disabled = false; // разблокируем кнопку после обновления LS
    }
    return false;
}
// убираем товар из корзины
function minusToCart(e) {
    this.disabled = true; // блокируем кнопку на время операции с корзиной
    let cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
        itemId = this.getAttribute('data-id'), // ID товара
        itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
        itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара

    if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то убираем -1 из его количества
        cartData[itemId][2] -= 1;
    }
    if (cartData.hasOwnProperty(itemPrice)) { // убираем цену товара
        cartData[itemPrice][2] -= 1;
    }
    if (!setCartData(cartData)) { // обновляем данные в LocalStorage
        this.disabled = false; // разблокируем кнопку после обновления LS
    }
    return false;
}

// устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for (let i = 0; i < itemBox.length; i++) {
    addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}

// устанавливаем обработчик события на каждую кнопку "Убрать из корзины"
for (let i = 0; i < itemBox.length; i--) {
    addEvent(itemBox[i].querySelector('.minus_item'), 'click', minusToCart);
}

// открываем корзину со списком добавленных товаров
function openCart(e) {
    let cartData = getCartData(), // вытаскиваем все данные корзины
        totalItems = '';
    // если что-то в корзине уже есть, начинаем формировать данные для вывода
    if (cartData !== null) {
        totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
        for (let items in cartData) {
            totalItems += '<tr>';
            for (let i = 0; i < cartData[items].length; i++) {
                totalItems += '<td>' + cartData[items][i] + '</td>';
            }
            totalItems += '</tr>';
        }
        totalItems += '</table>';
        cartCont.innerHTML = totalItems;
    } else {
        // если в корзине пусто, то сообщаем об этом
        cartCont.innerHTML = 'В корзине пусто!';
    }
    return false;
}
// открыть корзину
addEvent(d.getElementById('checkout'), 'click', openCart);
// очистить корзину
addEvent(d.getElementById('clear_cart'), 'click', function (e) {
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Корзина очищена.';
});