// Композит (Composite) - структурний паттерн, який дозволяє об'єднувати об'єкти в деревоподібні структури для подальшої роботи з ними так, ніби це один об'єкт.

const { text } = require('express')

class Composite {
  comments = []
  addComment(comment) {
    this.comments.push(comment)
  }
  removeComment(comment) {
    this.comments = this.comments.filter((c) => c !== comment)
  }
}

class Comment extends Composite {
  constructor(text) {
    super()
    this.text = text
  }
  display() {
    console.log(`- Comment: ${this.text}`)
    for (const comment of this.comments) {
      comment.display()
    }
  }
}

class Video extends Composite {
  constructor(title) {
    super()
    this.title = title
  }

  display() {
    console.log(`Video: ${this.title}`)
    for (const comment of this.comments) {
      comment.display()
    }
  }
}

const myVideo = new Video('My video')
myVideo.addComment(new Comment('Good video'))
myVideo.addComment(new Comment('Bad video'))
myVideo.display()
myVideo.removeComment(myVideo.comments[0])
myVideo.display()
myVideo.comments[0].addComment(new Comment('Answer: Good comment'))
myVideo.display()
// ==========================================================================================================
// Муха (Flyweight) - структурний паттерн, який дозволяє вмістити більшу кількість об'єктів в доступну оперативну пам'ять, шляхом економного споживання пам'яті за рахунок винесення даних, спільних для багатьох об'єктів, в окремі об'єкти.

class Category {
  static #categories = {}

  constructor(name) {
    if (Category.#categories[name]) {
      // check if instance exists
      return Category.#categories[name] // return existing instance
    }
    this.name = name // create new instance
    Category.#categories[name] = this // save new instance
  }

  static createCategory(name) {
    if (!this.#categories[name]) {
      // check if instance exists
      this.#categories[name] = new Category(name) // create new instance
    }
    return this.#categories[name] // return existing instance
  }
}

class Product {
  constructor(name, category) {
    this.name = name
    this.category = category
  }

  display() {
    console.log(`Product: ${this.name}, Category: ${this.category.name}`)
  }
}

const electronics = Category.createCategory('Electronics')
const computers = Category.createCategory('Computers')
const phones = Category.createCategory('Phones')
const phones2 = Category.createCategory('Phones')

console.log(electronics === computers) // false
console.log(phones === phones2) // true - phones2 is the same instance as phones

const myPhone = new Product('iPhone', phones) // додаємо новий продукт в категорію phones
const myPhone2 = new Product('Samsung', phones)
const myPhone3 = new Product('Nokia', phones)
const myPhone4 = new Product('Nokia', phones)

myPhone.display() // Product: iPhone, Category: Phones
myPhone2.display() // Product: Samsung, Category: Phones
myPhone3.display() // Product: Nokia, Category: Phones
myPhone4.display() // Product: Nokia, Category: Phones

console.log(myPhone.category === myPhone2.category) // true - тому що phones - це один і той самий екземпляр класу Category

const productsList = []
productsList.push(myPhone, myPhone2, myPhone3, myPhone4)
console.log(productsList) // [Product, Product, Product, Product] - на виході ми отримали масив з 4-х екземплярів класу Product (об'єктів)

console.log(productsList.filter((p) => p.category === phones)) // фільтруємо масив по категорії phones

productsList.push(new Product('MacBook', computers))
productsList.push(new Product('MacBook Pro', computers))
productsList.push(new Product('MacBook Air', computers))

console.log(productsList.filter((p) => p.category === computers)) // фільтруємо масив по категорії computers

console.log(productsList)
console.log('=============================')
// ==========================================================================================================
// Шаблонний метод (Template Method)- поведінковий паттерн, який визначає загальну схему алгоритму, перекладаючи деякі кроки цього алгоритму на підкласи. Шаблонний метод дозволяє підкласам перевизначати певні кроки алгоритму, не змінюючи його загальної структури. Він використовується коли потрібно визначити загальну структуру алгоритму, але дозволяє деяким підкласам перевизначити деякі кроки алгоритму або додавати нові.

