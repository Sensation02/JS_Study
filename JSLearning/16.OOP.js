// Що таке ООП?
// ООП - це парадигма програмування, яка базується на понятті класу та об'єкта. Де програма розбивається на набір об'єктів, які взаємодіють між собою. Кожен об'єкт має свої властивості та методи.

// Принципи ООП:
// ================== Наслідування (Inheritance) ==================
// Наслідування - це процес, коли один об'єкт може приймати властивості та методи іншого об'єкта. Тобто створюється певна ієрархія. У створенні цієї ієрархії участь беруть Прототипи.

// Прототипи - це об'єкт, який містить властивості та методи, які можуть бути успадковані іншими об'єктами.

let Animal = {
  name: 'Animal',
  voice: 'some sound',
  say() {
    console.log(this.name, 'goes', this.voice)
  },
}

// let dog = { ...Animal, name: 'Dog', voice: 'woof' }
let dog = Object.create(Animal, {
  name: { value: 'Dog' },
  voice: { value: 'woof' },
})

dog.say() // Dog goes woof
// але в такому випадку ми не можемо зрозуміти який об'єкт є прототипом
// а ще якщо ми хочемо додати нову властивість об'єкту і потім її передати в прототип, то вона не буде успадкована, тому що в даному випадку Наслідування працює дещо неправильно
Animal.go = function () {
  console.log(this.name, 'goes')
}
// dog.go() // помилка, бо в прототипі немає методу "go"
// для такого є спеціальний метод який дозволяє встановити прототип
// Object.create(proto, [properties]) - proto - прототип, properties - дескриптори (властивості об'єкта, що не є обов'язковими)
// dog = Object.create(Animal) - створюємо об'єкт з прототипом Animal (зробили це вище для правильності коду)
dog.go() // Dog goes - тепер все працює
// тобто ми створили об'єкт як прототип. І всі методи які ми додаємо в прототип успадковується нащадками
// Як можна отримати прототип певного об'єкта? для цього існує метод Object.getPrototypeOf(obj)
console.log(Object.getPrototypeOf(dog)) // { name: 'Animal', voice: 'some sound', say: [Function: say], go: [Function (anonymous)] } - отримали прототип об'єкта dog
// можна порівняти об'єкти і дізнатися чи є один об'єкт прототипом іншого
console.log(Animal.isPrototypeOf(dog)) // true - Animal є прототипом dog
// Прототип можна змінити
Object.setPrototypeOf(dog, null)
// dog.say() // помилка - бо прототип був змінений на null
Object.setPrototypeOf(dog, Animal) // повертаємо прототип Animal

// ================== Інкапсуляція (Encapsulation) ==================
// Це принцип який дозволяє об'єднати дані та функції в один об'єкт й зробити ці дані "внутрішніми", прихованими від зовнішнього впливу. Доступ до них надається тільки тоді коли вони є публічними.

// Об'єкти які дозволяють нам налаштовувати властивості та методи об'єкта
// Object.defineProperty(obj, prop, descriptor) - obj - об'єкт, prop - властивість, descriptor - дескриптор (об'єкт який містить властивості)
// Object.defineProperties(obj, props) - obj - об'єкт, props - об'єкт який містить властивості

dog.age = 10 // створили
age = 20 // змінили
delete dog.age // видалили
// Але тепер використаємо наші методи. Зробити можна це двома способами
// можна використати value, enumerable, writable, configurable
Object.defineProperty(dog, 'age', {
  value: 10, // додали значення за замовчуванням
  enumerable: true, // дозволяє виводити властивість в циклі for...in
  writable: true, // дозволяє змінювати властивість
  configurable: true, // дозволяє видаляти властивість
})
// ці властивості можна задавати як true так і false, якщо не задати то вони будуть false за замовчуванням і тоді властивість буде не доступна для зміни, видалення і т.д.
// або використати get, set
Object.defineProperty(dog, 'age', {
  get() {
    // це геттер. його відсутність не дозволить звертатись до властивості. тобто запишемо що там має бути але вивести не зможемо
    // викликається коли ми звертаємось до властивості (повертаємо значення)
    return this._age || 0 // якщо властивість _age не існує то повертаємо 0
  },
  set(value) {
    // - це сеттер. його відсутність не дозволить змінювати властивість. тобто що ми запишемо при створенні нашого об'єкта те і буде виводитися
    // викликається коли ми змінюємо властивість
    this._age = value
  },
})
// в даному випадку написання саме через нижнє підкреслення _age зроблено щоб не викликалася рекурсія. Якщо б ми написали this.age то викликалася б рекурсія і виконувалася б безкінечно

