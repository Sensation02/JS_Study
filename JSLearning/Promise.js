// #region Проміси
// Проміси дозволяють обробляти відкладені в часі події
// Наприклад треба відправити запит на віддалений сервер і отримати відповідь. запит можна відправити, але ми не знаємо коли буде відповідь. Наш додаток має очікувати відповідь від сервера і в цей час він має щось робити, або не робити нічого, що не бажано. Тому такий запит робиться асинхронно і відповідь приходить асинхронно. Коротко: Проміс - це обіцянка дати відповідь пізніше, або повернути помилку якщо результат запиту повернути неможливо.

// У Проміса є три стани:
// 1. Очікування (або pending)
// 2. Виконаний (resolved)
// 3. Відхилений (rejected; при помилці)

/*
const myPromise = new Promise((resolve, reject) => { 
  виконання асинхронних дій. 
  Всередині можна викликати одну з функцій resolve або reject
})
*/

// Отримання результату Промісу (як з ним працювати):
/*
myPromise
.then(value => {
...Дія у випадку успішного виконання Проміса
...Значення value - це значення, передане у виклику функції resolve всередину Промісу
})
.catch(error => {
...Дія у випадку відхилення Промісу
...Значення error - це значення, передане у виклику функції reject всередину Промісу
})
*/

fetch('https://jsonplaceholder.typicode.com/todos') // створюється проміс в стані pending; ні одна наступна дія не буде виконана поки наш проміс в pending; Якщо стан зміниться то виконається одна з наступних дій
  .then((response) => response.json()) // resolved, але тут через метод json створюється новий проміс (нашу відповідь присвоюємо в response і далі за допомоги функції потрібні нам дані "пакуються в json")
  .then((json) => console.log(json)) // знову resolved, вже попереднього проміса, який повертає об'єкт або масив об'єктів
  .catch((err) => console.log(err)) // rejected, якщо попередні проміси не виконалися

// спрощуємо попередній запит (вбудована функція fetch):
const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((err) => reject(err)),
  )

getData('https://jsonplaceholder.typicode.com/todos/4')
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))
// #endregion