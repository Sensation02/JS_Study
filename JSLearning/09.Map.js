// #region Словник (Map)
// Словник - це колекція будь-якого типу даних, яка містить пари ключ-значення
// Об'єкт використовується для представлення структури даних з властивостями, методами та вкладеними об'єктами.
// Словник використовується, коли потрібно зберігати дані у вигляді пари ключ-значення та коли потрібно швидко отримувати доступ до даних за ключем.
// Властивості словника
// - Зберігається відображення ключів на значення
// - Ключами можуть бути будь-які типи даних
// - Потрібно виконувати операції додавання, видалення та доступу до елементів за ключем
// - Потрібно зберігати порядок додавання елементів
// -------------------------------------------------------------------------------------------
// Створення словника:
const dictionary = new Map() // створення порожнього словника, обов'язково через new
// можна одразу добавити елементи:
const primaryButton = new Map([
  ['size', 100],
  ['color', 'red'],
  ['active', true],
]) // створення словника з елементами (ключ-значення) в одному рядку. Все в квадратних дужках, але це не масив
console.log(primaryButton) // Map(3) {"size" => 100, "color" => "red", "active" => true}

// Створення словника з множини:
const buttonSet = new Set([
  ['size', 100],
  ['color', 'red'],
  ['active', true],
])
buttonMap = new Map(buttonSet.entries()) // також за допомоги методу entries()
// тепер навпаки, з словника в множину:
const buttonSet2 = new Set(buttonMap) // без методу entries()

// Створення словника з об'єкта:
const buttonObj = {
  size: 100,
  color: 'red',
  active: true,
}
const buttonMap = new Map(Object.entries(buttonObj)) // створення словника з об'єкта за допомоги методу Object.entries()
// -------------------------------------------------------------------------------------------
// keys() - повертає ітератор, який містить ключі для кожного елемента в словнику
buttonMap.keys() // MapIterator {"size", "color", "active"}
// values() - повертає ітератор, який містить значення для кожного елемента в словнику
buttonMap.values() // MapIterator {100, "red", true}
// entries() - повертає ітератор, який містить масиви [ключ, значення] для кожного елемента в словнику
buttonMap.entries() // MapIterator {"size" => 100, "color" => "red", "active" => true}
// -------------------------------------------------------------------------------------------
// Ключові слова:
// - new - створення порожнього словника

// - set(key, value) - додавання елемента
buttonMap.set('radius', 50) // додавання елемента
console.log(buttonMap) // Map(4) {"size" => 100, "color" => "red", "active" => true, "radius" => 50}

// - get(key) - отримання елемента (значення)
console.log(buttonMap.get('size')) // 100 - отримання елемента по ключу

// - has(key) - перевірка наявності елемента (булеве значення)
console.log(buttonMap.has('size')) // true - перевірка наявності елемента по ключу

// - delete(key) - видалення елемента
buttonMap.delete('radius') // видалення елемента
console.log(buttonMap) // Map(3) {"size" => 100, "color" => "red", "active" => true}

// - clear() - видалення всіх елементів
// buttonMap.clear() // видалення всіх елементів

// - size - кількість елементів
console.log(buttonMap.size) // 3 - кількість елементів

// - forEach(callbackFn, arg) - ітерація по елементам
buttonMap.forEach((value, key) => console.log(`Key: ${key}, Value: ${value}\n`)) // Key: size, Value: 100 Key: color, Value: red Key: active, Value: true

// - for of - ітерація по елементам
for (const [key, value] of buttonMap) {
  console.log(`Key: ${key}, Value: ${value}\n`) // \n - переніс строки в консолі
} // Key: size, Value: 100 Key: color, Value: red Key: active, Value: true

// for in - ітерація по ключам (зі словниками не використовується, але є деякі хитрощі)
// але треба створити об'єкт зі словника за допомоги методу Object.fromEntries()
for (const key in Object.fromEntries(buttonMap)) {
  console.log(`Key: ${key}, Value: ${buttonObj[key]};\n`)
} // Key: size, Value: 100; Key: color, Value: red; Key: active, Value: true;
// Але це не зручно, тому так взагалом не роблять
// -------------------------------------------------------------------------------------------
// уявимо ситуацію про продукти в магазині, і ці продукти можуть бути на різним мовах
const LANG_LIST = {
  EN: 'en',
  UA: 'ua',
}

const activeLang = LANG_LIST.EN

const newProduct = {
  name: 'Bread',
  price: 10,
  // і у випадку мов можна створити словник:
  info: new Map([
    [
      LANG_LIST.EN,
      {
        title: 'Bread',
        description:
          'Bread is a staple food prepared from a dough of flour and water, usually by baking.',
      },
    ],
    [
      LANG_LIST.UA,
      {
        title: 'Хліб',
        description:
          'Хліб - це основний продукт, приготовлений з тіста з борошна та води, зазвичай шляхом випікання.',
      },
    ],
  ]),
}

// створимо функцію, яка буде виводити інформацію про продукт на потрібній мові
const viewInfo = (product, lang) => {
  const { title, description } = product.info.get(lang)
  console.log(`Title: ${title}\nDescription: ${description}`)
}

console.log(viewInfo(newProduct, activeLang)) // Title: Bread Description: Bread is a staple food prepared from a dough of flour and water, usually by baking.

// і таким чином ми отримуємо інформацію про продукт на потрібній мові
// -------------------------------------------------------------------------------------------
// Також за допомогою словника можна об'єднати два масиви або об'єкти в один словник
user1 = {
  id: 1,
  name: 'Bazzil',
  age: 28,
}
user2 = {
  id: 2,
  name: 'Natali',
  age: 25,
}

const product1 = {
  id: 2912,
  name: 'Bread',
}
const product2 = {
  id: 2913,
  name: 'Milk',
}

const userProduct = new Map()
userProduct.set(user1, [product1, product2]).set(user2, [product1])
// тобто в першого юзера є два продукти, а в другого юзера є один продукт

const productClientList = new Map([[product1, new Set()]])
productClientList.set(product1, productClientList.get(product1).add(user1))
// тобто словник productClientList містить продукти і юзерів, які купили ці продукти
// до речі з цього можна зробити функцію

/**
 * Додає клієнта до списку клієнтів, які купили певний продукт.
 * @param {Object} product Об'єкт, що представляє продукт, який був куплений.
 * @param {Object} client Об'єкт, що представляє клієнта, який купив продукт.
 */
const addProductClient = (product, client) => {
  productClientList.set(product, productClientList.get(product).add(client))
}

addProductClient(product1, user2)
console.log(productClientList) // Map(1) {{…} => Set(2)}

// ===========================================================================================
console.log(userProduct) // Map(2) {{…} => Array(2), {…} => Array(1)}
userProduct.set(new Set([{ id: 3, name: 'Vasya', age: 30 }]), [
  product1,
  product2,
])
console.log(userProduct) // Map(3) {{…} => Array(2), {…} => Array(1), Set(1) => Array(2)}
// тобто ми фактично додали нового користувача в словник userProduct який має певні продукти
// але цей новий користувач не приймає участь в ітерації, тому що він не є об'єктом, а є Set
userProduct.forEach((value, index) => {
  console.log(`User: ${index.name}, Products: ${[value]}`)
})
// ===========================================================================================
// #endregion
