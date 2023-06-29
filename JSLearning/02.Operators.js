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

// ?? - оператор нульового злиття
const num3 = null ?? 10
// якщо лівий операнд null або undefined, то використовується правий операнд
// таким чином можна задавати значення за замовчуванням

// ?. - оператор опціонального ланцюжка
const user = {
  name: 'Vasya',
  age: 20,
  address: {
    city: 'Lviv',
  },
  log() {
    return `${this.name} is ${this.age} years old`
  },
}

console.log(user.address?.city) // Lviv
// перевіряє чи існує такий елемент в об'єкті, якщо ні - повертає undefined, якщо так - повертає значення
console.log(user.address?.country) // undefined
console.log(user?.log?.()) // Vasya is 20 years old - викликає функцію, якщо вона існує

// взаємодія з іншими логічними операторами
// let num4 = null || num2 ?? num1 // error
num4 = (null || num2) ?? num1 // 20
// num4 = null && num2 ?? num1 // error
num4 = (null && num2) ?? num1 // 10
// тобто щоб не було помилки, потрібно обгорнути в дужки

// ==============================================================================
// оператори логічного присвоєння
// ||= - це як а = (а || b)
// &&= - це як а = (а && b)
// ??= - це як а = (а ?? b)

num1 ||= num2 // num1 = num1 || num2
console.log(num1) // 10
num1 &&= num2 // num1 = num1 && num2
console.log(num1) // 20
num1 ??= num2 // num1 = num1 ?? num2
console.log(num1) // 20
// в питаннях чисел -  якщо перше число true, то воно і залишається, якщо false - то замінюється на друге.
let str1 = 'Hello'
let str2 = 'World'

str1 ||= str2 // str1 = str1 || str2
console.log(str1) // Hello
str1 &&= str2 // str1 = str1 && str2
console.log(str1) // World
str1 ??= str2 // str1 = str1 ?? str2
console.log(str1) // World
// в питаннях строк - якщо перша строка true, то воно і залишається, якщо false - то замінюється на другу. Якщо перша строка МЕНШЕ за другу, то воно замінюється на другу. Якщо перша строка і друга строка однакові, то воно залишається першою.

// тобто чим більше слово чи число, тим воно важливіше і воно залишається
num1 ||= str1
console.log(num1) // 20
str1 ||= num1
console.log(str1) // World
// в такому випадку завжди буде перше значення
num1 &&= str1
console.log(num1) // World
str1 &&= num1
console.log(str1) // World
// в такому випадку завжди буде string значення
num1 ??= str1
console.log(num1) // World
str1 ??= num1
console.log(str1) // World
// в такому випадку завжди буде string значення. АЛЕ якщо одне зі значення буде null або undefined, то воно заміниться на інше значення
// ЦЕ ще більше спрощений варіант тернарного оператора, або if else, або просто ??

// якщо коротко то
// ||= присвоює оператору зліва значення справа, якщо зліва false
// &&= присвоює оператору зліва значення справа, якщо зліва true
// ??= присвоює оператору зліва значення справа, якщо зліва null або undefined
// ==============================================================================
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
let age12 = 20
age12 >= 18 ? console.log(`Ви повнолітній`) : console.log(`Ви не повнолітній`)

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