class CoffeeMachine {
  // template method - або метод-шаблон
  prepareCoffee() {
    this.boilWater()
    this.grindCoffeeBeans()
    this.brewCoffee()
    this.pourInCup()
    this.addIngredients()
    this.serviceCoffee()
  }

  boilWater() {
    console.log('Boiling water')
  }

  grindCoffeeBeans() {
    console.log('Grinding coffee beans')
  }

  brewCoffee() {
    console.log('Brewing coffee...')
  }

  pourInCup() {
    console.log('Pouring in cup')
  }

  addIngredients() {
    // abstract method
  }

  serviceCoffee() {
    console.log('Serving coffee')
  }
}

class CappuccinoMachine extends CoffeeMachine {
  addIngredients() {
    console.log('Adding milk to make Cappuccino')
    // перевизначаємо метод addIngredients - тобто даємо йому нову реалізацію, реалізацію в підкласі від базового класу
  }
}

class LatteMachine extends CoffeeMachine {
  addIngredients() {
    console.log('Adding milk to make Latte')
  }
}

const myCappuccinoMachine = new CappuccinoMachine()
myCappuccinoMachine.prepareCoffee()
console.log('-----------------------------')
const myLatteMachine = new LatteMachine()
myLatteMachine.prepareCoffee()
console.log('=====================================')
// ==========================================================================================================
// Відвідувач (Visitor) - поведінковий паттерн, який дозволяє додавати нові функціональні можливості до об'єктів без їх зміни. Відвідувач - це об'єкт, який виконує операції над об'єктами інших класів. Він дозволяє визначити нову операцію без зміни класів об'єктів, над якими він працює. Він використовується коли потрібно виконати деякі дії над об'єктами різних класів, але не хочеться змінювати код цих класів.

class TextFile {
  constructor(name, content) {
    this.name = name
    this.content = content
  }
}

class ImageFile {
  constructor(name, resolution) {
    this.name = name
    this.resolution = resolution
  }
}

class VideoFile {
  constructor(name, duration) {
    this.name = name
    this.duration = duration
  }
}
// тобто в нас є 3 різні класи, але з ними треба по різному працювати...
class TextEditor {
  files = []

  addFile(file) {
    this.files.push(file)
  }

  readTextFiles(file) {
    console.log(`Text file ${file.name}, content: ${file.content}`)
  }

  readImageFiles(file) {
    console.log(`Image file ${file.name}, resolution: ${file.resolution}`)
  }

  readVideoFiles(file) {
    console.log(`Video file ${file.name}, duration: ${file.duration}`)
  }

  readFiles() {
    // Перевіряємо тип файлу і виконуємо певні дії
    for (const file of this.files) {
      if (file instanceof TextFile) {
        this.readTextFiles(file)
      } else if (file instanceof ImageFile) {
        this.readImageFiles(file)
      } else if (file instanceof VideoFile) {
        this.readVideoFiles(file)
      }
    }
  }
  // це є суть паттерна відвідувач - він дозволяє визначити нову операцію без зміни класів об'єктів, над якими він працює
}

const textEditor = new TextEditor() // створюємо екземпляр класу TextEditor

const textFile = new TextFile('text.txt', 'Hello world!') // створюємо екземпляр класу TextFile
const imageFile = new ImageFile('image.png', 1024)
const videoFile = new VideoFile('video.mp4', 60)

textEditor.addFile(textFile) // додаємо в масив екземпляр класу TextFile
textEditor.addFile(imageFile)
textEditor.addFile(videoFile)

console.log(textEditor.files) // виводимо масив з екземплярами класів

// тепер реалізуємо вивід інформації про кожен файл в залежності від його типу додавши окремий метод в наш клас TextEditor

