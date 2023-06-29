// #region Math object
let resultMath
resultMath = Math.min(2, 6, 10, 1000) // 2 - мінімальне число
resultMath = Math.PI // 3.14... - число пі
resultMath = Math.random() // random number with point between 0 and 1
resultMath = Math.round(3.5) // 4; 3.3 -> 3
resultMath = Math.ceil(3.3) // 4; - округлює до більшого числа
resultMath = Math.floor(3.7) // 3; - округлює до меншого числа
resultMath = Math.sqrt(9) // 3 - корінь квадратний
resultMath = Math.abs(-7) // 7 - модуль числа
resultMath = Math.pow(2, 3) // (2*2*2) -> 8 - піднесення до степеня
resultMath = Math.max(2, 5, 1, 200) // 200 - максимальне число
resultMath = Math.random() * 100 // random number with point between 0 and 100
resultMath = Math.floor(Math.random() * 100) + 1 // random number without point between 0 and 100
// #endregion

// #region Об'єкти
// всі сутності в джаваскріпт це об'єкти
const myCity = {
  // - об'єкт
  city: `Chernivtsi`, // - властивості об'єкту, їх порядок немає значення
  popular: true,
  country: `Ukraine`,
  ['cityLandmark']: [`Kobylyanska`, `Central Square`], // - властивість об'єкту, яка містить масив
}

console.log(myCity) // {city: `Chernivtsi`, popular: true, country: `Ukraine`}
// точковий запис:
console.log(myCity.city) // `Chernivtsi`
console.log(myCity['cityLandmark']) // [`Kobylyanska`, `Central Square`]
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
// ==============================================================================================
const employee = {
  name: 'John',
  age: 30,
  'job title': 'Software Engineer',
  address: {
    city: 'New York',
    street: 'Broadway',
    houseNumber: 1,
  },
}
// використання циклів з об'єктами:
for (const key in employee) {
  console.log(key) // name, age, job title, address - виводить ключі об'єкту
}
// for (const value of employee) {
//   console.log(value) // помилка - об'єкт не ітерується, так ітерується тільки масив
// }
// але можна використовувати методи об'єкта Object:
console.log(Object.keys(employee)) // ["name", "age", "job title", "address"]
console.log(Object.values(employee)) // ["John", 30, "Software Engineer", {city: "New York", street: "Broadway", houseNumber: 1}]
console.log(Object.entries(employee)) // [["name", "John"], ["age", 30], ["job title", "Software Engineer"], ["address", {city: "New York", street: "Broadway", houseNumber: 1}]]
// Деструктуризація об'єктів:
// const { name, age } = employee
// console.log(name) // "John"
// const address = ({ city, street, houseNumber } = employee.address)
// console.log(address)
// const { city: cityName } = employee.address // можна перейменовувати
// console.log(cityName) // "New York"
// const {
//   name,
//   age,
//   address: { city, street, houseNumber },
//   ...rest
// } = employee
// console.log(rest) // {job title: "Software Engineer"} - решта властивостей об'єкту
// ==============================================================================================
// робота з функціями:
function getEmployeeInfo(employee) {
  console.log(employee)
}
getEmployeeInfo(employee) // {name: "John", age: 30, job title: "Software Engineer", address: {…}}
function getAddress(employee) {
  console.log(`Employee address: ${employee.address}`)
}
getAddress(employee) // Employee address: [object Object] - не працює
function getAddress(employee) {
  console.log(`Employee address: ${employee.address.city}`)
}
getAddress(employee) // Employee address: New York - працює. Тобто викликаємо властивість об'єкту, і так треба писати з кожною властивістю об'єкту, це не зручно
function getAddress({ address: { city = 'undefined', street, houseNumber } }) {
  console.log(`Employee address: ${city}, ${street}, ${houseNumber}`)
}
getAddress(employee) // Employee address: New York, Broadway, 1 - так зручніше
// тобто в таку функцію ми передаємо об'єкт, а в тілі функції використовуємо деструктуризацію об'єкту
// або можна використовувати деструктуризацію в аргументі функції щоб змінити властивості об'єкту:
getAddress((city = 'chernivtsi'), street, houseNumber) // Employee address: chernivtsi, Broadway, 1
// ==============================================================================================
// створення нового об'єкту:
const newEmployee = {
  ...employee, // копіюємо властивості з employee
  name: 'Bob', // перезаписуємо властивість з новим значенням
  age: 25,
  address: {
    ...employee.address,
    city: 'Lviv',
    street: 'Shevchenka',
    houseNumber: 10,
  },
}
console.log(newEmployee) // {name: "Bob", age: 25, job title: "Software Engineer", address: {…}}
// створення нового об'єкту з допомогою функції:
function createNewEmployee(name, age, jobTitle, city, street, houseNumber) {
  return {
    name,
    age,
    jobTitle,
    address: {
      city,
      street,
      houseNumber,
    },
  }
}
const newEmployee2 = createNewEmployee(
  'Vasyl',
  35,
  'QA',
  'Kyiv',
  'Khreshchatyk',
  1,
)
console.log(newEmployee2) // {name: "Vasyl", age: 35, jobTitle: "QA", address: {…}}
// ==============================================================================================
// оператор in - перевіряє чи є така властивість в об'єкті:
console.log('name' in employee) // true
console.log('salary' in employee) // false
// хоча можна і простіше:
console.log(!!employee.name) // true
console.log(!!employee.salary) // false
// оператор this - вказує на об'єкт в якому він використовується:
const myNewCity3 = {
  city: 'New York',
  CityGreeting() {
    // це метод об'єкту
    console.log(`Hello from ${this.city}!`)
  },
  getAddress: function () {
    // метод в якому функція
    console.log(this.city)
  },
}
// ==============================================================================================
// літеральна нотація:
const myCity2 = 'Chernivtsi'
const myStreet = 'Holovna'

