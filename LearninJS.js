const e = require('express')

// #region Перемінні
let num = 1 // тип перемінної який доступний тільки в межах видимості.
const NAME = `Bazzil` // тип перемінної як і let який ніколи не зміниться, тому що константа, нові значення в таку перемінну не присвоїти. Константи пишуться великими літерами.
var num1 = 2 // тип перемінної який такий же як і let, але він не обмежений зоною видимості; Такий тип перемінної зараз не використовується.
var num1 = 3 // можна переприсвоїти перемінну, але не можна декларувати дві перемінні з однаковим іменем. Тобто використовувати var не рекомендується, так як це дуже проблемно.

// АЛЕ джаваскріпт це динамічно-типізована мова, тому let може бути і string i boolean, number тощо
// також в джаваскріпт є null (нуль/0) та undefined (не об'явлено) які відрізняються один від одного

const SURNAME = `Kaminskyi`
const FULLNAME = NAME + ` ` + SURNAME // конкатинація строк
console.log(FULLNAME) // Bazzil Kaminskyi

let age1 = 20,
  age2 = 30 // можна декларувати декілька перемінних одночасно
age1 = 28 // можна змінювати перемінні
//#endregion

// #region Типи перемінних
// 1. примітивні:
//  - string
//  - number - цілі або з плавучою точкою
//  - boolean - true or false (логічний)
//  - null
//  - undefined
//  - symbol - з його допомоги створюються унікальні типи
//  - bigint - цілі числа довільної довжини
//  - NaN - не число

// 2. ссилочний тип - object - такий об'єкт містить тільки посилання на об"єкт в пам'яті. Таких об'єктів може бути багато і вони можуть вказувати на один і ту ж ділянку пам'яті. При зміні даних в такому об'єкті, вони зміняться у всіх об'єктах.

const objectA = {
  a: 1,
  b: true,
}

const objectB = objectA

objectB.a = 2

console.log(objectA)
// output: 2 => тому що ми змінили дані на які посилаються два об'єкта, тобто в обох об'єктах вже цифра 2

// також до таких перемінних можна додавати нові властивості:
objectB.с = `string`

console.log(objectA.с)
// output: bazzil => тому що все що доступно другому об'єкту доступно і першому
//#endregion

// #region Статична та динамічна типізація

// string str = `string`
// int number = 123
// number = `string` => Error присвоєння даних з одного типу в інший

let a = 1
a = `string`
a = true
a = undefined

// ще один приклад: (розкоментуй щоб побачити)
// function a() {
//   console.log(`hey there`);
// }

// a();

// a = 10;

// a(); // Error => тому що "а" це функція, а не перемінна, тому в "а" може бути присвоєна тільки функція
// тому треба користуватися константами, тому ще попереджує помилки з динамічною типізацією

// ще приклад:
// const a = () => {
//   console.log(`hey there`);
// };
// a();
// a = 10; // Error => тому що в константу не можна присвоювати інші дані
// a();
// тому даний запис функції кращий у випадку коли мова динамічна

//#endregion

// #region Оператори та послідовність рядків
// насправді це вбудована функція яка виконує певні дії (все як в С#)
// є Унарні, Бінарні... Операнди... Оператори...
// і відповідно є Постфіксний запис, Префіксний, Інфіксний

// все нагадуємо...
// 1. Арифметичні оператори:
// + - * /
// 2. Порівняння:
// == != === !== <= >=
// 3. Логічні оператори:
// !(не) &&(і) ||(або)
// 4. Присвоєння:
// =
// 5. Послідовність рядків
// \n -> Переніс на новий рядок
// \t -> Табуляція (як клавіша TAB)
// \r -> Повернення каретки
// \b -> Границі слова
// \f -> Перевід сторінки
console.log(1 > '1') // false
console.log(1 < '1') // false
console.log(1 >= '1') // true
console.log(1 <= '1') // true

console.log('string\rstring\nstring\bstring\fstring')

// == порівняння (динамічних типів даних)
// === сурове порівняння, тобто порівнюються статичні типи даних
console.log(10 == 10) // true
console.log(10 == '10') // true
console.log(10 === '10') // false, тому що number != string
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(0 == false) // true
console.log(0 === false) // false
console.log('' == false) // true
console.log('' === false) // false
console.log('' == 0) // true
console.log('' === 0) // false
console.log('' == null) // false
console.log('' === null) // false
console.log('' == undefined) // false
console.log('' === undefined) // false
console.log(0 == null) // false
console.log(0 === null) // false
console.log(0 == undefined) // false
console.log(0 === undefined) // false
console.log(undefined == undefined) // true
console.log(undefined === undefined) // true
console.log(-0 == +0) // true
console.log(-0 === +0) // true
console.log(NaN == NaN) // false
console.log(NaN === NaN) // false

// &&:
// a && b && c && d
// якщо а false -> закінчення виразу,
//        true ? -> перевіряє b,
//        false ? -> закінчення виразу,
//        true ? -> c,
//        false ? -> закінчення виразу,
//        true ? -> d
//        false ? -> закінчення виразу,
//        true ? -> закінчення виразу (його виконання)
// || працює аналогічним способом, але true і false навпаки

// Трюк з "&&" (i)
let borya = 10
borya && console.log('executed!')
// executed!
let borya2
borya2 && console.log('executed!')
// не виконалося бо "borya2" false

// оператор "..."
const button = {
  width: 200,
  text: 'Buy',
  color: 'black',
}
const redButton = {
  ...button,
  color: 'red',
} // створюємо новий об'єкт і додаємо в нього нову властивість, або переписуємо стару.

// якщо властивість "color" вже є у батьківського об'єкта, то значення в новому об'єкті буде перезаписано. Тобто було color: black, а в новому - color: red.
// це створюється за допомоги оператора "...", так як представлено вище.

console.table(redButton) // вивід в табличному вигляді
// --------------------------------------------------------------------

const buttonInfo = {
  text: 'Buy',
}
const buttonStyle = {
  color: 'yellow',
  width: 200,
  height: 300,
}
// об'єднуємо два об'єкта в один за допомоги "...":
const button2 = {
  ...buttonInfo,
  ...buttonStyle,
  // так розподіляється порядок зображення властивостей, що перше - ті властивості і будуть першими
}
console.table(button2)

// все так як при мутації об'єктів, але ми беремо окремі властивості і додаємо нові або змінюємо старі
// #endregion

// #region Логічні оператори
// Це оператори які дозволяють комбінувати оператори порівняння або обирати потрібне значення зі списку
const userRole = 1
const adminRole = 2
const productPrice = 100
const defaultName = null

const user = userRole
const userBalance = 1000

