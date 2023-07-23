// Функції генератори (Generators)
// це особливий тип функції, який може призупиняти своє виконання, повертати проміжні результати і потім продовжувати його з того ж місця, де він був призупинений. Такі функції можуть створювати послідовність значень, які можна ітерувати (ітератори), одне за одним, використовуючи цикл for...of, ітератори або оператор ...spread.

// Синтаксис
// async function* name([param[, param[, ... param]]]) {
//    statements
// }

// така функція пишеться function* і має ключове слово yield (віддати), яке призупиняє виконання функції і повертає значення, яке передається в цей момент. При наступному виклику функції виконання продовжується з того місця, де воно було призупинено.

// Приклад
async function* generator(i) {
  yield i
  yield i + 10
}
// -----------------------------------------------------------------------------------------------------
// Наприклад в нас є асинхронна функція для роботи з файлом (отримання, перетворення, відправка)

// async function performFile(path) {
//   const content = await loadFile(path)

//   return [
//     async () => {
//       const data = await convertFile(content)
//       return [
//         async () => {
//           const convertedContent = await getInfoFromFile(data)

//           await saveFile(convertedContent)

//           await sendFile()
//         },
//         data,
//       ]
//     },
//     content,
//   ]
// } // знову це пекло колбеків :(

// async function main() {
//   const [next, content] = await performFile('path/to/file')
//   //....
//   console.log(next, content)
//   await next()
// }

// // і тут нам на допомогу приходять генератори

// async function* performFile(path) {
//   const content = await loadFile(path)

//   yield async () => {
//     // віддаємо першу частину коли викликаємо перший раз
//     // тобто тут зупиняється виконання функції і віддається перше значення
//     const data = await convertFile(content)
//     return [
//       async () => {
//         // віддаємо другу частину коли викликаємо другий раз
//         const convertedContent = await getInfoFromFile(data)
//         await saveFile(convertedContent)
//         await sendFile()
//       },
//       data,
//     ]
//   }
//   yield content // віддаємо третю частину коли викликаємо третій раз
// }

// const generatorFunc = performFile('path/to/file') // створюємо об'єкт ітератор-генератор
// // він приймає два значення value і done
// // value - значення яке віддається
// // done - чи закінчився ітератор

// console.log(generatorFunc.next().value) // викликаємо перший раз
// // метод next() викликає функцію і віддає перше значення
// console.log(generatorFunc.next().value) // викликаємо другий раз
// console.log(generatorFunc.next().value) // викликаємо третій раз
// // виконується ітерація і віддається значення
// -----------------------------------------------------------------------------------------------------
// давайте простіший приклад

function* generator2() {
  // * - означає, що це генератор
  console.log('start')
  yield 1 // це ніби return в якому віддаємо значення, але у випадку генератора не закінчує функцію
  console.log('middle')
  yield 2
  console.log('end')
  return 3 // тут вже done true, бо це останнє значення
}

const gen = generator2() // створюємо об'єкт ітератор-генератор
const result1 = gen.next() // викликаємо перший раз
console.log(result1) // start {value: 1, done: false} - done false означає, що функція не закінчилась
// функція запускається, доходить до першого yield і віддає значення в ньому. тут призупиняється виконання функції

const result2 = gen.next() // викликаємо перший раз
console.log(result2) // middle {value: 2, done: false}
// функція продовжується з того місця, де вона призупинилась і доходить до другого yield і віддає значення в ньому. тут знову призупиняється виконання функції

const result3 = gen.next() // викликаємо перший раз
console.log(result3) // end {value: 3, done: true} - done true означає, що функція закінчилась
// закінчення виконання функції ітератора-генератора
// -----------------------------------------------------------------------------------------------------
function* processOrder(order) {
  yield validateOrder(order)
  yield processPayment(order)
  yield sendOrderConfirmation(order)

  return order
}

function validateOrder(order) {
  console.log(`Validating order ${order.id}`)
  const isValid = order.quantity > 0
  return isValid
}

function processPayment(order) {
  console.log(`Processing payment for order ${order.id}`)
  const isPaid = Math.random() < 0.5
  return isPaid
}

function sendOrderConfirmation(order) {
  console.log(`Sending ${order.id} confirmation to customer`)
  const isConfirmed = true
  return isConfirmed
}
const order = { id: 1, items: ['apple', 'pear'], quantity: 2 }

const orderProcessor = processOrder(order)

const isValid = orderProcessor.next().value
if (!isValid) {
  // якщо не валідний, то виходимо з функції
  console.log('Order is not valid')
  return
}
console.log(isValid)
const isPaid = orderProcessor.next().value
if (!isPaid) {
  console.log('Order is not paid')
  return
}
console.log(isPaid)
const isConfirmed = orderProcessor.next().value
if (!isConfirmed) {
  console.log('Order is not confirmed')
  return
}
console.log(isConfirmed)
console.log(orderProcessor.next().value)
// -----------------------------------------------------------------------------------------------------
// ще деякі особливості  таких функцій
// можна використовувати for of

