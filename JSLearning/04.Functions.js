// #region Функції
// це блок кода який можна використовувати багаторазово (як метод в C#)
let number1 = 10
let number2 = 20
let number3 = number1 + number2
console.log(number3) //30
// але рекомендується уникати повтору кода

number1 = 5
number2 = 10

function sum(number1, number2) {
  const result = number1 + number2
  console.log(result)
}
sum(number1, number2) // 15

number1 = 8
number2 = 5
sum(number1, number2) // 13
// --------------------------------------------------------------------------------
// Функція може бути:
// - названа
// - присвоєна в перемінну
// - анонімною
// - може бути аргументом при виклику іншої функції
// - властивістю об'єкта (може бути методом)
// - може бути карірованою (функція яка повертає функцію)
// - також є мемоізація (кешування результатів функції)

// функція - це об'єкт і як в будь якого об'єкта в неї є властивості
function myFn(num1, num2) {
  let res
  num1 += 1
  res = num1 + num2
  return res
}
// якщо в кінці функції немає return вона буде повертати UNDEFINED

console.log(myFn(10, 10)) // 21

// передача значення за посиланням:
function increasePersonAge(person) {
  person.age += 1
  return person
}
increasePersonAge(person)
console.log(person.age) // 23
// тобто ми мутуємо об'єкт всередину функції (передали об'єкт за посиланням)
// це НЕ рекомендується робити!!!!!!!!
// А що робити якщо це треба зробити?

const personOne = {
  name: 'Michael',
  age: 25,
}

function increasePersonAge(person) {
  const updatePerson = Object.assign({}, person) // новий об'єкт який ми змінюємо
  updatePerson.age += 1
  return updatePerson
}

const updatePersonOne = increasePersonAge(personOne)
console.log(personOne.age) // 25
console.log(updatePersonOne.age) // 26
// АЛЕ треба врахувати чи є вкладеність об'єктів в об'єкт
// ==================================================================================
function calcSpace(amount, unit = 'px') {
  return `${amount * 4}${unit}`
}
console.log(calcSpace(4, 'px')) // 16px
console.log(calcSpace(2)) // 8px
console.log(calcSpace(2, 'em')) // 8em
// --------------------------------------------------------------------------------
function reloadData(amount) {
  if (amount <= 0) {
    console.log('Недостатньо даних')
    reloadData(amount - 1)
  } else {
    console.log('Завантаження даних')
  }
}
reloadData(1) // Завантаження даних
// --------------------------------------------------------------------------------
function pauseStopByTrack(trackName) {
  let originTrackName = trackName
  return function pauseStop() {
    console.log(`${originTrackName} зупинено`)
  }
}
const pauseStopNew = pauseStopByTrack('Track 1')
pauseStopNew() // Track 1 зупинено
// --------------------------------------------------------------------------------
// функціональний вираз
const runCommand = function (command, errorFn) {
  const result = command()

  if (!result) {
    return errorFn()
  }
}
runCommand(
  function () {
    console.log('Запуск команди')
    return 1 - 1
  },
  function () {
    console.log('Помилка запуску команди')
  },
)
// --------------------------------------------------------------------------------
// стрілочна функція
const sum1 = (num1, num2) => {
  const result = num1 + num2
  return result
}
console.log(sum1(10, 10)) // 20
// --------------------------------------------------------------------------------
// стрілочна функція без фігурних дужок
const sum2 = (num1, num2) => num1 + num2
console.log(sum2(10, 10)) // 20
// --------------------------------------------------------------------------------
// каррірована функція (функція яка повертає функцію)
const sum3 = (num1) => (num2) => num1 + num2
console.log(sum3(10)(10)) // 20
// --------------------------------------------------------------------------------
// Мемоізація - це збереження результатів виконання функції для певного набору аргументів
function memoize(fn) {
  // функція яка приймає функцію
  const cache = {} // кеш для зберігання результатів
  return (arg) => {
    // повертаємо функцію
    if (arg in cache) {
      // якщо аргумент є в кеші
      return cache[arg] // повертаємо результат з кешу
    } else {
      // якщо аргументу немає в кеші
      const result = fn(arg) // виконуємо функцію з аргументом
      cache[arg] = result // зберігаємо результат в кеш
      return result // повертаємо результат
    }
  }
}
const memoizedSum = memoize(sum) // мемоізована функція sum (цю функцію ми записували раніше, а тепер ми її можемо використовувати з кешу)
console.log(memoizedSum(10, 10)) // 20

const decrement = (num1, num2) => num1 - num2 // функція яку ми хочемо мемоізувати
const memoizedDecrement = memoize(decrement) // мемоізована функція decrement
console.log(memoizedDecrement(10, 5)) // 5 - виконується функція decrement