// const isAdmin = user === adminRole
// const canBuy = userBalance >= productPrice

// const result1 = isAdmin === true
// const result2 = canBuy === true

// const isResultTrue = result1 === result2
// це все дуже довго...

// || - оператор "або" => "перше позитивне значення"
const isResultTrue = user === adminRole || userBalance >= productPrice
const authorName = user || defaultName || 'Author'

// && - оператор "і" => "перше негативне значення"
const isUser = user === adminRole && userBalance >= productPrice

// ?? - оператор "перше наявне значення" або "значення за замовчуванням"
const userName = user ?? defaultName ?? 'Author'
const authorName2 = (user === adminRole && 'Admin') || 'Author'

// ! - оператор "не" => "змінює значення на протилежне"
const isNotAdmin = !(user === adminRole)
const authorName3 = !(user === adminRole && 'Admin') || user
console.log(authorName, 'authorName')

// !! - оператор "перетворення в булевий тип" або "протилежний тип"
const isUser2 = !!user // тобто інший юзер це "юзер" - true

// Логічні операції присвоєння
// ||= - оператор "присвоєння за замовчуванням"
let productTitle = 'Headphones'
productTitle ||= 'Product' // якщо productTitle не існує, то він створиться і присвоїться значення "Product"
productTitle = productTitle || 'Product' // те саме, що і вище
// &&= - оператор "присвоєння за замовчуванням"
productTitle = 'Product'
productTitle &&= 'Headphones' // якщо productTitle існує, то він перезапише значення на "Headphones"
// ??= - оператор "присвоєння за замовчуванням"
productTitle = null
productTitle ??= 'Headphones' // якщо productTitle не існує, то він створиться і присвоїться значення "Headphones"
// детальніше в logicOperators.js
// #endregion

// #region Побітові оператори
// Загалом існує 7 побітових операторів
// & - оператор "і"
let bit1 = 4 // в бітах це 0100
let bit2 = 5 // в бітах це 0101
// ці перемінні також можна записати і в бітах, наприклад: let bit1 = 0b0100, а let bit2 = 0b0101

let bit3 = bit1 & bit2 // 0100 & 0101 = 0100 = 4
// порівнює в бітах оба значення і перевіряє чи є в обох чисел 1, навіть якщо є, то він записує 0, тому що 0 пріоритетніше в даному випадку

// | - оператор "або"
bit3 = bit1 | bit2 // 0100 | 0101 = 0101 = 5
// перевіряє чи є в обох чисел 1, якщо є, то він записує 1, якщо немає, то 0

// ^ - оператор "виключаюче або"
bit3 = bit1 ^ bit2 // 0100 ^ 0101 = 0001 = 1
// перевіряє біти в числах, якщо вони однакові то записує 0, якщо різні, то 1

// ~ - оператор "не"
bit3 = ~bit1 // ~0100 = 1011 = -5
// переводить число на протилежне, тобто 0 на 1, а 1 на 0, але також він переводить число в додатковий код, тобто 5 в -5

// << - оператор "зсув вліво"
bit3 = bit1 << 1 // 0100 << 1 = 1000 = 8
// зсуває біти вліво на 1, тобто 0100 стає 1000

// >> - оператор "зсув вправо"
bit3 = bit1 >> 1 // 0100 >> 1 = 0010 = 2
// зсуває біти вправо на 1, тобто 0100 стає 0010

// >>> - оператор "зсув вправо з заповненням нулями"
bit3 = bit1 >>> 1 // 0100 >>> 1 = 0010 = 2
// зсуває біти вправо на 1, тобто 0100 стає 0010, але при цьому заповнює вільні біти нулями

// також існує побітове присвоєння
// &= - оператор "і"
bit3 &= bit1 // 0100 &= 0101 = 0100 = 4
// порівнює їх та одразу присвоює результат в залежності від оператора (в даному випадку "і")

// |= - оператор "або"
bit3 |= bit1 // 0100 |= 0101 = 0101 = 5
// порівнює їх та одразу присвоює результат в залежності від оператора (в даному випадку "або")

// ^= - оператор "виключаюче або"
bit3 ^= bit1 // 0100 ^= 0101 = 0001 = 1
// порівнює їх та одразу присвоює результат в залежності від оператора (в даному випадку "виключаюче або")

// <<= - оператор "зсув вліво"
bit3 <<= 1 // 0100 <<= 1 = 1000 = 8
// порівнює їх та одразу присвоює результат в залежності від оператора (в даному випадку "зсув вліво")

// >>= - оператор "зсув вправо"
bit3 >>= 1 // 0100 >>= 1 = 0010 = 2
// порівнює їх та одразу присвоює результат в залежності від оператора (в даному випадку "зсув вправо")

// >>>= - оператор "зсув вправо з заповненням нулями"
bit3 >>>= 1 // 0100 >>>= 1 = 0010 = 2
// порівнює їх та одразу присвоює результат в залежності від оператора (в даному випадку "зсув вправо з заповненням нулями")

// true false також можна записувати в бітах
// true = 1
// false = 0
// і це також можна присвоїти в змінну використовуючи біти
// Наприклад так:
let canWrite = true // 1
let canRead = false // 0
let canExecute = true // 1

// і таким чином можна давати, наприклад, права користувачам
// 1 1 1 - може все
// 1 1 0 - може писати і читати
// 1 0 1 - може писати і виконувати
// 1 0 0 - може лише писати
// 0 1 1 - може читати і виконувати
// 0 1 0 - може лише читати
// 0 0 1 - може лише виконувати
// 0 0 0 - не може нічого
let userRights = 0b111 // може все, де 7 в десятковій системі буде означати, що можна все
userRights = 0b110 // може писати і читати, де 6 в десятковій системі буде означати, що можна писати і читати
userRights = 0b101 // може писати і виконувати, де 5 в десятковій системі буде означати, що можна писати і виконувати і т.д.

// #endregion

// #region Умовні оператори
// if else - якщо, інакше, також можна писати і без else, просто if
// if (умова) { КОД } else { КОД }
let age3 = 18
if (age3 >= 18) {
  console.log(`Ви повнолітній`)
} else {
  console.log(`Ви не повнолітній`)
}

// if else if - якщо, інакше якщо
// if (умова) { КОД } else if (умова) { КОД } else { КОД }
let weather = `rain`
if (weather === `rain`) {
  console.log(`Погана погода`)
} else if (weather === `sun`) {
  console.log(`Гарна погода`)
} else {
  console.log(`Невідома погода`)
}