textEditor.readFiles()
console.log('=====================================')
// ==========================================================================================================
// Адаптер (Adapter) - структурний паттерн, який дозволяє об'єктам з різними інтерфейсами, також несумісними, працювати разом. Він використовується коли потрібно використовувати сторонні бібліотеки з різними інтерфейсами, або використовувати старий код з новим.

class ElectronicPaymentSystem {
  makePayment(amount) {
    const convertedAmount = this.convertAmount(amount)
    console.log(
      `Making electronic payment in the amount of ${convertedAmount} UAH`,
    )
  }

  convertAmount(amount) {
    // тут логіка конвертації суми платежу
    return amount * 1.2 // для прикладу просто множимо на 1.2
  }
}

const electronicPaymentSystem = new ElectronicPaymentSystem()
electronicPaymentSystem.makePayment(100)
console.log('-'.repeat(50))

// а тепер додамо іншу платіжну систему, яка працює з іншою валютою

class BankPaymentSystem {
  submit(amount) {
    console.log(`Making bank payment in the amount of ${amount} USD`)
  }
  // і тут вже зовсім інша логіка конвертації
}

// тепер нам потрібно зробити так, щоб обидві платіжні системи працювали однаково

class PaymentAdapter {
  constructor(paymentSystem) {
    this.paymentSystem = paymentSystem
  }

  makePayment(amount) {
    const convertedAmount = this.convertAmount(amount)
    this.paymentSystem.submit(convertedAmount)
  }

  convertAmount(amount) {
    return amount * 0.8
  }
}

class Order {
  constructor(amount) {
    this.amount = amount

    if (this.amount <= 100) {
      this.paymentSystem = new PaymentAdapter(new BankPaymentSystem())
    } else {
      this.paymentSystem = new ElectronicPaymentSystem()
    }
  }

  makePayment() {
    return this.paymentSystem.makePayment(this.amount)
  }
}

const order = new Order(100)
order.makePayment() // Making electronic payment in the amount of 80 UAH
console.log('-'.repeat(50))
const bigOrder = new Order(1000)
bigOrder.makePayment() // Making bank payment in the amount of 1200 USD

console.log('=====================================')
// ==========================================================================================================
// Стратегія (Strategy) - поведінковий паттерн, який визначає сімейство алгоритмів, інкапсулює кожен з них і робить їх взаємозамінними. Він дозволяє змінювати алгоритм в залежності від ситуації. Використовується тоді коли в процесі роботи з'являється необхідність змінити алгоритм роботи.

class ShoppingCart {
  constructor(discountStrategy) {
    this.items = []
    this.discountStrategy = discountStrategy
  }

  addItem(item) {
    this.items.push(item)
  }

  calculateTotalPrice() {
    const price = this.items.reduce((total, item) => total + item.price, 0)
    return this.discountStrategy.calculate(price)
  }

  getPrice() {
    console.log(
      `Total price of items in the cart is ${this.calculateTotalPrice()}`,
    )
  }
}

// реалізовуємо різні стратегії знижок
class DiscountStrategy {
  calculate(price) {
    return price
  }
}
class RegularDiscountStrategy extends DiscountStrategy {
  calculate(price) {
    return price * 0.9 // 10% знижка
  }
}
class PremiumDiscountStrategy extends DiscountStrategy {
  calculate(price) {
    return price * 0.8 // 20% знижка
  }
}
class NoDiscountStrategy extends DiscountStrategy {
  calculate(price) {
    return price // без знижки
  }
}
class BlackFridayDiscountStrategy extends DiscountStrategy {
  calculate(price) {
    return price * 0.5 // 50% знижка
  }
}
class NewCustomerDiscountStrategy extends DiscountStrategy {
  calculate(price) {
    return price * 0.95 // 5% знижка
  }
}

const cart = new ShoppingCart(new RegularDiscountStrategy())