// в даному випадку ми зберігаємо результати виконання функції. Тобто якщо ми викликаємо функцію з одним і тим же аргументом, то ми будемо отримувати результат з кешу, а не виконувати функцію знову

const memoCalcSpace = memoize(calcSpace) // мемоізована функція calcSpace
memoCalcSpace(4, 'px') // 16px
// або можна написати ще так, через JSON:
function memoize(fn) {
  const cache = {}
  return function () {
    const key = JSON.stringify(arguments) // створюємо ключ з аргументів
    if (key in cache) {
      return cache[key] // повертаємо результат з кешу
    } else {
      const result = fn.apply(this, arguments) // виконуємо функцію з аргументами
      cache[key] = result
      return result
    }
  }
}
const spaceSmall = memoCalcSpace(2, 'px') // 8px
const spaceMedium = memoCalcSpace(4, 'px') // 16px
const spaceLarge = memoCalcSpace(6, 'px') // 24px
// так ми зберігаємо результати виконання функції для певного набору аргументів. І кожний раз ми не створюємо нову функцію, а використовуємо збережені результати
// --------------------------------------------------------------------------------
// Композиція функцій - це коли результат виконання однієї функції передається в якості аргумента в іншу функцію
function compose(fn1, fn2) {
  // функція яка приймає дві функції
  return function (arg) {
    // повертаємо функцію
    return fn2(fn1(arg)) // виконуємо функції відповідно до порядку
  }
}
// або такий приклад:
const getSpaceFromDesign = (componentName) => {
  switch (componentName) {
    case 'button':
      return '16px'
    case 'input':
      return '8px'
    case 'label':
      return '4px'
    default:
      return '0px'
  }
}

const calcSpace2 = (multiplier, unit) => (componentName) => {
  const spaceFromDesign = getSpaceFromDesign(componentName)
  return `${multiplier * parseInt(spaceFromDesign)}${unit}` // тут ми використовуємо результат з "на скільки множимо" * "розмір з дизайну" та "в яких одиницях"
}

const calcSpaceForButton = calcSpace2(4, 'px')('button') // 64px - 4 * 16px (розмір з дизайну)
console.log(calcSpaceForButton)
const calcSpaceForInput = calcSpace2(2, 'px')('input') // 16px - 2 * 8px (розмір з дизайну)
console.log(calcSpaceForInput)
const calcSpaceForLabel = calcSpace2(1, 'px')('label') // 4px - 1 * 4px (розмір з дизайну)
console.log(calcSpaceForLabel)
// і так далі
// або
const calcSpaceFromDesign = (componentName) => {
  const result = getSpaceFromDesign(componentName)
  return calcSpace(isMobile ? result / 2 : result, 'px')
}
console.log(calcSpaceFromDesign('button'))
// #endregion

// #region Вбудовані функції
// eval - виконує код який передається в рядку
const result = eval('2 + 2') // 4
console.log(result)

let numA = 1 + 2
eval(numA) // 3
// --------------------------------------------------------------------------------
// isFinite - перевіряє чи є число скінченним
console.log(isFinite(Infinity)) // false
console.log(isFinite(NaN)) // false
console.log(isFinite(123)) // true
console.log(isFinite(0)) // true

function calcScreenRatio(width, height) {
  return width / height
}
console.log(calcScreenRatio(1920, 1080)) // 1.7777777777777777
console.log(calcScreenRatio(1280, 0)) // Infinity

function calcScreenRatio(width, height) {
  let result = width / height
  return isFinite(result) ? result : 0
}
console.log(calcScreenRatio(1920, 1080)) // true
console.log(calcScreenRatio(1280, 0)) // false
// --------------------------------------------------------------------------------
// isNaN - перевіряє чи є число не числом
console.log(isNaN(NaN)) // true
console.log(isNaN(Infinity)) // false
console.log(isNaN(123)) // false

function calcScreenRatio(width, height) {
  let result = width / height
  if (isNaN(result)) {
    return 'Error'
  } else if (!isFinite(result)) {
    return result
  } else {
    return result
  }
}
console.log(calcScreenRatio(1920, 1080)) // 1.7777777777777777
console.log(calcScreenRatio(1280, null)) // Error
console.log(calcScreenRatio(1280, 0)) // Infinity
// --------------------------------------------------------------------------------
// parseInt - перетворює рядок в число
console.log(parseInt('123')) // 123
console.log(parseInt('123px')) // 123
console.log(parseInt('123.123')) // 123

