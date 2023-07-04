// Обробка помилок
// це механізм який дозволяє обробляти помилки або непередбачувані ситуації в JS
const fnWithError = () => {
  // тут пишеться код в якому ми очікуємо помилку
  throw new Error('Something went wrong') // генеруємо помилку в JS
}
fnWithError() // <== в момент виклику функції зупиниться виконання коду
// out: Uncaught Error: Something went wrong
console.log('Continue...') // це ми вже не побачимо через помилку вище

// як з цим боротися?
try {
  // виконуємо блок кода <== сюди ми поміщаємо блок кода в якому ми очікуємо помилку
} catch (error) {
  // цей блок коду виконується якщо виникає помилка в блоці try, тобто ми перехоплюємо помилку
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
// ====================================================================================================
const num = 42
try {
  num = 100
} catch (error) {
  throw new Error('Something went wrong', {
    // тут ми можемо передати додаткові параметри
    cause: error,
  })
  console.log(error.message)
} finally {
  console.log('Finally')
}

// Взагалом алгоритм такий:
// 1. Виконується код в try
// 2. Якщо помилки немає, то виконується код в finally, тобто ігнорується блок catch
// 3. Якщо помилка є, то виконується код в catch, ігнорується решту блоку try, а потім виконується код в finally

// Error - це об'єкт, який містить в собі інформацію про помилку
// new Error(message, options) - це конструктор, який створює новий об'єкт помилки
// message - повідомлення про помилку
// options - додаткові параметри
// в options можна передати додаткові параметри, наприклад: name, stack, fileName, lineNumber

// --------------------------------------------------------------------------------
// Типи помилок:
// EvalError - помилка в функції eval()
// RangeError - помилка відповідності значення аргументу до діапазону допустимих значень
// ReferenceError - помилка використання невизначеної змінної
// SyntaxError - помилка в синтаксисі
// TypeError - помилка типу
// URIError - помилка в encodeURI() і decodeURI()
// AggregateError - помилка агрегації, яка використовується для групування різних помилок в одну

const ERROR_ID_LIST = {
  NOT_NUMBER: 'NOT_NUMBER',
}

function sumNum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    const error = new TypeError('a and b must be numbers')
    error.name = ERROR_ID_LIST.NOT_NUMBER
  }
  return a + b
}

sumNum(1, 2) // 3
sumNum('1', '2') // Uncaught TypeError: a and b must be numbers

try {
  sumNum('1', '2')
} catch (error) {
  console.log(error.stack) // TypeError: a and b must be numbers at sumNum (15.TryCatch.js: 100) at 15.TryCatch.js: 104
}
