// Елемент - це вбудований клас в JS, який представляє собою HTML-елемент дозволяє взаємодіяти з ними на веб-сторінці

;<div id='box' class='box'>
  {' '}
</div> // - це елемент
// можна помітити як він пишеться в JS:
// Перед таким тегом треба ставити ;, щоб JS не сприйняв це як помилку
// Весь текст в тегу пишеться у фігурних дужках і з одинарними лапками

// Документ - це вбудований об'єкт браузера, який представляє собою HTML-документ, який відкритий в браузері і дає доступ до всіх елементів на сторінці

document.getElementById('box') // тут ми звертаємось до елемента в документі по його id
// якщо в нас є два елемента з таким же id, то ми звернемось до першого з них

// якщо в нас два елемента з однаковим id, то ми можемо звернутись до них напряму через консоль браузера і в такому випадку в консолі ми побачимо обидва елемента (колекція з двома елементами)

// HTMLCollection - це вбудований об'єкт (клас) браузера, який представляє собою колекцію елементів, які ми можемо отримати з документа. Вона автоматично оновлюється, якщо ми додаємо або видаляємо елементи з документа
// Властивості HTMLCollection:
document.length // тут ми звертаємось до властивості length об'єкта document, яка показує кількість елементів в колекції
document.item(0) // тут ми звертаємось до елемента в документі по його індексу (перший елемент має індекс 0)
document.namedItem('box') // тут ми звертаємось до елемента в документі по його імені
document.getElementsByClassName('box') // тут ми звертаємось до елемента в документі по його класу
document.getElementsByTagName('div') // тут ми звертаємось до елемента в документі по його тегу
// можна ще написати document.getElementsByTagName('div')[0] і тоді ми звернемось до першого елемента з тегом div

main.getElementsByTagName('h1') // тут ми звертаємось до елемента в документі по його тегу, але в цьому випадку ми звертаємось до елементів, які знаходяться в елементі main	і так можна звертатись до елементів, які знаходяться в інших елементах
main.getElementsByTagName('h1').length // тут ми звертаємось до властивості length об'єкта main, яка показує кількість елементів в колекції по тегу h1, які знаходяться в елементі main

// все це стосується також і getElementsByClassName

document.querySelector('#box') // це вбудована функція, яка шукає елемент в документі по його селектору (в даному випадку по id)
document.querySelectorAll('.box') // це вбудована функція, яка шукає всі елементи в документі по їх селектору (в даному випадку по класу)

// У випадках з querySelector і querySelectorAll ми можемо використовувати всі селектори, які ми використовуємо в CSS і повертає нам вони колекцію елементів (NodeList)

// NodeList - це вбудований абстрактний клас браузера, який охоплює різні типи даних, такі як елементи, текстові вузли, коментарі і т.д. Він представляє собою колекцію вузлів, які ми можемо отримати з документа. Він не завжди оновлюється, якщо ми додаємо або видаляємо елементи з документа.
// В нього є свої властивості і методи (основні):

document.querySelector('#box').entries() // тут ми звертаємось до методу entries() об'єкта з id box, який показує всі властивості об'єкта з id box
document.querySelector('#box').keys() // тут ми звертаємось до методу keys() об'єкта з id box, який показує всі ключі об'єкта з id box
document.querySelector('#box').forEach((value, index, array) => {}) // тут ми звертаємось до методу forEach() об'єкта з id box, який показує всі значення, індекси і масиви об'єкта з id box
document.querySelector('#box').values() // тут ми звертаємось до методу values() об'єкта з id box, який показує всі значення об'єкта з id box
document.querySelector('#box').item() // тут ми звертаємось до методу item() об'єкта з id box, який показує елемент з id box за вказаним індексом

// -------------------------------------------------------------------------------------------
// ----- ЯКЩО хочемо шукати елементи то краще це робити через querySelector по класам --------
// -------------------------------------------------------------------------------------------

// Копіювання елементів з документа
document.querySelector('#box').cloneNode(true) // тут ми звертаємось до методу cloneNode() об'єкта з id box, який показує копію елемента з id box, але якщо ми в методі cloneNode() вкажемо true, то ми скопіюємо всі вкладені елементи, а якщо false, то ми скопіюємо тільки елемент з id box

// Створення елементів в документі
document.createElement('div') // тут ми звертаємось до методу createElement() об'єкта document, який створює елемент div

// Створення фрагментів в документі
document.createDocumentFragment() // тут ми звертаємось до методу createDocumentFragment() об'єкта document, який створює фрагменти. Можна створити змінну і присвоїти їй значення методу createDocumentFragment() і потім використовувати цю змінну для створення фрагментів. Або декілька змінних з фрагментами і потім їх використовувати

// Порівняння елементів
document.querySelector('.main').isSameNode(document.querySelector('.main')) // тут ми звертаємось до методу isSameNode() об'єкта з класом main, який порівнює елемент з класом main з елементом з класом main і повертає true, якщо вони однакові і false, якщо вони різні

main.isEqualNode(main) // тут ми звертаємось до методу isEqualNode() об'єкта з класом main, який порівнює елемент з класом main з елементом з класом main і повертає true, якщо вони однакові і false, якщо вони різні