function* generator3() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

for (const value of generator3()) {
  console.log(value)
} // 1 2 3 4 5 - виводиться кожне значення генератора

// далі через оператор spread можна вивести всі значення генератора
console.log([...generator3()]) // [1, 2, 3, 4, 5] - виводиться масив з усіма значеннями генератора
// але якщо там буде return, то воно не віддасться
// -----------------------------------------------------------------------------------------------------
// генератор в генераторі

function* generator4() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

function* generator5() {
  yield* generator4() // викликаємо генератор через yield*
  yield 6
  yield 7
  yield 8
  yield 9
  yield 10
}

for (const value of generator5()) {
  console.log(value)
} // 1 2 3 4 5 6 7 8 9 10

console.log([...generator5()]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// -----------------------------------------------------------------------------------------------------
// передача значень в генератор
// можна передавати значення в генератор через метод next(value)

function* generator6() {
  yield 1 // перший некст
  const value = yield 2 // другий некст
  yield 3 // третій некст, на цьому етапі передаємо значення в генератор
  yield value // четвертий некст і віддаємо значення, яке було передано в генератор
}

const gen6 = generator6()
console.log(gen6.next()) // {value: 1, done: false}
console.log(gen6.next()) // {value: 2, done: false}
console.log(gen6.next(10)) // {value: 3, done: false} - тут ми передаємо значення 10 в генератор
console.log(gen6.next()) // {value: 10, done: false} - і воно використовується в генераторі у тому місці, де він був переданий
// -----------------------------------------------------------------------------------------------------
// дострокове завершення генератора

function* generator7() {
  yield 1
  yield 2
  yield 3
  yield 4
}

const gen7 = generator7()

console.log(gen7.next()) // {value: 1, done: false}
console.log(gen7.return(100)) // {value: 100, done: true} - тут ми передаємо значення 100 в генератор і він завершується
// -----------------------------------------------------------------------------------------------------
// Виклик помилки в генераторі

// function* generator8() {
//   yield 1
//   yield 2
//   yield 3
//   yield 4
// }

// const gen8 = generator8()

// console.log(gen8.next()) // {value: 1, done: false}
// console.log(gen8.throw(new Error('Error'))) // {value: undefined, done: true} - тут ми передаємо помилку в генератор і він завершується
// але value всеодно повертається
// якщо далі буде ще одне yield, то саме воно повертається
// тобто ітерація по yield не зупиняється, просто виводиться помилка
// -----------------------------------------------------------------------------------------------------
// Перебір асинхронних значень генератора
// виконується це через for await of

async function* generator9() {
  yield 1
  yield 2
  yield 3
  yield 4
}

async function main() {
  for await (const value of generator9()) {
    console.log(value)
  }
}

main() // 1 2 3 4

// ще один приклад

async function* asyncGenerator() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  yield 'After 1s'
  await new Promise((resolve) => setTimeout(resolve, 1000))
  yield 'After 2s'
}

async function runAsyncGenerator() {
  const generator = asyncGenerator()
  for await (const value of generator) {
    // асинхронно виводимо значення
    console.log(value)
  }
}

runAsyncGenerator() // After 1s After 2s
// -----------------------------------------------------------------------------------------------------
// Більш складний приклад

// Функція симуляції отримання даних з сервера
function fetchDataFromServer() {
  // асинхронний запит на сервер
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // через рандом симулюємо чи буде помилка чи ні
      const randomNumber = Math.random()
      if (randomNumber > 0.5) {
        resolve('Data from server')
      } else {
        reject('Error')
      }
    }, 2000)
  })
}

// Функція для конвертації даних
function convertData(data) {
  // асинхронна конвертація
  return new Promise((resolve) => {
    setTimeout(() => {
      const convertedData = data.toUpperCase()
      resolve(convertedData)
    }, 2000)
  })
}

// Генеративна функція для послідовного отримання даних з сервера і конвертації їх
async function* fetchData() {
  try {
    const result = await fetchDataFromServer() // отримуємо дані з сервера
    yield 'Pending' // віддаємо Pending, поки не конвертуємо данні
    const convertedData = await convertData(result) // конвертуємо дані
    yield 'Success' // віддаємо Success, якщо все вдалося
    return convertedData // віддаємо конвертовані дані
  } catch (error) {
    yield 'Error' // віддаємо Error, якщо щось пішло не так
  }
}

;async () => {
  const generator = fetchData() // створюємо генератор
  for await (const value of generator) {
    // перебираємо генератор
    // 1. отримання даних; 2. конвертація даних; 3. віддаємо конвертовані дані
    console.log(value)
  }
}