// switch case - перевіряється вираз, якщо він співпадає з одним з виразів case, то виконується код, який вказаний після нього
// switch (вираз) { case вираз: КОД break; case вираз: КОД break; default: КОД break; }
let light = `green`
switch (light) {
  case `green`:
    console.log(`Йди`)
    break // break - виходить з switch при виконанні умови
  case `yellow`:
    console.log(`Почекай`)
    break
  case `red`:
    console.log(`Стій`)
  default: // default - виконується якщо не виконується жодна умова
    console.log(`Роби що хочеш`)
    break
}

// #endregion

// #region Скорочення в JavaScript
// 1
// if else - можна скоротити до тернарного оператора (тернарний оператор - це оператор, який має три операнда) (умова ? вираз1 : вираз2)
age = 20
age >= 18 ? console.log(`Ви повнолітній`) : console.log(`Ви не повнолітній`)

// ===========================================================================
// 2
let variable
let variable2

if (variable !== null && variable !== undefined && variable !== ``) {
  variable2 = variable
} else {
  variable2 = `default`
}
// можна скоротити до
variable2 = variable || `default`
// ===========================================================================
// 3
let x
let y
let z = 30
// можна скоротити до
let a3,
  b3,
  c3 = 30
// ===========================================================================
// 4
let isSame = true
if (isSame === true) {
  console.log(`Істина`)
}
// можна скоротити до
if (isSame) {
  console.log(`Істина`)
}
// або якщо це false
if (!isSame) {
  console.log(`Не істина`)
}
// ===========================================================================
// 5
let names = [`Vlad`, `Ivan`, `Petro`]
for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}
// можна скоротити до
for (let name of names) {
  console.log(name)
}
// якщо треба індекс, то
for (let index in names) {
  console.log(index)
}
// або якщо треба індекс і елемент масиву
names.forEach((element, index, array) => {
  console.log(`names ${index}: ${element} of ${array}`)
})

// ===========================================================================
// 6
let port
if (process.env.PORT) {
  port = process.env.PORT
} else {
  port = 3000
}
// можна скоротити до
port = process.env.PORT || 3000
// ===========================================================================
// 7
for (let i = 0; i < 10000; i++) {
  console.log(i)
}
// можна скоротити до
for (let i = 0; i < 1e4; i++) {
  // 1e4 - 1 * 10^4
  console.log(i)
}
// ===========================================================================
// 8
a = 1
b = 2
const myObjNew = {
  a: a,
  b: b,
}
// можна скоротити до
const myObjNew2 = { a, b }
// ===========================================================================
// 9
setTimeout(function () {
  console.log(`Done after 2 sec`)
}, 2000)
// можна скоротити до
setTimeout(() => console.log(`Done after 2 sec`), 2000)
// ===========================================================================
// 10
function rgb(r, g, b) {
  if (r === undefined) {
    r = 0
  }
  if (g === undefined) {
    g = 0
  }
  if (b === undefined) {
    b = 0
  }
  return `rgb(${r}, ${g}, ${b})`
}
// можна скоротити до
const rgb2 = (r = 0, g = 0, b = 0) => `rgb(${r}, ${g}, ${b})`
// ===========================================================================
// 11
function createUrl(base, domain) {
  return `https://${base}.${domain}`
}
// можна скоротити до
const createUrl2 = (base, domain) => `https://${base}.${domain}`
// ===========================================================================
// 12
// const alert = window.alert
// const confirm = window.confirm
// const prompt = window.prompt
// можна скоротити до
const { alert, confirm, prompt } = window
// ===========================================================================
// 13
const arr = [1, 2, 3]
const arr2 = [4, 5, 6]
// можна скоротити до
const resultArr = arr.concat(arr2)
// або використовуючи спред оператор
const resultArr2 = [...arr, ...arr2]
// ===========================================================================
// 14
console.log(Math.floor(9.7) === 9)
// можна скоротити до
console.log(~~9.7 === 9)
// ===========================================================================
// 15
console.log(Math.pow(2, 3))
// можна скоротити до
console.log(2 ** 3)
// ===========================================================================
// 16
const int = parseInt(`42`)
const float = parseFloat(`42.42`)
// можна скоротити до
const int2 = +`42`
const float2 = +`42.42`
// ===========================================================================
// 17
if (arr.indexOf(2) !== -1) {
}
// можна скоротити до
if (~arr.indexOf(2)) {
}
// або
if (arr.includes(2)) {
}
// ===========================================================================
// 18
const car = {
  model: `Ford`,
  year: 2019,
  color: `red`,
}
// можна скоротити до
console.log(object.entries(car)) // [ [`model`, `Ford`], [`year`, 2019], [`color`, `red`] ]
console.log(object.keys(car)) // [`model`, `year`, `color`]
console.log(object.values(car)) // [`Ford`, 2019, `red`]
// ===========================================================================
// #endregion

// #region Умовні інструкції
// if , if else , switch , тернарний оператор.. ну все як в C#))
let val = 10
if (val > 5) {
  val += 10
}
// в дужках перевіряється умова, якщо там true => виконується дія в блоці
console.log(val) // 20

const newPerson = {
  age: 20,
}
if (!newPerson.name) {
  // !undefined === true => true !!!!
  console.log('name is undefined')
}
// якщо в newPerson властивість name !undefined, буде виконана дія в блоці коду (не пуста строка)
// тобто перевіряється на true, якщо так то виконується блок кода

if (val < 5) {
  val += 10 // цей блок кода якщо true
} else {
  val -= 10 // цей блок кода якщо false
}
console.log(val) // 0

if (val < 5) {
  val += 10 // 1 варіант якщо в умові true
} else if (val > 5) {
  val -= 10 // 2 варіант якщо 1 варіант був false ; else if може бути безліч
} else {
  val = 15 // 3 варіант при false в попередніх варіантах
}
console.log(val) // 0

const newPerson1 = {
  age: 25,
}
const { age } = newPerson1
if (age >= 18) {
  console.log('Is Adult')
} else if (age >= 12 && age < 18) {
  console.log('Is Teenager')
} else {
  console.log('Is Child')
}
// АЛЕ це не дуже читабельно, краще щоб було 3 if:
if (age >= 18) {
  console.log('is adult')
}
if (age >= 12 && age < 18) {
  console.log('is teenager')
}
if (age < 12) {
  console.log('is child')
}
// ніби зручніше читати?)

// Використання IF у функціях
const sumPositiveNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'One of the arguments is not a number'
  }
  if (a <= 0 || b <= 0) {
    return 'Number are not positive'
  }
  return a + b
}

// Switch:
const month = 2
switch (
  month // значення перемінної порівнюється із..
) {
  case 1: // .. тим значенням що тут, і в залежності від значення буде такий то кейс
    console.log('January')
    break
  case 2:
    console.log('February')
    break
  case 12:
    console.log('December')
    break
  default:
    console.log('This is not a winter month')
}