function calcScreenRatio(width, height) {
  w = parseInt(width)
  h = parseInt(height)
  let result = w / h
  // тут ми перетворюємо результат в число, але краще щоб це було parseFloat

  if (isNaN(result)) {
    return 'Error'
  } else if (!isFinite(result)) {
    return result
  } else {
    return result
  }
}
console.log(calcScreenRatio('1920px', '1080px')) // 1.7777777777777777
// перетворення на двійкову систему числення
console.log(parseInt('11', 2)) // 3
console.log(parseInt('100', 2)) // 4
console.log(parseInt('1000', 2)) // 8
console.log(parseInt('10000', 2)) // 16 тощо
// --------------------------------------------------------------------------------
// parseFloat - перетворює рядок в число з плаваючою точкою
console.log(parseFloat('123')) // 123
console.log(parseFloat('123px')) // 123
console.log(parseFloat('123.123')) // 123.123
// у двійкову систему числення не перетворює
// --------------------------------------------------------------------------------
// URI - перетворює рядок в URI
const uri = 'https://www.google.com/search?q=javascript'
console.log(encodeURI(uri)) // https://www.google.com/search?q=javascript
console.log(encodeURIComponent(uri)) // https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Djavascript

const domain = 'it-brains.com.ua'
function redirectToPath(path) {
  path = encodeURIComponent(path)
  return `https://${domain}/${path}`
}
console.log(redirectToPath('javascript')) // https://it-brains.com.ua/javascript
// --------------------------------------------------------------------------------
// decodeURI - перетворює URI в рядок
const decodeUri = 'https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Djavascript'
console.log(decodeURI(decodeUri)) // https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Djavascript
console.log(decodeURIComponent(decodeUri)) // https://www.google.com/search?q=javascript
// --------------------------------------------------------------------------------

// #endregion

// #region Вбудовані числові функції
// Вбудований конструктор Number
const newNum = new Number(123)
console.log(newNum) // Number {123}
// в ньому є свої властивості і методи
newNum.valueOf() // 123
newNum.toString() // `123`
newNum.toFixed(2) // `123.00`
// --------------------------------------------------------------------------------
// EPSILON - властивість яка визначає точність числа
let newNum2 = 0.1
let newNum3 = 0.3
if (newNum2.EPSILON === newNum3.EPSILON) {
  ;('Numbers are equal')
} else {
  ;('Numbers are not equal')
}
console.log(newNum2 + newNum3 < Number.EPSILON) // false
console.log(newNum2 + newNum3 < Number.EPSILON.toFixed(2)) // true
// --------------------------------------------------------------------------------
// MAX_SAFE_INTEGER - властивість яка визначає максимальне безпечне число
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
// --------------------------------------------------------------------------------
// MIN_SAFE_INTEGER - властивість яка визначає мінімальне безпечне число
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991
// це все добре використовувати щоб обмежити введення користувача (наприклад)
// --------------------------------------------------------------------------------
// isSafeInteger - перевіряє чи є число безпечним і враховує MAX_SAFE_INTEGER та MIN_SAFE_INTEGER
console.log(Number.isSafeInteger(123)) // true
console.log(Number.isSafeInteger(9007199254740991)) // true
console.log(Number.isSafeInteger(9007199254740992)) // false
// --------------------------------------------------------------------------------
// toFixed - метод який визначає кількість знаків після коми
console.log((1.2345).toFixed(2)) // 1.23
console.log((1.2345).toFixed(3)) // 1.235
console.log((1.2345).toFixed(4)) // 1.2345
// --------------------------------------------------------------------------------
// MAX_VALUE - властивість яка визначає максимальне число
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
function divide(a, b) {
  if (a / b === Number.MAX_VALUE) {
    return 'Max value reached'
  } else {
    return a / b
  }
}
console.log(divide(1, 1)) // 1
console.log(divide(1, 0)) // Infinity
console.log(divide(1, 1e-323)) // Max value reached
// --------------------------------------------------------------------------------
// MIN_VALUE - властивість яка визначає мінімальне число
console.log(Number.MIN_VALUE) // 5e-324
console.log(divide(1, 1e-324)) // 0
console.log(divide(1, 1e-325)) // 1.0000000000000002e+323
// --------------------------------------------------------------------------------
// POSITIVE_INFINITY - властивість яка визначає нескінченність\
console.log(Number.POSITIVE_INFINITY) // Infinity
// --------------------------------------------------------------------------------
// NEGATIVE_INFINITY - властивість яка визначає від'ємну нескінченність
console.log(Number.NEGATIVE_INFINITY) // -Infinity
// --------------------------------------------------------------------------------
// isInteger - перевіряє чи є число цілим
console.log(Number.isInteger(123)) // true
console.log(Number.isInteger(123.123)) // false
console.log(newNum2.isInteger()) // false
console.log(newNum2.toFixed(0).isInteger()) // true
console.log(newNum.isInteger()) // true

