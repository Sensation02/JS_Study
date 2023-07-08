// Клас - це шаблон, за яким створюються об'єкти. Тобто це конструкція для функції створення об'єктів. Це полегшує роботу в межах ООП. На даний час (2023) це актуальний спосіб створення об'єктів.

// Поля класу - це властивості (методи), які визначаються всередині класу.

const User1 = {
  login: null,
  password: null,
  role: null,
  age: null,
}
// function Animal() {
//   this.test = 'test'
// }
// // і наприклад ми хочемо успадкувати наш "тест" від Animal
// function CreateUser({ login, password, role, age }) {
//   Animal.call(this) // і ще можна додати сюди ще аргументи

//   this.login = login
//   this.password = password
//   this.role = role
//   this.age = age
// }

// new CreateUser().test // test
// це один із варіантів успадкування
// все це не зручно. Для цього і створили класи

// ------------------------------------------------------------------------------------------
// Синтаксис класу
class User {
  constructor(login, password) {
    this.login = login
    this.password = password
  }
  login = null
  password = null
  role = null
  age = null
  isAdmin = () => {
    return this.role === 'admin'
    this.#createUserAdmin()
  }
  static generatePassword() {
    return Math.random().toString(36).slice(-8)
  }

  #id = Math.floor(Math.random()) + 1
  #createUserAdmin = (login) => {
    const password = User.generatePassword()
    return new User({ login, password, role: 'admin' })
  }

  #firstName = null
  #lastName = null
  get name() {
    return `${this.#firstName} ${this.#lastName}`
  }
  set name(value) {
    const [firstName, lastName] = value.split(' ')
    this.#firstName = firstName
    this.#lastName = lastName
  }
}
let user = new User()
function verifyAdmin(fn) {
  let result = fn()
  if (!result) {
    throw new Error('You are not admin')
  }
  return true
}
// verifyAdmin(user.isAdmin) // TypeError: Cannot read properties of undefined (reading 'role')
// тому краще писати методи в класі (перетворили на стрілочну функцію) і в такому випадку все буде працювати

// ------------------------------------------------------------------------------------------
// Статичні поля і методи
// Їх можна використовувати без створення об'єкта класу. Це може бути корисно, якщо ми хочемо створити допоміжні функції для класу, які не повинні бути пов'язані з конкретним об'єктом класу.
// для цього перед іменем поля або методу ставимо static

User.generatePassword() // "3drf4t5g"

// ------------------------------------------------------------------------------------------
// Приватні поля і методи
// Це поля і методи, які не доступні ззовні класу. Їх можна використовувати лише всередині класу. Для цього перед іменем поля або методу ставимо #. Це може бути корисно, якщо ми хочемо зберегти конфіденційну інформацію, яка не повинна бути доступна ззовні класу.

// console.log(user.#id) // SyntaxError: Private field '#id' must be declared in an enclosing class

// ------------------------------------------------------------------------------------------
// Getter і Setter
// Це спеціальні методи, які дозволяють встановлювати і отримувати значення властивостей об'єкта. Це може бути корисно, якщо ми хочемо виконати додаткову логіку при встановленні або отриманні значення властивості об'єкта. Для цього перед іменем методу ставимо get або set. Також вони можуть працювати із приватними полями.

user.name = 'John Doe'
console.log(user.name) // "John Doe"

// ------------------------------------------------------------------------------------------
// Конструктор
// Це функція, яка викликається при створенні нового об'єкта. Це може бути корисно, якщо ми хочемо виконати додаткову логіку при створенні нового об'єкта. Для цього в класі створюємо метод constructor. Якщо в класі немає методу constructor, то він буде створений за замовчуванням. Якщо в класі є метод constructor, то він повинен бути один. Конструктор дозволяє створювати екземпляри класу одразу з деякими властивостями.

const Bazzil = new User('Bazzil', '12345678')
console.log(Bazzil) // User { login: "Bazzil", password: "12345678" }
Bazzil.name = 'Bazzil Kaminskyi'
console.log(Bazzil.name) // "Bazzil Kaminskyi"

// ------------------------------------------------------------------------------------------
// Наслідування
// Це механізм, який дозволяє створювати новий клас на основі іншого класу. Це може бути корисно, якщо ми хочемо успадкувати властивості і методи одного класу в інший клас. Для цього в класі створюємо метод constructor і викликаємо метод super. super() - викликає конструктор батьківського класу. При цьому в класі насліднику можна перевизначити методи батьківського класу. Також в класі насліднику можна використовувати статичні поля і методи батьківського класу. Наслідування відбувається за допомогою ключового слова extends.

class Admin extends User {
  // наслідуємо клас User
  constructor(login, password) {
    // створюємо метод constructor
    super(login, password) // викликаємо метод батьківського класу
    this.role = 'admin' // додаємо нове поле
  }
}

const admin = new Admin('admin', 'admin') // створюємо новий об'єкт класу Admin на основі класу User
console.log(admin) // Admin { login: "admin", password: "admin", role: "admin" }
console.log(admin.isAdmin()) // true

// ------------------------------------------------------------------------------------------
// Множинне наслідування
// Це механізм, який дозволяє створювати новий клас на основі декількох класів. Це може бути корисно, якщо ми хочемо успадкувати властивості і методи декількох класів в один клас. Робиться це за допомогою Object.assign().

class Person {
  constructor(name) {
    this.name = name
  }
}

class Info {
  constructor(age) {
    this.age = age
  }
}

class User extends Person {
  // наслідуємо клас Person
  constructor(name, age, login, password) {
    // створюємо метод constructor
    super(name) // викликаємо метод батьківського класу
    Object.assign(this, new Info(age)) // наслідуємо клас Info
    // таким чином ми успадковуємо властивості і методи класів Person і Info та можемо наслідувати ще інші класи
    this.login = login // додаємо нове поле
    this.password = password
  }
}
const user2 = new User('John Doe', 30, 'user', '12345678')
console.log(user2) // User { name: "John Doe", age: 30, login: "user", password: "12345678" }
// ------------------------------------------------------------------------------------------
// Перевірка прототипу
// Це механізм, який дозволяє перевірити, чи є об'єкт екземпляром класу. Це може бути корисно, якщо ми хочемо перевірити, чи є об'єкт екземпляром класу. Для цього використовується метод instanceof.

console.log(admin instanceof Admin) // true - admin є екземпляром класу Admin
console.log(admin instanceof User) // true - admin є екземпляром класу User, тому що клас Admin успадковує клас User