// Тернарний оператор
// Конструкція тернарного оператора це вираз, а вираз завжди повертає значення
// Example #1
let value = 11
value ? console.log('True value') : console.log('False value') // output: True value

// Example #2
const value1 = 11
const value2 = 22
value1 && value2 ? console.log(value1, value2) : console.log() // output: value1, value2 (11, 22)

// Example #3
let value3 = 12
console.log(value3 >= 0 ? value3 : -value3) // output: 12

value = -5
result = value >= 0 ? value : -value
console.log(result) // output: 5

// #endregion

// #region Цикли
// Типи циклів:
// - for
// - for ... in ...
// - while
// - do ... while
// - for ... of ...

// #region FOR:
// for (початкова інструкція; умова; ітераційна дія) { блок коду який виконується на кожній ітерації }
for (let i = 0; i < 5; i++) {
  console.log(i)
} // з кожною ітерацією число буде збільшуватися на 1; output = 0 1 2 3 4

// Example with array
myArray = ['first', 'second', 'third']
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
} // output = 'first' => 'second' => 'third'
// Але так перебирати масив не дуже зручно, не дуже читабельно і можна сильно заплутатися і наробити помилок

// Краще використовувати FOREACH (ТАК рекомендується робити!)
myArray = ['one', 'two', 'three']
myArray.forEach((element, index) => {
  console.log(element, index)
})
// output = one 0, two 1, three 2
// #endregion

// #region WHILE
// виконує блок кода поки умова правдива
// while (умова) { блок кода }
value = 0
while (value < 5) {
  console.log(value)
  value++
} // output = 0 1 2 3 4
// #endregion

// #region DO WHILE
// цикл виконується один раз, а потім перевіряє умову. Цикл виконується поки умова правдива, якщо не правдива, виконається хоч один раз
// do { блок кода } while (умова)
value = 0
do {
  console.log(value)
  value++
} while (value < 5) // output = 0 1 2 3 4

value = 10
do {
  console.log(value)
  value++
} while (value < 5) // output = 10
// Такий цикл добре використовувати коли треба виконати блок кода хоча б раз
// #endregion

// #region FOR IN
/* 
Перебираємо всі властивості об'єкта:
for (key in Object) {
  // Дія з кожною властивістю об'єкт
  // Значення властивості - Object[key] 
} 
*/
const myObj = {
  x: 10,
  y: true,
  z: 'abc',
}
for (const key in myObj) {
  console.log(key, myObj[key])
} // output: x 10 y true z abc => ключ - значення властивості

Object.keys(myObj).forEach((key) => {
  console.log(key, myObj[key])
}) // output: x 10 y true z abc => тобто те саме, але подається як масив з іменами властивостей

Object.values(myObj).forEach((value) => {
  console.log(value)
}) // output: 10 true abc => просто виведення значення властивостей

myArray = [true, 10, 'abc', null]
for (const key in myArray) {
  // key - нова перемінна яка приймає індекс масиву
  console.log(myArray[key])
} // output: true 10 abc null => АЛЕ так не рекомендується, тому що масив має свої методи
// #endregion

// #region FOR OF
/* 
for (Element of Iterable) {
  // Дія з певний елементом
}
*/
const myString = 'Hey'

for (const letter of myString) {
  console.log(letter)
} // output: H e y

for (const element of myArray) {
  console.log(element)
} // output: true 10 abc null => АЛЕ використання forEach для масиву пріоритетний

// FOR OF не для об'єктів! тому що це не ітеративний елемент в JS
// #endregion
// =====================================================================================
const PRODUCT_AMOUNT = 6
const DISCOUNT_ADDITIONAL = 2
let discountAmount = 1
let productCount = 0

// while (
//   productCount <= PRODUCT_AMOUNT &&
//   DISCOUNT_ADDITIONAL <= 10 &&
//   discountAmount <= 10
// ) {
//   productCount++
//   if (productCount === 0) {
//     console.log(`Виберіть товари`)
//     break
//   }
//   if (productCount <= 3) {
//     console.log(`У вас немає знижки`)
//   }
//   if (productCount > 3 && productCount <= 5) {
//     discountAmount += 2
//     console.log(`Ваша знижка: ${discountAmount}%`)
//   }
//   if (productCount > 5 && productCount <= 8) {
//     discountAmount += 2.5
//     console.log(`Ваша знижка: ${discountAmount}%`)
//   }
//   if (productCount > 8) {
//     discountAmount += 3
//     console.log(`Ваша знижка: ${discountAmount}%`)
//   }

//   if (DISCOUNT_ADDITIONAL === 0) {
//     discountAmount += DISCOUNT_ADDITIONAL
//   }
// }
// =====================================================================================
do {
  if (productCount === 0) {
    console.log(`Виберіть товари`)
  }
  productCount++
  if (productCount < 3) {
    console.log(`У вас немає знижки`)
  }
  if (productCount > 3 && productCount <= 5) {
    discountAmount += 2
    console.log(`Ваша знижка: ${discountAmount}%`)
  }
  if (productCount > 5 && productCount <= 8) {
    discountAmount += 2.5
    console.log(`Ваша знижка: ${discountAmount}%`)
  }
  if (productCount > 8) {
    discountAmount += 3
    console.log(`Ваша знижка: ${discountAmount}%`)
  }
} while (
  productCount <= PRODUCT_AMOUNT &&
  DISCOUNT_ADDITIONAL <= 10 &&
  discountAmount <= 10
)
// =====================================================================================
let start = 0
let goal = 100
let step = 0
let set = 8
let rest = 10

do {
  if (step === 0) {
    console.log('Початок тренування')
  }
  start++
  step++
  if (step % set === 0) {
    console.log(`Ви виконали ${step / set} підходів`)
  }
  if (step % rest === 0) {
    console.log(`Відпочинок`)
    continue
  }
  if (start === goal / 2) {
    console.log(`Половина тренування пройдена`)
  }

  if (step === goal || start === goal) {
    console.log(`Тренування закінчено`)
    break
  }
} while (start <= goal)
// =====================================================================================
age = 25
let hasExp = true
let hasEdu = false
let JS = true
let HTML = true

form: {
  if (age >= 18) {
    if (hasExp) {
      if (hasEdu || (JS && HTML)) {
        console.log('Ви прийняті на роботу')
        break form
      } else {
        console.log('Ви не маєте освіти')
        break form
      }
    }
    if (!hasExp) {
      console.log('Ви не маєте досвіду')
      break form
    }
  }
  if (age < 18) {
    console.log('Ви не можете працювати')
    break form
  }
}