function reviewNumber(num) {
  if (isNaN(num)) {
    return console.log('Is not a number')
  } else if (!num && num !== 0) {
    return console.log('Please enter a number')
  } else if (!Number.isInteger(num)) {
    return console.log('Please enter an integer')
  } else {
    return console.log("It's number")
  }
}
reviewNumber(123) // It's number
reviewNumber(123.123) // Please enter an integer
reviewNumber('123') // Please enter a number
reviewNumber('abc') // Is not a number
// --------------------------------------------------------------------------------
// isFinite - перевіряє чи є число скінченним
console.log(Number.isFinite(123)) // true
console.log(Number.isFinite(123.123)) // true
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isFinite(-Infinity)) // false
console.log(Number.isFinite(NaN)) // false
console.log(Number.isFinite('123')) // false
// --------------------------------------------------------------------------------
// toExponential - перетворює число в експоненціальний запис
console.log(newNum2.toExponential()) // 1e-1
console.log(newNum2.toExponential(2)) // 1.00e-1
console.log(newNum2.toExponential(3)) // 1.000e-1
// --------------------------------------------------------------------------------
// toPrecision - визначає кількість знаків числа
console.log(newNum2.toPrecision()) // 0.1
console.log(newNum2.toPrecision(1)) // 0.1
console.log(newNum2.toPrecision(2)) // 0.10
console.log(newNum2.toPrecision(3)) // 0.100
// --------------------------------------------------------------------------------
// toString - перетворює число в рядок
console.log(newNum2.toString()) // 0.1
console.log(newNum.toString()) // 1
// --------------------------------------------------------------------------------
// #endregion

// #region Вбудовані рядкові функції
// .length - властивість яка визначає довжину рядка
let str = 'Hello world '
console.log(str.length) // 11
console.log('Hello world'.length) // 11

const str2 = () => 'Hello world'
console.log(str2().length) // 11
// --------------------------------------------------------------------------------
// .fromCharCode - метод який повертає символ за його кодом
console.log(String.fromCharCode(65)) // A
console.log(String.fromCharCode(97)) // a
console.log(String.fromCharCode(65, 66, 67)) // ABC
console.log(String.fromCharCode(128514)) // 😂
// .fromCodePoint - метод який повертає символ за його кодом
console.log(String.fromCodePoint(65)) // A
console.log(String.fromCharPoint(128515)) // 😃
let capricorn = String.fromCodePoint(0x2651) // ♑
console.log(capricorn) // ♑
// .charCodeAt(index) - метод який повертає код символа за його індексом
console.log(str.charCodeAt(0)) // 72
console.log(str.charCodeAt(1)) // 101
console.log(str.charCodeAt(23251)) // NaN
// список символів = https://unicode-table.com/en/
// або https://en.wikipedia.org/wiki/List_of_Unicode_characters
// --------------------------------------------------------------------------------
// .raw - метод який повертає рядок в необробленому вигляді
console.log(String.raw`Hello\nworld`) // Hello\nworld
console.log(`Hello\nworld`) // Hello (\n = new line) world
let CV = 'C:Users\\vasia\\OneDrive\\Робочий стіл\\портфоліо 2022р.docx'
console.log(CV.raw) // C:Users\vasia\OneDrive\Робочий стіл\портфоліо 2022р.docx

// Escaping
let resultString = 'I\'m 28 years old. I like "Star Wars"'
console.log(resultString)
// --------------------------------------------------------------------------------
let firstName = 'Vasyl'
let lastName = 'Kaminskyi'
let myCityName = 'Chernivtsi'

