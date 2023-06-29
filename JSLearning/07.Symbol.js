// #region Symbol
// це примітивний тип даних, який використовується для створення унікальних ідентифікаторів
const newPerson2 = {
  name: 'John',
  age: 30,
}
const key = 'name'
newPerson2[key] = 'user'
console.log(newPerson2) // {name: "user", age: 30} - незнаючи ключа ми його створили, але такий ключ вже є в об'єкті
// ------------------------------------------------------------------------------------------
const phoneBook = {
  olga: '+380123456789',
}
function addToPhoneBook(name, phone) {
  phoneBook[name] = phone
}
// і наприклад в коді є декілька викликів функції де додаються одна і та ж властивість до об'єкта
addToPhoneBook('olga', '+380987654321')
addToPhoneBook('olga', '+380111111111')
// і в результаті ми отримаємо об'єкт з однією властивістю, але з різними значеннями
console.log(phoneBook) // {olga: "+380111111111"} - останнє значення перезаписало попереднє
// для цього і використовується Symbol:
const userOne = Symbol('Anna')
phoneBook[userOne] = '+380123456789'
console.log(phoneBook) // {olga: "+380111111111", Symbol(Anna): "+380123456789"}
// тепер ми можемо додавати властивості з однаковими іменами, але з різними значеннями
const userTwo = Symbol('Anna')
phoneBook[userTwo] = '+380987654321'
console.log(phoneBook) // {olga: "+380111111111", Symbol(Anna): "+380123456789", Symbol(Anna): "+380987654321"} вже є дві властивості з однаковим іменем Symbol(Anna) але з різними значеннями
// модифікуємо нашу функцію:
function addToPhoneBook(name, phone) {
  phoneBook[Symbol(name)] = phone
} // і тепер ми можемо додавати властивості з однаковими іменами, але з різними значеннями
addToPhoneBook('Anna', '+380123456789')
addToPhoneBook('olga', '+380987654321')
console.log(phoneBook) // тут вже будуть багато властивостей з однаковими іменами і з різними значеннями
// ------------------------------------------------------------------------------------------
// порівняння символів:
const symbolOne = Symbol('Anna')
const symbolTwo = Symbol('Anna')
console.log(symbolOne === symbolTwo) // false - символи завжди будуть різними, унікальними
// ------------------------------------------------------------------------------------------
// Як звертатися до символів:
// можна використовувати .description
console.log(symbolOne.description) // Anna
console.log(symbolTwo.description) // Anna
console.log(phoneBook[symbolOne.description]) // +380123456789
console.log(phoneBook[symbolTwo.description]) // +380987654321
// або можна використовувати Object.getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(phoneBook)) // [Symbol(Anna), Symbol(Anna)] - масив з двома символами
// ------------------------------------------------------------------------------------------
// використання символів між об'єктами:
// наприклад в нас є об'єкт користувача:
const user1 = {
  name: 'Anna',
  age: 30,
  phone: '+380123456789',
  id: Symbol(Math.floor(Math.random() * 1000)),
}
const user2 = {
  name: 'Olga',
  age: 30,
  phone: '+380987654321',
  id: Symbol(Math.floor(Math.random() * 1000)),
}
// тепер додамо їх у об'єкт який відповідає за контактну книжку:
const phoneBook2 = {
  [user1.id]: user1,
  [user2.id]: user2,

  getPhone: function (userId) {
    return this[userId].phone
  },
} // і в нас тепер є книжка з двома користувачами
console.log(phoneBook2.getPhone(user1.id)) // +380123456789
// ------------------------------------------------------------------------------------------
// Неунікальний символ:
let symbol1 = Symbol.for('Anna')
let symbol2 = Symbol.for('Anna')
console.log(symbol1 === symbol2) // true
// якщо використовувати .description, то відповідь буде true
console.log(symbol1.description === symbol2.description) // true
// а якщо використовувати не строге порівняння?
console.log(symbol1 == symbol2) // false - не строге порівняння не працює
// ------------------------------------------------------------------------------------------
// методи Symbol:
// Symbol.keyFor() - повертає ключ символу
console.log(Symbol.keyFor(symbol1)) // Anna
console.log(Symbol.keyFor(symbol2)) // Anna
console.log(Symbol.keyFor(user1.id)) // undefined - не працює для символів які не створені за допомогою Symbol.for()
// ------------------------------------------------------------------------------------------
// Symbol.iterator - це метод який дозволяє перебирати об'єкти
// просто так, доступ до символу немає
for (let key in phoneBook2) {
  console.log(key) // тут будуть виводитися ключі, але не будуть виводитися символи
}
// хоча якщо напряму звертатися до символу, то він виведеться
console.log(phoneBook2[user1.id]) // {name: "Anna", age: 30, phone: "+380123456789", id: Symbol(100)}
// для цього в нас є наш метод Symbol.iterator
let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      },
    }
  },
}
for (let num of range) {
  console.log(num) // 1, 2, 3, 4, 5
} // і тепер ми можемо перебирати об'єкти за допомогою for of
// а тепер у використанні з phoneBook2
let phoneBook3 = {
  [user1.id]: user1,
  [user2.id]: user2,
  [Symbol.iterator]() {
    let users = Object.values(this) // тут ми отримуємо масив з об'єктами
    let index = 0 // індекс для перебору
    return {
      next() {
        if (index < users.length) {
          // якщо індекс менший за довжину масиву
          return { done: false, value: users[index++] } // то повертаємо об'єкт з done: false і значенням з масиву
        } else {
          // якщо індекс більший за довжину масиву
          return { done: true } // то повертаємо об'єкт з done: true, тобто завершуємо перебір
        }
      },
    }
  },
}
for (let user of phoneBook3) {
  console.log(user) // {name: "Anna", age: 30, phone: "+380123456789", id: Symbol(100)}
}
// тепер трішки модифікуємо наш об'єкт
// =============================================================================================
// УВАГА!!!! ============== НЕ ПРАЦЮЄ!!! (можливо переробити пізніше)
// =============================================================================================
const phoneBook4 = {
  [user1.id]: user1,
  [user2.id]: user2,
  [Symbol.iterator]() {
    this.users = Object.values(this)
    this.index = 0
    return this
  },
  next() {
    return this.index < this.users.length
      ? { done: false, value: this.users[this.index++] }
      : { done: true }
  },
}
const iterator = phoneBook4[Symbol.iterator]()
let result2
do {
  result2 = iterator.next()
  if (!result2.done) {
    console.log(result2.value)
  }
} while (!result2.done)
// =============================================================================================
// УВАГА!!!! ============== НЕ ПРАЦЮЄ!!! (можливо переробити пізніше)
// =============================================================================================
// #endregion