table: for (let i = 1; i < 10; i++) {
  console.log(`Число ${i} ======================`)
  for (let j = 1; j < 10; j++) {
    res = i * j
    console.log(`${i} * ${j} = ${res}`)
  }
  if (i === 9) {
    console.log('Таблиця множення закінчена')
    break table
  }
}
// #endregion

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
// --------------------------------------------------------------------------------\
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
const sum = (num1, num2) => {
  const result = num1 + num2
  return result
}
console.log(sum(10, 10)) // 20
// --------------------------------------------------------------------------------
// стрілочна функція без фігурних дужок
const sum = (num1, num2) => num1 + num2
console.log(sum(10, 10)) // 20
// --------------------------------------------------------------------------------
// каррірована функція (функція яка повертає функцію)
const sum = (num1) => (num2) => num1 + num2
console.log(sum(10)(10)) // 20
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

const calcSpace = (multiplier, unit) => (componentName) => {
  const spaceFromDesign = getSpaceFromDesign(componentName)
  return `${multiplier * parseInt(spaceFromDesign)}${unit}` // тут ми використовуємо результат з "на скільки множимо" * "розмір з дизайну" та "в яких одиницях"
}

const calcSpaceForButton = calcSpace(4, 'px')('button') // 64px - 4 * 16px (розмір з дизайну)
console.log(calcSpaceForButton)
const calcSpaceForInput = calcSpace(2, 'px')('input') // 16px - 2 * 8px (розмір з дизайну)
console.log(calcSpaceForInput)
const calcSpaceForLabel = calcSpace(1, 'px')('label') // 4px - 1 * 4px (розмір з дизайну)
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

// #region Об'єкти
// всі сутності в джаваскріпт це об'єкти
const myCity = {
  // - об'єкт
  city: `Chernivtsi`, // - властивості об'єкт, їх порядок немає значення
  popular: true,
  country: `Ukraine`,
}

console.log(myCity) // {city: `Chernivtsi`, popular: true, country: `Ukraine`}
// точковий запис:
console.log(myCity.city) // `Chernivtsi`
// тощо

// зміна властивостей використовуючи точковий запис:
myCity.city = `New York`
console.log(myCity.city) // `New York`

delete myCity.city // видалення властивості
myCity.city = 'New York' // додавання нової властивості
delete myCity.city

// запис властивості "в лапках":
myCity[`cityName`] = 'New York'
// так робиться якщо десь вже є перемінна з таким іменем (`cityName`)

// або
const cityPropertyName = 'city'
myCity[cityPropertyName] = 'New York'
console.log(myCity.city) // "New York"
// тобто ми спочатку створили перемінну, а потім через назву перемінної дали ім'я властивості в об'єкт тим чим присвоєно в ту перемінну ("city")

delete myCity.cityName
delete myCity.country
delete myCity.city

// вкладені об'єкт + використання перемінної як властивості об'єкта:
const city = 'New York'
const population = 100000
const myNewCity = {
  city: city, // тут можна скоротити прибравши city після двокрапок
  population,
  info: {
    // вкладений об'єкт
    isPopular: true,
    country: 'USA',
  },
}
// причому властивості які використовують перемінні, як правило, пишуться на початку в об'єкті
myNewCity.population = 20000
console.log(myNewCity.population) // 20000
// такі перемінні (const) через об'єкт можна змінювати

console.log(myNewCity.info.country) // "USA"

// як видаляти:
delete myNewCity.info.country
// як додавати:
const countryPropertyName = 'country'
myNewCity.info[countryPropertyName] = 'USA'

// #endregion

// #region Глобальні об'єкт

// window; // глобальний об'єкт в браузері
// global // глобальний об'єкт в Node.js

globalThis // уніфікований глобальний об'єкт

// console це об'єкт глобальних об'єкті
globalThis.console.log('hello world')
console.log('hello world')

// #endregion

// #region Методи
// це об'єкт в об'єкті який приставляє собою функцію
const myNewCity2 = {
  city: 'New York',
  CityGreeting() {
    console.log('Hello!')
  },
}

myNewCity2.CityGreeting() // 'Hello!'

// методи vs властивості:
myNewCity2.city // властивість
myNewCity2.CityGreeting() // метод
// #endregion

// #region JSON (JavaScript Object Notation)
// це для обміну між сервером та сайтом у вигляді строки
// JSON:
// {
//   "name": "bazzil",
//   "id": 1,
//   "status": {
//     "complete": true
//   }
// }

// конвертація в JSON та навпаки:
const myNewCity2Stringified = JSON.stringify(myNewCity2) // конвертація javascript в JSON і присвоєння результату в перемінну
JSON.parse(myNewCity2Stringified) // конвертація JSON в javascript тої перемінної що зберегли

// #endregion

// #region Мутації в JavaScript
const b = 10
let c = b // копіювання значення з однієї перемінної в іншу (copy by value)
c = 30

console.log(b) // 10
console.log(c) // 30
// ----------------------------------------------------------------
// А що якщо ми скопіюємо об'єкт? (ссилочний тип)
const person = {
  name: 'John',
  age: 34,
}

const person2 = person // копіювання посилання (copy by reference)

person2.age = 22
person2.isAdult = true

console.log(person.age) // 22
console.log(person.isAdult) // true
// тобто відбувається мутація одного об'єкта в інший
// ----------------------------------------------------------------
// як позбутися мутації?
// Варіант №1:
const person3 = Object.assign({}, person) // створення нового об'єкта

person3.age = 26

console.log(person2.age) // 22
console.log(person3.age) // 26
// Але такий варіант не підходить якщо в об'єкт є вкладений об'єкт

// Варіант №2:
const person4 = { ...person } // ... - це оператор розділення (spread), тобто відбувається розділення властивостей які потім збираються в новому об'єкті
person4.name = 'Alice'

console.log(person.name) // 'John'
console.log(person4.name) // 'Alice'
// Але і в такому об'єкті зберігаються ті ж вкладені об'єкти

// Варіант №3:
const person5 = JSON.parse(JSON.stringify(person)) // тобто конвертуємо person в JSON, а потім той JSON назад в новий об"єкт person5

person5.name = 'Bob'

console.log(person.name) // 'John'
console.log(person5.name) // 'Bob'
// І такий варіант кращий якщо є вкладені об'єкти
// #endregion

// #region Колбек функції
function anotherFunction() {
  // something - просто об'явили функцію
}
function fnWithCallback(callbackFunction) {
  callbackFunction // callback function - викликаємо функцію в функції
}
fnWithCallback(anotherFunction) // викликаємо функцію і в якості параметра передаємо їй іншу функцію і без виклику цієї функції перша функція не викличеться, бо вона викликається тільки всередині іншої функції