// .concat - метод який додає рядки
console.log(firstName.concat(lastName)) // VasylKaminskyi
console.log(firstName.concat(' ', lastName)) // Vasyl Kaminskyi - додає пробіл між іменем та прізвищем
console.log(firstName.concat(' ', lastName, ' ', myCityName)) // Vasyl Kaminskyi Chernivtsi
// --------------------------------------------------------------------------------
// .includes(searchElement, fromIndex) - метод який перевіряє чи є в рядку вказаний елемент
const colors = 'red, green, blue, purple'
console.log(colors.includes('black')) // false -> black там немає; true якщо в рядку є вказане слово
console.log(colors.includes('green')) // true
console.log(colors.includes('green', 5)) // true -> починає перевірку з 5 індексу, green починається з 6 індексу
// --------------------------------------------------------------------------------
// .indexOf(searchElement, fromIndex) - метод який повертає індекс вказаного елемента
console.log(colors.indexOf('green')) // 5 -> індекс починається з 0 а green починається з 5 індексу
console.log(myCityName.indexOf('i')) // 5 -> індекс першої букви i
console.log(myCityName.indexOf('i', 3)) // 5 -> індекс першої букви i, починаючи пошук з 3 індексу
// --------------------------------------------------------------------------------
// .lastIndexOf(searchElement, fromIndex) - метод який повертає індекс вказаного елемента, починаючи з кінця
console.log(colors.lastIndexOf('e')) // 22 -> індекс останньої букви e
console.log(colors.lastIndexOf('e', 21)) // 18 -> індекс останньої букви e, починаючи з 21 індексу
// --------------------------------------------------------------------------------
// .startsWith(searchElement, length) - метод який перевіряє чи починається рядок на вказаний елемент
// .endsWith(searchElement, length) - метод який перевіряє чи закінчується рядок на вказаний елемент
console.log(colors.startsWith('red')) // true
console.log(colors.startsWith('green')) // false
console.log(colors.endsWith('purple')) // true
console.log(colors.endsWith('blue')) // false
// --------------------------------------------------------------------------------
// .at(index) - метод який повертає символ за його індексом
console.log(colors.at(0)) // r -> індекс починається з 0
console.log(lastName.at(3)) // i
// --------------------------------------------------------------------------------
// .padStart(targetLength, padString) - метод який додає в початок рядка вказану кількість символів
// .padEnd(targetLength, padString) - метод який додає в кінець рядка вказану кількість символів
console.log(colors.padStart(30, '123')) // 123123123123123123123red, green, blue, purple
console.log(colors.padEnd(30, '123')) // red, green, blue, purple123123123123123123123
console.log(firstName.padEnd(1, lastName)) // VasylKaminskyi
console.log(colors.padEnd(1, '...')) // red, green, blue, purple...
// --------------------------------------------------------------------------------
// .repeat(count) - метод який повторює рядок вказану кількість разів
console.log(colors.repeat(2)) // red, green, blue, purplered, green, blue, purple
// --------------------------------------------------------------------------------
// .slice(start, end) - метод який повертає частину рядка
console.log(colors.slice(0, 5)) // red, -> від 0 індексу до 5, не включаючи 5
console.log(myCityName.slice(-5)) // ivtsi -> -5 індекс означає, що відраховуємо з кінця рядка, тобто від останнього символу
console.log(myCityName.slice(2, -2)) // erniv -> від 2 індексу до -2 індексу
// --------------------------------------------------------------------------------
// .split(separator, limit) - метод який розбиває рядок на масив
console.log(colors.split(',')) // [ 'red', ' green', ' blue', ' purple' ]
// --------------------------------------------------------------------------------
// .substr(start, length) - метод який повертає частину рядка (substring)
console.log(colors.substr(0, 5)) // red, -> від 0 індексу до 5, не включаючи 5
console.log(firstName.substring(0, 5)) // Vasyl, від 0 індексу до 5, не включаючи 5
// --------------------------------------------------------------------------------
// .trim() - метод який видаляє пробіли з початку і кінця рядка
console.log(colors.trim()) // red, green, blue, purple
console.log(colors.trim().length) // 22
console.log(str.trim()) // Hello World
// .trimStart() - метод який видаляє пробіли з початку рядка
console.log(colors.trimStart()) // red, green, blue, purple
// .trimEnd() - метод який видаляє пробіли з кінця рядка
console.log(colors.trimEnd()) // red, green, blue, purple
// але їх там і так немає, але знати це треба))
// --------------------------------------------------------------------------------
// .toLowerCase() - метод який переводить рядок в нижній регістр
console.log(firstName.toLowerCase()) // vasyl
// --------------------------------------------------------------------------------
// .toUpperCase() - метод який переводить рядок в верхній регістр
console.log(firstName.toUpperCase()) // VASYL
// --------------------------------------------------------------------------------
// .replace(subStringOrRegexp, newSubStringOrCallback) - метод який заміняє частину рядка на інший рядок
console.log(colors.replace('red', 'yellow')) // yellow, green, blue, purple
console.log(colors.replace(/red/g, 'yellow')) // yellow, green, blue, purple
// /red/g - регулярний вираз, який замінює всі входження red на yellow
// --------------------------------------------------------------------------------
// .charAt(index) - метод який повертає символ за його індексом
console.log(colors.charAt(0)) // r
console.log(firstName.charAt(firstName.length - 1)) // отримуємо останній символ строки
// --------------------------------------------------------------------------------
// #endregion
