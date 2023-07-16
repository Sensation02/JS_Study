// Паттерни програмування - це шаблони, які використовуються для вирішення певних проблем.

// Це спеціальні прийоми, структури даних або алгоритми, які використовуються для вирішення певних проблем та покращення організації коду.

// Паттерни програмування можна розділити на три основні категорії:
// 1. Структурні паттерни - це паттерни, які визначають спосіб створення об'єктів, щоб зберігати дані в структурах.
// 2. Паттерни створення - це паттерни, які визначають спосіб створення об'єктів.
// 3. Паттерни поведінки - це паттерни, які визначають спосіб взаємодії між об'єктами.
// =======================================================================================================
// Одиночка (Singleton) - це структурний паттерн, який гарантує, що в класі є тільки один екземпляр, і надає глобальну точку доступу до цього екземпляра.
// Він часто використовується для реалізації з'єднання з базою даних або логера, при роботі з налаштуванням програми, кешуванні.

class RecentPurchase {
  static #instance = null // тут тримаємо екземпляр класу
  static #purchases = [] // тут тримаємо список покупок

  static create() {
    if (!this.#instance) {
      // якщо екземпляр не існує, то створюємо його
      this.#instance = new RecentPurchase()
    }
    return this.#instance // повертаємо екземпляр
  }
  // тобто якщо екземпляр класу вже існує, то повертаємо його, якщо ні, то створюємо новий і повертаємо його. Таким чином він буде в одному екземплярі.
  static add(item) {
    this.#purchases.push(item)
  }
  static get() {
    return this.#purchases
  }
}

RecentPurchase.create()
RecentPurchase.add('milk')
RecentPurchase.add('bread')
console.log(RecentPurchase.get()) // [ 'milk', 'bread' ]
// так як в нас це один екземпляр, то він буде однаковий для всіх змінних, які його викликають
// або можна створювати його взагалі без змінних для зручності написання коду
// ---------------------------------------------------------------------------------------------
// Фабрика (Factory) - це структурний паттерн, який визначає спосіб створення об'єктів без прямої специфікації їх класів.

// Фабрика використовується, коли є потреба в створенні багатьох об'єктів з однаковими властивостями, але з різними значеннями. Це дозволяє уникнути дублювання коду, дає гнучкість та розширюваність, оскільки нам достатньо додати новий підклас і фабрика вже зможе створювати об'єкти цього нового типу. (коли потрібно створити об'єкт, але точний тип об'єкта залежить від умов або конфігурації)

// Фабрика може бути реалізована як клас або функція, яка повертає об'єкт.

class Button {
  constructor({ text, color }) {
    this.text = text
    this.color = color
  }

  render() {
    return `<button style="color: ${this.color}">${this.text}</button>`
  }
}

class IconButton {
  constructor({ icon, color }) {
    this.icon = icon
    this.color = color
  }

  render() {
    return `<button style="color: ${this.color}"><img src="${this.icon}"/></button>`
  }
}

class ButtonFactory {
  static TYPE = {
    BASIC: 'basic',
    ICON: 'icon',
  }
  static create({ type, ...props }) {
    // props - це будь-які інші властивості, які можуть бути в об'єкті (text, color, icon) або інші в залежності від конструктора класу
    switch (
      type // в залежності від типу створюємо об'єкт
    ) {
      case this.TYPE.BASIC:
        return new Button(props)
      case this.TYPE.ICON:
        return new IconButton(props)
      default:
        throw new Error('Unknown type')
    }
    // через switch ми можемо створювати різні типи об'єктів
    // також можна використовувати if else - тобто перевіряємо чи та чи інша властивість в нашим параметрах і в залежності від цього створюємо об'єкт
  }
}

const myIconBtn = ButtonFactory.create({
  type: ButtonFactory.TYPE.ICON,
  icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
  color: 'red',
})
console.log(myIconBtn.render()) // <button style="color: red"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></button>
// ---------------------------------------------------------------------------------------------
// Спостерігач (Observer) - це поведінковий паттерн, який використовується для реалізації підписки, яка дозволяє одним об'єктам стежити і реагувати на події, які відбуваються в інших об'єктах. Тобто зміна стану одного об'єкту викликає зміну стану іншого об'єкту(об'єктів). (коли потрібно реалізувати механізм сповіщення про зміни в одному об'єкті і автоматично вносити зміни в інші об'єкти, які підписані(залежні) на перший)