// В чому різниця між isSameNode() і isEqualNode()?
// isSameNode() - це метод, який порівнює елементи по силці, тобто якщо ми створимо два однакових елементи і порівняємо їх, то він поверне false, бо вони не однакові по силці. Тобто він порівнює силку на елементи
// isEqualNode() - це метод, який порівнює елементи по вмісту, тобто якщо ми створимо два однакових елементи і порівняємо їх, то він поверне true, бо вони однакові по вмісту. Тобто він порівнює вміст елементів

// Список дочірніх елементів
document.querySelector('.main').children // показує всі дочірні елементи елемента з класом main
document.querySelector('.main').firstElementChild // показує перший дочірній елемент елемента з класом main
document.querySelector('.main').lastElementChild // показує останній дочірній елемент елемента з класом main
document.querySelector('.main').childElementCount // показує кількість дочірніх елементів елемента з класом main
document.querySelector('.main').childNodes // показує всі дочірні елементи елемента з класом main
document.querySelector('.main').hasChildNodes() // перевіряє чи є дочірні елементи елемента з класом main і повертає true, якщо є і false, якщо немає
document.querySelector('.main').firstChild // показує перший дочірній елемент елемента з класом main
document.querySelector('.main').lastChild // показує останній дочірній елемент елемента з класом main
// Перевірка наявності дочірніх елементів
document.querySelector('.main').contains(document.querySelector('.main')) // перевіряє чи є елемент з класом main дочірнім елементом елемента з класом main і повертає true, якщо є і false, якщо немає

// Список батьківських елементів
document.querySelector('.main').parentElement // показує батьківський елемент елемента з класом main
document.querySelector('.main').parentNode // показує батьківський елемент елемента з класом main
document.querySelector('.main').parentElement.parentElement // показує батьківський елемент батьківського елемента елемента з класом main

// Список сусідніх елементів
document.querySelector('.main').nextElementSibling // показує наступний сусідній елемент елемента з класом main
document.querySelector('.main').previousElementSibling // показує попередній сусідній елемент елемента з класом main
document.querySelector('.main').nextSibling // показує наступний сусідній елемент елемента з класом main
document.querySelector('.main').previousSibling // показує попередній сусідній елемент елемента з класом main

// Додавання елементів в документ
document.querySelector('.main').append(document.createElement('div')) // додаємо елемент div в елемент з класом main - це додавання в кінець
document.querySelector('.main').prepend(document.createElement('div')) // додаємо елемент div в елемент з класом main - це додавання в початок

document.querySelector('.main').appendChild(document.createElement('div')) // додаємо елемент div в елемент з класом main - по суті це те саме, що і append(). Але appendChild() працює тільки з елементами, а append() працює з будь-якими даними + append() може додавати декілька елементів одночасно

// може бути більш конкретно
document
  .querySelector('.main')
  .insertBefore(
    document.createElement('div'),
    document.querySelector('.main').firstElementChild,
  ) // додаємо елемент div перед першим дочірнім елементом елемента з класом main
document
  .querySelector('.main')
  .insertAdjacentElement('beforebegin', document.createElement('div')) // додаємо елемент div перед елементом з класом main
document
  .querySelector('.main')
  .insertAdjacentElement('afterbegin', document.createElement('div')) // додаємо елемент div в початок елемента з класом main
document
  .querySelector('.main')
  .insertAdjacentElement('beforeend', document.createElement('div')) // додаємо елемент div в кінець елемента з класом main
document
  .querySelector('.main')
  .insertAdjacentElement('afterend', document.createElement('div')) // додаємо елемент div після елемента з класом main

// Додавання тексту по певній позиції
document.querySelector('.main').insertAdjacentText('beforebegin', 'Hello') // додаємо текст перед елементом з класом main. Тут діють ті самі позиції, що і в insertAdjacentElement()

// Видалення елементів з документа
document.querySelector('.main').remove() // видаляє елемент з класом main
document.querySelector('.main').removeChild(document.querySelector('.main')) // видаляє дочірній елемент елемента з класом main

// Заміна елементів в документі
document.querySelector('.main').replaceWith(document.createElement('div')) // замінює елемент з класом main на елемент div
// в replaceWith() можна вказувати декілька елементів через кому і тоді вони замінять елемент з класом main
document
  .querySelector('.main')
  .replaceChild(document.createElement('div'), document.querySelector('.main')) // замінює дочірній елемент елемента з класом main на елемент div

document.querySelector('.main').replaceChildren(document.createElement('div')) // замінює всі дочірні елементи елемента з класом main на елемент div. replaceChildren() приймає декілька елементів через кому і тоді вони замінять всі дочірні елементи елемента з класом main. Він приймає тільки елементи, а не будь-які дані

document.querySelector('.main').after(document.createElement('div')) // додає елемент div після елемента з класом main. Приймає декілька елементів через кому і тоді вони додаються після елемента з класом main
document.querySelector('.main').before(document.createElement('div')) // додає елемент div перед елементом з класом main. Також приймає декілька елементів.

// Перевірка елемента на CSS селектор
document.querySelector('.main').matches('.main') // повертає true, якщо елемент з класом main відповідає CSS селектору .main і false, якщо не відповідає