// Приклад:
function printMyName() {
  console.log('Vasyl')
}
console.log('Start') // такий собі старт щоб розуміти що далі відбудеться
setTimeout(printMyName, 2000) // наша функція викличеться через 2 секунди після попередньої
// даний виклик був callback function

// Основні моменти, правила в роботі з функціями:
// 1. Називати функції виходячи з того, що ця функція буде робити
// 2. Одна функція робить одну дію, одну задачу
// 3. Не рекомендується змінювати зовнішні, відносно функції, перемінні

// #endregion

// #region Math object
let resultMath
resultMath = Math.min(2, 6, 10, 1000) // 2
resultMath = Math.PI // 3.14...
resultMath = Math.random() // random number with point between 0 and 1
resultMath = Math.round(3.5) // 4; 3.3 -> 3
resultMath = Math.floor(Math.random() * 100) + 1 // random number without point between 0 and 100
resultMath = Math.ceil(3.3) // 4;
resultMath = Math.floor(3.7) // 3;
resultMath = Math.sqrt(9) // 3
resultMath = Math.abs(-7) // 7
resultMath = Math.pow(2, 3) // (2*2*2) -> 8
resultMath = Math.max(2, 5, 1, 200) // 200
resultMath = Math.random() * 100 // random number with point between 0 and 100
// #endregion

// #region Маніпуляції зі строками
console.log('hello ' + 'world!')
// hello world!
const hello = 'Hello'
const world = 'World!'
let greeting = hello + ' ' + world
// Hello World!

// Але якщо такий строк багато це все може бути складно писати, тому використовується...
// template string literal (шаблонні строки):
greeting = `${hello} ${world}`
// Hello World!
// Але такий запис простіший, тут навіть не потрібно щоб перемінна була строкою

let firstName = 'Vasyl'
let lastName = 'Kaminskyi'
let myCityName = 'Chernivtsi'

greeting = `Hello, my name is ${firstName}. i'm living in ${myCityName}.`
console.log(greeting)

let resultString
// Escaping
resultString = 'I\'m 28 years old. I like "Star Wars"'
console.log(resultString)

// Properties and methods
console.log('Hello!'.length) // 6
console.log(firstName.concat(lastName)) // VasylKaminskyi
console.log(firstName.concat(' ', lastName)) // Vasyl Kaminskyi !!!
console.log(firstName.toUpperCase()) // VASYL
console.log(firstName.toLowerCase()) // vasyl
console.log(firstName[0]) // V; [1] -> a
console.log(firstName.indexOf('V')) // 0
console.log(firstName.indexOf('a')) // 1
console.log(firstName.lastIndexOf('s')) // 2, видається останній індекс вказаної букви, тобто вибереться остання буква s і виводиться її індекс; якщо символу немає, то індекс буде -1
console.log(firstName.charAt(1)) // 'a'
console.log(firstName.charAt(firstName.length - 1)) // отримуємо останній символ строки
console.log(greeting.substring(0, 5)) // Hello , але треба знати що ми витягуємо)). Тут ми знаємо фразу і ми витягнули вказане слово
console.log(greeting.slice(0, 5)) // Hello -> це вивід символів з 0 по 5
console.log(greeting.slice(-5)) // vtsi. тобто останні 5 символів, які є по суті в const myCityName = 'Chernivtsi';
console.log(greeting.split(' ')) // розбиваємо строку, по суті, на масив який розділений вказаним символом
const colors = 'red, green, blue, purple'
console.log(colors.split(',')) // [ 'red', ' green', ' blue', ' purple' ]
console.log(colors.replace('red', 'yellow')) // заміняє одне вказане слово на інше
console.log(colors.includes('black')) // false -> black там немає; true якщо в рядку є вказане слово

console.log(resultString)
// #endregion

// #region Функціональні вирази
// оголошена функція проти функціонального виразу (анонімного)
// оголошена функція:
function myFunction(a, b) {
  let res
  a += 1
  res = a + b
  return res
}
// функціональний вираз:
// function (a, b) {
//   let res
//   a += 1
//   res = a + b
//   return res
// };
// функціональний вираз добре передавати як колбек функцію
const myFunction = function (a, b) {
  let res
  a += 1
  res = a + b
  return res
}
myFunction(5, 3) // 9
// присвоєння перемінній функціонального виразу, тобто даємо їй ім'я
setTimeout(function () {
  console.log(`Відкладене повідомлення`)
}, 1000)
// `Відкладене повідомлення` буде виведено в консоль через 1000мс(1 сек), в такому випадку функції не потрібне ім'я
// #endregion

// #region Стрілочна функція
;(a, b) => {
  let c
  a = a + 1
  c = a + b
  return c
}
// це аналог функціонального виразу, тільки без слова `function`
const myFunction = (a, b) => {
  let c
  a = a + 1
  c = a + b
  return c
}
myFunction(5, 3) // 9
// присвоюємо стрілочну функцію перемінній і таким чином даємо їй ім'я. Це робиться для того щоб не було можливості змінити дані в такій функції, через те що присвоєно в const перемінну. Використовуючи звичайну функцію з'являється можливість змінювати таку функцію
setTimeout(() => {
  console.log(`Відкладене повідомлення`)
}, 1000)
// знову ж таки колбек функція використовуючи стрілочну функцію

// скорочення стрілочних функцій:
;(a) => {
  console.log(`hello world`)
}
// так можна писати коли у функції тільки один параметр, але все одно радять писати в дужках, тому що це робить таку функцію більш читабельною
;(a, b) => a + b // дуже схоже на лямбда вираз в C#, ні?))
// в такому випадку функція неявно повертає результат дії
// #endregion

// #region Значення функцій по-замовчуванням (по default)
function multByFactor(value, factor = 2) {
  return value * factor // default factor value is 2
}
multByFactor(5) // 10
multByFactor(10, 3) // 30

// прості приклади:
// 1. стрілочна функція
let multByFactor2 = (value, factor = 2) => value * factor
console.log(multByFactor2(2, 5))

// 2. функціональний вираз
multByFactor2 = function (value, factor = 1) {
  return (result = value * factor)
}
console.log(multByFactor2(3, 3))
// ------------------------------------------------------------------
// ще один приклад параметрів по-замовчуванням:
const newPost = (post, addedAt = Date()) => ({
  // Date() викликаємо поточну дату
  ...post,
  addedAt, // дата виклику функції (яка буде на момент виклику і вона виставлена по-замовчуванням)
})

