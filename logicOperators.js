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