cart.addItem({ name: 'Laptop', price: 20000 })
cart.addItem({ name: 'Mouse', price: 150 })
cart.getPrice() // Total price of items in the cart is 18135
console.log('=====================================')
// ==========================================================================================================
// Ітератор (Iterator) - поведінковий паттерн, який дає можливість послідовно обходити елементи складових об'єктів, не розкриваючи їх внутрішньої структури. Використовується тоді коли потрібно обходити об'єкти зі складною структурою, але не хочеться розкривати їхню структуру. Або коли хочеться отримати доступ до елементів колекції в однаковому порядку, без залежності від типу або структури колекції.

class User {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }
}

class UserGroup {
  users = []

  addUser(user) {
    this.users.push(user)
  }

  [Symbol.iterator]() {
    // створюємо ітератор
    let currentIndex = 0 // початковий індекс
    const users = this.users // масив користувачів

    return {
      // повертаємо об'єкт з методом next
      next() {
        if (currentIndex < users.length) {
          // якщо індекс менший за довжину масиву
          const result = { value: users[currentIndex], done: false } // створюємо об'єкт зі значенням і done: false
          currentIndex++ // збільшуємо індекс
          return result // повертаємо об'єкт
        } else {
          // якщо індекс більший за довжину масиву
          return { value: undefined, done: true } // повертаємо об'єкт зі значенням undefined і done: true
        }
      },
    }
  }
}

const g1 = new UserGroup()
g1.addUser(new User('Vasyl', 'vasyl@email.com', '123'))
g1.addUser(new User('Petro', 'petro@email.com', '456'))
g1.addUser(new User('Ivan', 'ivan@email.com', '789'))

const g2 = new UserGroup()
g2.addUser(new User('Oleh', 'oleh@email.com', '123'))

console.log(g1.users.map((user) => user.name).join(', ')) // Vasyl, Petro, Ivan - виводимо імена користувачів, але це можна реалізувати всередині класу як метод

console.log(g1.users[Symbol.iterator]().next()) // { value: User { name: 'Vasyl', email: '...', password: '...' }, done: false } - виводимо першого користувача
console.log('-'.repeat(20))

// все це не добре, бо можна випадково надати доступ до паролів, тому реалізовуємо клас ітератора
class UserIterator {
  constructor(userGroup) {
    this.users = userGroup.map((user) => user.name)
    this.currentIndex = 0
  }

  hasNext() {
    // метод який перевіряє чи є наступний елемент
    return this.currentIndex < this.users.length
  }

  // метод який повертає наступний елемент
  next() {
    if (this.hasNext()) {
      const result = this.users[this.currentIndex]
      this.currentIndex++
      return result
    } else {
      return null
    }
  }
}

const iterator = new UserIterator(g1.users)
while (iterator.hasNext()) {
  console.log(iterator.next())
} // Vasyl, Petro, Ivan - виводимо імена користувачів
console.log('=====================================')
// ==========================================================================================================
// Медіатор (Mediator) - поведінковий паттерн, який дозволяє зменшити зв'язаність між класами, виникаючи через прямі зв'язки між ними. Він інкапсулює взаємодію між об'єктами і дозволяє їм взаємодіяти між собою без посилань один на одного.

class User2 {
  constructor(name) {
    this.name = name
  }

  send(message, to) {
    ChatRoom.send(this, message, to)
  }

  receive(message, from) {
    console.log(`${this.name} received message from ${from.name}: ${message}`)
  }
}

class ChatRoom {
  static users = {}

  static register(user) {
    this.users[user.name] = user
    user.chatroom = this
  }

  static send(sender, message, to) {
    if (to) {
      // приватне повідомлення
      to.receive(message, sender)
    } else {
      // публічне повідомлення
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== sender) {
          this.users[key].receive(message, sender)
        }
      })
    }
  }
}

const chat = new ChatRoom()

const user1 = new User2('Vasyl')
const user2 = new User2('Petro')

ChatRoom.register(user1)
ChatRoom.register(user2)

user1.send('Hello!', user2) // Petro received message from Vasyl: Hello!
user2.send('Hello hello!', user1) // Vasyl received message from Petro: Hello hello!
user1.send('Hello everyone!') // Petro received message from Vasyl: Hello everyone!
