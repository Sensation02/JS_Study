// #region Обробка помилок
const fnWithError = () => {
  throw new Error('Something went wrong') // генеруємо помилку в JS
}
fnWithError() // <== в момент виклику функції зупиниться виконання коду
// out: Uncaught Error: Something went wrong
console.log('Continue...') // це ми вже не побачимо через помилку вище

// як з цим боротися?
try {
  // виконуємо блок кода <== сюди ми поміщаємо блок кода в якому ми очікуємо помилку
} catch (error) {
  // цей блок коду виконується якщо виникає помилка в блоці try
}
// Приклад:
const fnWithError2 = () => {
  throw new Error('Something went wrong') // генеруємо помилку в JS
}
try {
  fnWithError2()
} catch (error) {
  // тут функція буде присвоєно в перемінну err
  console.error(error) // виведення всієї помилки в консоль
  console.log(error.message)
  // викликаємо тільки повідомлення що є у функції => Something went wrong
}
console.log('Continue...')
// виконання коду буде продовжуватися незалежно від помилки

// тобто рекомендовано поміщати блоки коду де очікуються помилки в try catch блок
// #endregion