const myAddress = {
  city: myCity2,
  street: myStreet,
}
// або на прикладі додавання нової властивості до існуючого об'єкту в JS:
Number.prototype.isPositive = function () {
  return this > 0
}
console.log(num.isPositive()) // true
// тобто додали нову властивість (функцію) до прототипу Number
myAddress.prototype.getAddress = function () {
  console.log(this.city)
}
console.log(myAddress.getAddress()) // Chernivtsi
// ==============================================================================================
// Вбудовані можливості об'єктів:
// Object.assign(target, source1, source2, ...sourceN) - копіює властивості з одного об'єкту в інший:
const article = {
  id: 130294,
  info: {
    title: 'JS',
    description: 'JS is awesome',
  },
  category: 'IT',
  likeAmount: 305,
}
const ARTICLE_FIELD = {
  title: 'Article ID',
  description: 'Article description',
}
articlePhoto = {
  photo: 'https://someurl.com',
  photoId: 123456,
  photoType: 'jpg',
}
articleCommentList = {
  commentList: [
    {
      id: 1,
      text: 'some text',
      user: 'user1',
    },
  ],
}
// а тепер повернемо новий об'єкт з властивостями з трьох об'єктів:
const newArticle = Object.assign(
  {},
  article,
  ARTICLE_FIELD,
  articlePhoto,
  articleCommentList,
)
console.log(newArticle)
console.log('====================')
// замість {} (пустого об'єкту) можна використовувати існуючий об'єкт, тоді властивості будуть перезаписуватися в існуючий об'єкт
// ------------------------------------------------------------------------------------------
// Object.entries(obj) - повертає масив масивів, де перший елемент - ключ, а другий - значення:
console.log(Object.entries(newArticle))
// в такому випадку можна легко ітерувати по об'єкту:
for (const [key, value] of Object.entries(newArticle)) {
  console.log(`Ключ: ${key}, Значення: ${value}`)
}
console.log('====================')
// або:
Object.entries(newArticle).forEach(([key, value]) => {
  console.log(`Ключ: ${key}, Значення: ${value}`)
})
console.log('====================')
// або:
const formList = Object.entries(newArticle).map(([key, value]) => {
  return `Ключ: ${key}, Значення: ${value}`
}) // але не забуваємо що цей метод повертає новий масив тому тут окрема змінна
console.log(formList)
console.log('====================')
// або повертаємо масив з властивостями об'єкту:
const formListLayout = Object.entries(article.info).map(([key, value]) => {
  return [ARTICLE_FIELD[key], value] // тут ми пов'язали властивості іншого об'єкту з властивостями з іншого об'єкту, ніби ми працюємо із базами даних, де є зв'язки між таблицями. Тобто ми використовуємо ключі одного об'єкту для властивостей іншого об'єкту.
})
console.log(formListLayout)
// ------------------------------------------------------------------------------------------
// Object.fromEntries(arr) - створює об'єкт з масиву масивів, де перший елемент - ключ, а другий - значення:
const fromEntries = Object.fromEntries(formListLayout)
console.log(fromEntries) // {Article ID: "JS", Article description: "JS is awesome"}
// ------------------------------------------------------------------------------------------
// Object.hasOwnProperty(prop) - перевіряє чи є властивість в об'єкті:
console.log(newArticle.hasOwnProperty('id')) // true
console.log(newArticle.hasOwnProperty('title')) // false
// ------------------------------------------------------------------------------------------
// Object.propertyIsEnumerable(prop) - перевіряє чи є властивість в об'єкті і чи можна її перебрати:
console.log(newArticle.propertyIsEnumerable('id')) // true
console.log(newArticle.propertyIsEnumerable('title')) // false - не числова властивість, тому її не можна перебрати
// ------------------------------------------------------------------------------------------
// Object.is(obj1, obj2) - перевіряє чи є два об'єкти однаковими:
console.log(Object.is(article, newArticle)) // false - бо це два різні об'єкти
// ------------------------------------------------------------------------------------------
// Object.freeze(obj) - заморожує об'єкт, тобто не можна буде додавати нові властивості, видаляти і змінювати існуючі:
Object.freeze(newArticle)
newArticle.id = 123456
console.log(newArticle) // id: 130294 - не змінилося
// ------------------------------------------------------------------------------------------
// Object.isFrozen(obj) - перевіряє чи заморожений об'єкт:
console.log(Object.isFrozen(newArticle)) // true - бо ми заморозили його раніше
// ------------------------------------------------------------------------------------------
// Object.preventExtensions(obj) - забороняє додавати нові властивості в об'єкт, але можна змінювати існуючі та видаляти:
Object.preventExtensions(newArticle)
newArticle.id = 123456
console.log(newArticle) // id: 123456 - змінилося
newArticle.newProp = 'new prop'
console.log(newArticle) // newProp: "new prop" - не змінилося
// ------------------------------------------------------------------------------------------
// Object.isExtensible(obj) - перевіряє чи можна додавати нові властивості в об'єкт:
console.log(Object.isExtensible(newArticle)) // false - бо ми заборонили додавати нові властивості
// ------------------------------------------------------------------------------------------
// Object.seal(obj) - запечатує об'єкт, тобто не можна буде додавати нові властивості, їх видаляти, але можна змінювати існуючі:
Object.seal(newArticle)
newArticle.id = 123456
console.log(newArticle) // id: 123456 - змінилося
newArticle.newProp = 'new prop'
console.log(newArticle) // newProp: "new prop" - не змінилося
// ------------------------------------------------------------------------------------------
// Object.isSealed(obj) - перевіряє чи запечатаний об'єкт:
console.log(Object.isSealed(newArticle)) // true - бо ми запечатали його раніше
// ------------------------------------------------------------------------------------------
// Object.keys(obj) - повертає масив ключів об'єкта:
console.log(Object.keys(newArticle)) // ['id', 'info', 'category', 'likeAmount', 'title', 'description', 'photo', 'photoId', 'photoType', 'commentList']
// ------------------------------------------------------------------------------------------
// Object.values(obj) - повертає масив значень об'єкта:
console.log(Object.values(newArticle)) // [130294, { title: 'JS', description: 'JS is awesome' }, 'IT', 305, 'Article ID', 'Article description', 'https://someurl.com', 123456, 'jpg', [ { id: 1, text: 'some text', user: 'user1' } ]]

// #endregion
