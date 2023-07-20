// Колбек (callback) - функція яка передається як аргумент іншій функції і викликається після виконання певної дії. Вона є варіантом управління асинхронними операціями. Колбек можна передавати в асинхронну функцію як аргумент та виконувати код колбек функції у відповідь на результат асинхронної операції.

const e = require('express')

function loadFile(filename, callback) {
  try {
    console.log(`Downloading file: ${filename}`)
    setTimeout(() => {
      callback(null, `File contents: ${filename}`)
    }, 2000)
  } catch (error) {
    callback(error, null)
  }
}

loadFile('index.html', (error, content) => {
  if (error) console.error(`Error: ${error}`)
  else console.log(content)
})
// -----------------------------------------------------------------------------------------------
function convertFile(filename, callback) {
  setTimeout(() => {
    callback(null, `Converted to PDF: ${filename}`)
  }, 2000)
}

function saveFile(filename, callback) {
  setTimeout(() => {
    callback(null, `Saved file: ${filename}`)
  }, 2000)
}

function sendFile(filename, callback) {
  setTimeout(() => {
    callback(null, `Sent file: ${filename}`)
  }, 2000)
}

// Якщо використовувати колбеки, то код буде виглядати так:
loadFile('index.html', (error, content) => {
  if (error) console.error(`Error: ${error}`)
  else {
    convertFile(content, (error, pdf) => {
      if (error) console.error(`Error: ${error}`)
      else {
        saveFile(pdf, (error, saved) => {
          if (error) console.error(`Error: ${error}`)
          else {
            sendFile(saved, (error, sent) => {
              if (error) console.error(`Error: ${error}`)
              else console.log(sent)
            })
          }
        })
      }
    })
  }
})
// в програмуванні це називається callback hell (пекло колбеків) і воно не є хорошим підходом до роботи з асинхронним кодом.
// ==========================================================================================================
// Обіцянка (Promise) - це об'єкт, який представляє результат асинхронної операції. Він може бути в стані pending (очікування), fulfilled (виконано), pending (очікування) або rejected (відхилено). Якщо обіцянка виконана або відхилена, то вона називається settled (встановлена). Якщо обіцянка виконана, то вона має значення, яке було передано в функцію resolve. Якщо обіцянка відхилена, то вона має значення, яке було передано в функцію reject. Якщо обіцянка в стані pending, то вона може перейти в стан fulfilled або rejected. Після того, як обіцянка перейшла в стан fulfilled або rejected, вона не може змінити свій стан.
// Вона дозволяє виконувати асинхронний код в синхронному стилі. Це дозволяє уникнути callback hell.

// Створення обіцянки
// const promise = new Promise((resolve, reject) => {
// виконання асинхронного коду
// ...
// якщо все добре, то викликаємо resolve
// resolve(value)
// якщо щось пішло не так, то викликаємо reject
// reject(error)
// })

// Створення функції, яка повертає обіцянку
function loadFile(filename) {
  return new Promise((resolve, reject) => {
    try {
      console.log(`Downloading file: ${filename}`)
      setTimeout(() => {
        resolve(`File contents: ${filename}`)
      }, 2000)
    } catch (error) {
      reject(error)
    }
  })
}
// або
const loadFile2 = (filename) =>
  new Promise((resolve, reject) => {
    try {
      console.log(`Downloading file: ${filename}`)
      setTimeout(() => {
        resolve(`File contents: ${filename}`)
      }, 2000)
    } catch (error) {
      reject(error)
    }
  })
let result = loadFile2('index.html')
result.then(
  (content) => console.log(content),
  (error) => console.error(error),
)
// .then(onResolve, onReject)
console.log(result)

// З промісами код виглядає схоже
loadFile('index.html')
  .then((content) => convertFile(content))
  .then((pdf) => saveFile(pdf))
  .then((saved) => sendFile(saved))
  .then((sent) => console.log(sent))
  .catch((error) => console.error(`Error: ${error}`))
// -----------------------------------------------------------------------------------------------
// Вирішена обіцянка - Promise.resolve(value) - створює обіцянку, яка виконана і має значення value.
// Відхилена обіцянка - Promise.reject(error) - створює обіцянку, яка відхилена і має значення error.

// Promise.all(iterable) - створює обіцянку, яка виконується тоді, коли виконуються всі обіцянки з ітерабельного об'єкту iterable. Якщо хоча б одна обіцянка відхиляється, то виконання всіх обіцянок припиняється і повертається відхилення.
Promise.all(
  loadFile('index.html'),
  convertFile('index.html'),
  saveFile('index.html'),
  sendFile('index.html'),
).catch((error) => console.error(`Error: ${error}`))
// Promise.allSettled(iterable) - створює обіцянку, яка об'єднує всі обіцянки з ітерабельного об'єкту iterable. Вона завжди виконується і повертає масив об'єктів, які містять результати виконання обіцянок.
// Promise.any(iterable) - створює обіцянку, яка виконується тоді, коли виконується хоча б одна обіцянка з ітерабельного об'єкту iterable. Якщо всі обіцянки відхиляються, то виконання всіх обіцянок припиняється і повертається відхилення.
// Promise.race(iterable) - створює обіцянку, яка виконується тоді, коли виконується перша обіцянка з ітерабельного об'єкту iterable. Якщо перша обіцянка відхиляється, то виконання всіх обіцянок припиняється і повертається відхилення.