// чому {()} ? Задача була виставлена повернути новий об'єкт newPost і додати в нього нову властивість addedAt, використовуючи в параметрах старий об'єкт post. Тобто додали нову дефолтну властивість в об'єкт який ми не хочемо мутувати, а це означає, що ми створили новий об'єкт. (так зрозуміло??))). Тут відбулося неявне повернення об'єкта з функції.

/* 
новий_об'єкт (старий_об'єкт, нова_властивість = дефолтне_значення) => ({
  ..старий_об'єкт, 
  нова_властивість, <== тут або дефолтне значення, або задаємо самі 
}) 
*/

const firstPost = {
  id: 1,
  author: `Vasyl`,
}
const secondPost = {
  ...firstPost,
  id: 2,
  author: `Bazzil`,
}
newPost(firstPost) // тут відбувається присвоєння нового значення в addedAt тому що Date() не постійна (дата міняється)). + тут відбувається скорочений варіант створення властивостей об'єкта. Тобто в дужках (post, addedAt = Date()) addedAt як дефолтне значення, а вже в ({ addedAt }) як властивість об'єкта і відбувається ніби як перенос імені та власне значення з дефолтного у властивість. Створюючи новий об'єкт ми отримуємо можливість його зберігати в БД із тією датою коли він був створений.

console.table(newPost(firstPost))

// явне повернення об'єкта:
const newPost2 = (post, addedAt = Date()) =>
  Object.assign({}, post, { addedAt }) // явно об'являємо створення нового об'єкта
// ({} - новий об'єкт, post - старий об`єкт, {addedAt} - нова властивість нового об'єкта)
// {addedAt} - тут може задаватися нове дефолтне значення
setTimeout(() => {
  console.table(newPost2(secondPost))
}, 2000)

// #endregion

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

// #region Інструкції
// Загалом є:
// 1. Вираз (який завжди повертає значення, він же функціональний вираз)
// 2. Інструкція (let a = 1 => тобто щось куди присвоюється, або виконує певну дію)
// 3. Вираз-інструкція (вираз який може бути інструкцією / Expression statement)
// Інструкція-вираз (ІНСТРУКЦІЯ НЕ МОЖЕ СТАТИ ВИРАЗОМ!!!!)

// Приклади інструкції:
let a1 // інструкція, що ми створили перемінну і присвоїли їй значення - undefined
// Кожну інструкція треба завершувати ";" і розділяти їх пустими строками
const a2 = 5 // наступна інструкція

if (a > b) {
  console.log('a is bigger than b')
}
// це все також інструкція - виконується дія, що якщо а більше б => виведеться повідомлення про це

for (let i = 0; i < a2; i++) {
  console.log(i)
}
// цикл (при них пізніше) також виконує дію (стартове значення; умова якої потрібно досягти; дія яка виконується)
// інструкції що закінчуються } не потребують ";"
// АЛЕ в JS ";" можна опускати

// Приклад Вираз-інструкції:
;('abc') // це вираз але ми конвертували її за допомоги ";" в інструкцію
// але така інструкція не має значення, так як ми нікуди її не присвоїли

a = a + 3 // знову вираз-інструкція - дія яка повертає значення

c = a + b // те саме, але треба помітити, що ці перемінні не були об'явлені, розуміючи що це було зроблено раніше

d = 'Good ' + 'Evening' // об'єднуємо дві строки в одну і присвоюємо в перемінну
// "Good " + "Evening" - це як інструкція
//  d = ...щось - це вираз
// разом вираз-інструкція за допомоги ";"

myFunction(c, d) // це також вираз-інструкція

console.log('Hey!') // це також вираз-інструкція

// АЛЕ в JS ";" можна опускати...
// то як відрізнити вираз від інструкції?
// 1. інструкція пишеться з нового рядка (!)
// 2. вирази можуть бути використані як аргументи у викликах функцій, інструкції так не можуть

// Приклад:
function myFn2(a) {
  console.log(a)
}

const b1 = true
let c1 = 10

myFn2(2 + 3) // => 5 ; в якості аргумента вираз ; у функції параметру "а" буде передано результат дії, що тут записаний, тобто "а" буде = 5
myFn2(b1) // => true ; значення із "б" передаємо у функцію в "а" яка вже буде = true
myFn2((c1 = c1 + 1)) // => 11 ; тут так само ; даний приклад практично дуже рідкісний на практиці, але він гарно ілюструє як вираз відрізняється від інструкції
// myFn2(c1 = c1 + 1;)
// myFn2(let d)  => Uncaught SyntaxError - тому що тут в параметрах інструкції

// Тобто використовуючи функцію ми можемо перевірити що є виразом, а що інструкцією

// #endregion

// #region Масиви
// Нагадування: масив це об'єкт, з цифровими іменами властивостей (0..1..2.. і тд.)
const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

const myArray2 = new Array(1, 2, 3)
console.log(myArray2) // [1, 2, 3]
// при чому myArray !== myArray2, тому що це 2 різні ОБ'ЄКТИ! в пам'яті на них два різних посилання
console.table(myArray2) // вивід структури об'єкта, довжиною в 3
console.log(myArray2.length) // 3

// Порівняння масиву з об'єктом
const myObject2 = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
}
console.log(myObject2) // ми отримаємо щось дуже схоже на масив: { '0': 1, '1': 2, '2': 3, length: 3 } , але відрізняються вони прототипами (про них пізніше). Також довжина в масиві буде оновлюватися кожний раз коли туди щось додається, з об'єктом такого відбуватися не буде

// Вивід елемента під індексом:
console.log(myArray[0]) // 1
// Зміна довжини:
myArray.length = 7
// Все що далі 2 буде:
console.log(myArray[7]) // undefined

// Додавання нових елементів у масив:
myArray[3] = 'abc'
console.log(myArray) // [ 1, 2, 3, 'abc', <3 empty items> ]
myArray[4] = true
console.log(myArray) // [ 1, 2, 3, 'abc', true, <2 empty items> ]
myArray.length = 4
myArray[5] = false // додавання нового елементу в кінець масиву
console.log(myArray) // [ 1, 2, 3, 'abc', <1 empty item>, false ]
console.log(myArray.length) // 5, а було 4
// але таке додавання не зручне, тому що ми можемо не знати довжину масиву. Для цього є методи масиву
// #endregion

// #region Методи масиву
// Ці методи являються функціями вищого порядку, або методами(функціями) прототипів