class User {
  constructor(email) {
    this.email = email
  }
  sendEmail(message) {
    console.log(`Sending email to ${this.email}: ${message}`)
  }
}
class Video {
  constructor(name) {
    this.name = name
  }
}
// є певний користувач який підписаний на певний канал, і як виходить нове відео на цьому каналі, то користувач отримує повідомлення на пошту
class Channel {
  constructor(name) {
    this.name = name
    this.subscribers = new Set() // множина користувачів, які підписані на канал, унікальних
  }
  subscribe(user) {
    // підписатися на канал
    this.subscribers.add(user)
  }
  unsubscribe(user) {
    // відписатися від каналу
    this.subscribers.delete(user)
  }
  createVideo(name) {
    // створити відео
    const video = new Video(name)
    this.sendNotify(video)
  }
  sendNotify(video) {
    // сповіщення про нове відео
    this.subscribers.forEach((user) => {
      user.sendEmail(`New video on ${this.name}: ${video.name}`)
    })
  }
}

const channel = new Channel('My channel')

const user1 = new User('mail@mail.com')
const user2 = new User('sony@mail.com')
const user3 = new User('danny@mail.com')

channel.subscribe(user1)
channel.subscribe(user2)
channel.subscribe(user3)

channel.createVideo('JS patterns')
// Sending email to mail@mail: New video on My channel: JS patterns
// Sending email to sony@mail: New video on My channel: JS patterns
// Sending email to danny@mail: New video on My channel: JS patterns

// ---------------------------------------------------------------------------------------------
// Декоратор (Decorator) - це структурний паттерн, який дозволяє динамічно додавати об'єктам нову функціональність, обгортаючи їх в корисні «обгортки». При цьому не змінюючи поведінку класів, функціональність. (коли потрібно додати функціональність до об'єкта, але не можна змінювати його код)

class Coffee {
  name = 'Coffee'
  cost = 10

  cook() {
    return `${this.name} is ready!`
    // тут логіка приготування кави
  }
}
// хочемо додати можливість робити каву з молоком
class MilkDecorator {
  constructor(coffee, amount) {
    // coffee - це об'єкт Coffee, amount - кількість молока
    this.coffee = coffee
    this.amount = amount
  }
  get name() {
    return `${this.coffee.name} with ${this.amount} ml of milk`
  }
  get cost() {
    const milkCost = 0.05
    return this.coffee.cost + milkCost * this.amount // ціна кави з молоком
  }
  cook() {
    return `${this.name} is ready!`
    // логіка приготування кави з молоком
  }
}
// Створюємо звичайну каву
let coffee = new Coffee()
console.log(coffee.name) // Coffee
console.log(coffee.cost) // 10
console.log(coffee.cook()) // Coffee is ready!

// створюємо каву з молоком
let latteCoffee = new MilkDecorator(coffee, 300) // 300 - це кількість молока(мл)
console.log(latteCoffee.name) // Coffee with 300 ml of milk
console.log(latteCoffee.cost) // 25
console.log(latteCoffee.cook()) // Coffee with 300 ml of milk is ready!
// ---------------------------------------------------------------------------------------------
// Мементо (Memento) - це поведінковий паттерн, який дозволяє зберігати і відновлювати минулий стан об'єкта, не розкриваючи деталей його реалізації. (коли потрібно зберігати історію змін об'єкта і відновлювати його стан до певного моменту)

// наприклад клас який відповідає за роботу з текстом на нашому сайті
class TextEditor {
  #text = '' // текст який ми редагуємо

  set text(text) {
    // метод для встановлення тексту
    this.#text = text
    this.#save()
  }
  get text() {
    // метод для отримання тексту
    return this.#text
  }
  #save() {
    // метод для збереження тексту
    Snapshot.create(this.text)
  }
  restore() {
    // метод для відновлення тексту
    this.#text = Snapshot.restore().text
  }
}

class Snapshot {
  constructor(text) {
    this.text = text
  }

  static #snapshots = [] // для збереження історії змін тексту

  static create(text) {
    // метод для збереження тексту
    this.#snapshots.push(new Snapshot(text))
  }

  static restore() {
    this.#snapshots.pop() // видаляємо останній елемент з масиву
    return this.#snapshots[this.#snapshots.length - 1] // повертаємо останній елемент масиву
  }
}

const editor = new TextEditor()
editor.text = 'Hello world!'
editor.text = 'Hello world! My name is John'
editor.text = 'Hello world! My name is John. I am 20 years old'
console.log(editor.text) // Hello world! My name is John. I am 20 years old

editor.restore()
console.log(editor.text) // Hello world! My name is John

editor.restore()
console.log(editor.text) // Hello world!
// ---------------------------------------------------------------------------------------------
// Ланцюжок відповідальності (Chain of responsibility) - це поведінковий паттерн, який дозволяє передавати запити послідовно по ланцюжку обробників, не прив'язуючи відправника запиту до його отримувача. (коли потрібно реалізувати механізм обробки запитів з можливістю автоматичного перехоплення та передачі запиту на наступний обробник)

