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