// Основні методи:
myArray3 = [1, 2, 3]
myArray3.push('name') // додавання в кінець масиву
let removedElement = myArray3.pop() // видаляє останній елемент масиву і цей останній елемент можна присвоїти в перемінну
console.log(removedElement) // 'name'
myArray3.unshift(removedElement) // додавання елемента в початок масиву => 'name'
removedElement = myArray3.shift() // видаляє перший елемент масиву => 'name' і присвоєння в перемінну
// вказані методи змінюють оригінальний масив, тобто відбувається "мутація"

// Популярний метод: forEach
const res = myArray3.forEach((el) => console.log(el * 2)) // колбек функція як буде викликана у функції forEach
// output: 2 4 6 ; по суті всередині цикл який перебирає елементи і виконує над ними вказану нами дію і він буде повторюватися стільки, скільки в нас елементів в масиві
console.log(myArray3)
// output: 1 2 3
// оригінальний масив не змінився
console.log(res) // output: undefined, тому що задача тільки перебір елементів масиву і виконання над нами певної дії, все, нічого він не повертає

// Ще один популярний метод: map
let newArray = myArray3.map((el) => el * 2)
console.log(myArray3) // [ 1, 2, 3 ]
console.log(newArray) // [ 2, 4, 6 ]
// цей метод вже виконує дію над всіма елементами І повертає результат дії який можна помістити у новий масив, при чому однакової довжини

newArray = myArray3.map((el) => {
  el * 3
})
console.log(newArray) // [ undefined, undefined, undefined ]
// тому що немає ключового слова return

newArray = myArray3.map((el) => {
  return el * 3
})
console.log(newArray) // [ 3, 6, 9 ]

// також замість (el) => {  можна писати  function(el) {
// #endregion

// #region Деструктуризація об'єктів
// Destructuring assignment

const userProfile = {
  name: 'Vasyl',
  commentsQty: 23,
  hasSignedAgreement: false,
}

// створюємо нові перемінні використовуючи властивості об'єкта:
const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile
// імена властивостей об'єкта = об'єкт (чиї властивості ми беремо) і все це відбувається за рахунок фігурних дужок {}

console.log(name) // Vasyl
console.log(commentsQty) // 23
// #endregion

// #region Деструктуризація масивів
const fruits = ['Apple', 'Banana']
// нові перемінні на основі значень елементів масиву
const [fruitOne, fruitTwo] = fruits
// тут [] дужки, тому що працюємо з масивом
// використовуємо нові перемінні в тому порядку якому нам треба, щоб елементи масиву їм відповідали. Тобто перший фрукт і другий фрукт які відповідають яблуко(1) та банан(2). Елемент під індексом 0 буде присвоєний в перемінну fruitOne і тд.
console.log(fruitOne) // Apple
console.log(fruitTwo) // Banana
// #endregion

// #region Деструктуризація в функціях

// Сюди заходять тільки ті властивості об'єкта які потрібні для функції:
const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`
  }
  return `User ${name} has ${commentsQty} comments`
}
// тобто відбувається деструктуризація властивостей об'єкта в функції. Іншими словами в функцію в якості параметрів ми вносимо створення нових перемінних, надаємо їм дані з нашого об'єкта і виконуємо над ними дію. Такі перемінні будуть видимі тільки в тілі функції
console.log(userInfo(userProfile)) // User Vasyl has 23 comments
// #endregion

// #region Модулі
// Все в програмуванні розбивається на багато-багато файлів. Наприклад файл з Юзером, або функція винесена в окремий файл, щоб потім можна було не дублювати код, а користуватися тим файлом з функцією тощо.
// export ... / import ... - синтаксис який використовується коли ми беремо якусь, до прикладу функцію з іншого файлу. Далі робота в теці Модулі. Файли там мають трошки інакше розширення ...mjs

// Які правила роботи з модулями?
// 1. Вони повинні бути одно-цільовими. Тобто виконують одну дію і їх можна використовувати багаторазово
// 2. Експорт інструкції розміщувати внизу файлу
// 3. Імпорт інструкції зверху файлу
// 4. По можливості користуватися export default. Тобто один модуль -> одна дія -> один експорт

// У фронт-енді можна імпортувати різні модулі вже з готових бібліотек React, React Native, Angular тощо (встановлюються вони за допомоги NPM (node package manager)). Такі імпорти, зовнішні, треба писати вище власного імпорту. Все це можна глянути в тестовому додатку, у файлах App.js та Index.js

// #endregion

// #region Класи та Прототипи
// класи дозволяють створювати прототипи для об'єктів, вже не основі прототипів створюються екземпляри. Ці екземпляри наслідують властивості та методи прототипів, а також можуть мати свої властивості та методи

// Приклад:
class Comment {
  constructor(text) {
    // метод (параметри) {тіло метода} -> конструктор в який ми передаємо текст в якості параметра
    this.text = text // this. -> посилається на новий екземпляр класу; this.text = текст який зайшов сюди в якості параметра
    this.votesQty = 0 // кількість голосів, по замовчанням в нового коментаря 0 голосів
  } // конструктор викликається тільки тоді коли створюється новий екземпляр класу
  upvote() {
    // метод(функція)
    this.votesQty += 1
  }
  static mergeComments(first, second) {
    // проста конкатенація текстів
    return `${first} ${second}`
  }
}
// екземпляр класу:
const firstComment = new Comment('First Comment')
console.table(firstComment) // First Comment 0
firstComment.upvote() // 0 + 1
console.log(firstComment.votesQty) // 1

// належність екземпляра тому чи іншому класу:
firstComment instanceof Comment // true
firstComment instanceof Object // true => тому що Object це глобальний клас від якого походять всі інші класи

// перевірка належності властивості екземпляру об'єкту
firstComment.hasOwnProperty('text') // true
firstComment.hasOwnProperty('votesQty') // true
firstComment.hasOwnProperty('upvote') // false => методи будуть тільки так, тому цей метод є тільки в прототипі
firstComment.hasOwnProperty('hasOwnProperty') // false => так і тут, цей метод є тільки в глобальному класі

// Декілька екземплярів якогось класу:
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

// #region Статичні методи
Comment.mergeComments(firstComment, secondComment)
// такий метод буде доступний як метод класу Comment і він не буде успадковуватися екземплярами класу
// #endregion

// #region Розширення інших класів
class NumberArray extends Array {
  // extends - розширює інший клас
  sum() {
    // додаємо новий метод, який буде сумувати всі елементи нового масиву
    return this.reduce((el, acc) => (acc += el), 0)
  }
}
// TODO: Розібратися із reduce !!!

const numberArray = new NumberArray(2, 5, 7) // тут спершу викликається батьківський конструктор, а потім додаються методи які його розширюють

console.log(numberArray)
numberArray.sum() // 14
// #endregion

// #endregion

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