class AuthHandler {
  setNext(handler) {
    // метод для встановлення наступного обробника
    this.nextHandler = handler
    return handler
  }

  login(email, password) {
    // метод для авторизації
    if (this.nextHandler) {
      return this.nextHandler.login(email, password)
    } else {
      return false
    }
  }
}

class TwoFactorAuthHandler extends AuthHandler {
  login(email, password) {
    if (
      email === 'admin@mail' &&
      password === '123456' &&
      this.isValidTwoFactorCode() // перевіряємо чи вірний двофакторний код
    ) {
      console.log('Login success')
      return true
    } else {
      console.log('Login failed')
      return super.login(email, password)
    }
  }

  isValidTwoFactorCode() {
    // метод для перевірки двофакторного коду
    return true
  }
}

class RoleHandler extends AuthHandler {
  login(email, password) {
    if (email !== 'admin@mail') {
      console.log('Login as guest')
      return true
    } else {
      console.log('Login failed')
      return super.login(email, password)
    }
  }
}

class CredentialsHandler extends AuthHandler {
  login(email, password) {
    if (email === 'admin@mail' && password === '123456') {
      console.log('Login allowed with email and password')
      return true
    } else {
      console.log('Login failed')
      return super.login(email, password)
    }
  }
}

let handler = new TwoFactorAuthHandler()
handler.setNext(
  new AuthHandler({
    // передаємо наступний обробник
    login: (email, password) => {
      // метод для авторизації
      const res =
        email === 'admin@mail' && password === '123456'
          ? 'Login success'
          : 'Login failed' // перевіряємо чи вірні логін та пароль
      console.log(res)
      return res // повертаємо результат
    },
  }),
)

handler.login('admin@mail', '123456') // Login success
handler.login('admin@email', '1234567') // Login failed

handler.setNext(new RoleHandler()).login('user@mail', '123456') // Login as guest
handler.setNext(new CredentialsHandler()).login('admin@mail', '123456') // Login allowed with email and password

// Також можна створити ланцюжок за допомогою будівельника (Builder)
class AuthHandlerBuilder {
  constructor() {
    this.firstHandler = null // для збереження посилання на перший обробник
    this.lastHandler = null // для збереження посилання на останній обробник
  }
  add(handler) {
    // метод для додавання обробника (рекурсія)
    if (!this.firstHandler) {
      // якщо перший обробник не існує
      this.firstHandler = handler // встановлюємо перший обробник
      this.lastHandler = handler // встановлюємо останній обробник
    } else {
      // якщо перший обробник існує
      this.lastHandler.setNext(handler) // встановлюємо наступний обробник
      this.lastHandler = handler // сюди записується наш наступний обробник
    }
    return this // повертаємо посилання на поточний об'єкт
  }
  create() {
    // метод для створення ланцюжка
    return this.firstHandler
  }
}

const handlerBuilder = new AuthHandlerBuilder()
const handler2 = handlerBuilder
  .add(new TwoFactorAuthHandler())
  .add(new RoleHandler())
  .add(new CredentialsHandler())
  .create()
handler2.login('admin@mail', '123456') // Login success, Login allowed with email and password
handler2.login('user@mail', '123456') // Login failed, Login as guest

// ---------------------------------------------------------------------------------------------
// Міст (Bridge) - це структурний паттерн, який розбиває один або кілька класів на дві окремі ієрархії - абстракцію та реалізацію, які можна розвивати незалежно одна від одної. (коли потрібно розділити монолітний клас, який має декілька різних варіантів реалізації)

class User {
  constructor(name, messenger) {
    this.name = name
    this.messenger = messenger
  }
  // тут також можна додати фабрику щоб вирішити який месенджер використовувати
  setMessage(message) {
    const formattedMessage = this.formatMessage(message)
    this.messenger.sendMessage(formattedMessage)
  }
  formatMessage(message) {
    return `${this.name}: ${message}`
  }
}

// і наприклад різні варіанти відправки повідомлення
class SMSMessenger {
  static sendMessage(message) {
    console.log(`Send SMS: ${message}`)
  }
}

class EmailMessenger {
  static sendMessage(message) {
    console.log(`Send Email: ${message}`)
  }
}
// з'єднуємо їх за допомогою моста з класом User
const userJohn = new User('John', SMSMessenger)
userJohn.setMessage('Hello') // Send SMS: John: Hello
const userVasyl = new User('Vasyl', EmailMessenger)
userVasyl.setMessage('Hello') // Send Email: Vasyl: Hello

// Виходить що Юзер це абстракція, а месенджер це реалізація, і ми можемо розширювати їх незалежно один від одного