// Як ми можемо задати значення властивості?
dog.age = 10 // викликається сеттер
console.log(dog.age) // викликається геттер
// (тому що останнє що ми писали це геттер і сеттер)
//  а як з іншим?

// створимо якусь іншу властивість, не вік і подивимось що буде
Object.defineProperty(dog, 'color', {
  value: 'black',
  enumerable: true,
  writable: true,
  configurable: true,
})

dog.color = 'white' // змінимо властивість
console.log(dog.color) // white - все працює

// В принципі все те саме, але "під капотом" відбувається щось інше
console.log(Object.keys(dog)) // ['age', '_age' 'color'] - виводить тільки ті властивості які мають enumerable: true
// а інші властивості які мають enumerable: false не виводяться, а це name і voice
// --------------------------------------------------------------------------------
// замість геттера може бути інший метод
// Object.getOwnPropertyDescriptor(obj, prop) - obj - об'єкт, prop - властивість
// Object.getOwnPropertyDescriptors(obj) - obj - об'єкт

console.log(Object.getOwnPropertyDescriptor(dog, 'age')) // {value: 10, writable: true, enumerable: true, configurable: true} - виводить дескриптор властивості
console.log(Object.getOwnPropertyDescriptors(dog)) // виводить дескриптори всіх властивостей об'єкта
// Object.hasOwnProperty(propertyKey) - propertyKey - властивість
console.log(dog.hasOwnProperty('age')) // true - перевіряє чи є властивість в об'єкті

// ================== Поліморфізм (Polymorphism) ==================
// Це принцип ООП, який дозволяє нам перевизначати методи в класах нащадках
// тобто в прототипі є метод з певною дією, а в нащадку цей метод може виконувати зовсім іншу дію, зберігаючи при цьому назву методу

const Tag = {
  render() {
    return `<>${value}</>`
  },
}

const Button = Object.create(Tag) // створюємо об'єкт Button який наслідується від об'єкта Tag

Button.render = function (value = '') {
  // перевизначаємо метод render
  return `<button style="${this.style}">${value}</button>`
}

const mainButton = Object.create(Button, {
  style: {
    value: 'color: red',
    writable: true,
  },
})

console.log(mainButton.render('Click')) // <button style="color: red">Click</button> - виводиться те що ми написали в Button.render

const Input = Object.create(Tag, {
  placeholder: {
    value: 'Enter your text',
    writable: true,
  },
  style: {
    value: 'color: blue',
    writable: true,
  },
})
Input.render = function () {
  return `<input placeholder=${this.placeholder} style="${this.style}" />`
}
console.log(Input.render()) // <input placeholder=Enter your text style="color: blue" /> - виводиться те що ми написали в Input.render

const loginInput = Object.create(Input, {
  placeholder: {
    value: 'Enter your login',
    writable: true,
  },
  style: {
    value: 'color: green',
    writable: true,
  },
})
console.log(loginInput.render()) // <input placeholder=Enter your login style="color: green" /> - виводиться те що ми написали в loginInput.render
// --------------------------------------------------------------------------------
const serverRequest = {
  data: null,
  sendData() {
    return this.data
  },
  render() {
    console.log(this.sendData())
    // взагалом тут можна робити що завгодно, що нам треба, при чому назва методу залишається та ж
  },
}
const Page = {
  components: [],
  path: '',
  render() {
    this.components.forEach((component) => component.render())
  },
}

// всі ці дії відбуваються на одним і тим же методом render, який був в прототипі. І з кожним новим об'єктом ми перевизначали той метод render, але назва методу залишалася та ж. В цьому і заключається поліморфізм
// ==================================================================================
// Підсумок:
// 1. Модульність. ООП дозволяє нам розбити нашу програму на окремі модулі, які ми можемо перевикористовувати в інших програмах, що полегшує розробку
// 2. Повторне використання коду. Ми можемо перевикористовувати код, який ми написали раніше за допомоги наслідування та поліморфізму.
// 3. Розширюваність. Ми можемо розширювати функціонал нашої програми, додаючи нові класи, які наслідуються від інших класів.
// 4. Захист даних. Ми можемо захистити наші дані від зовнішнього впливу, використовуючи приватні властивості та методи.
