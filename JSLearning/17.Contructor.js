// Функція конструктор - це функція, яка викликається за допомогою оператора new. Вона використовується для створення нових об'єктів і спрощує створення багатьох об'єктів з однаковими властивостями.

// Наприклад в нас є певний прототип юзера
const User = {
  login: null,
  email: null,
  password: null,
  role: null,
}
// і в нас є дані з реєстрації
let registrationData = {
  login: 'admin',
  email: 'example@email.com',
  password: '123456',
  role: 'admin',
}
// створюємо нового юзера на основі прототипу і даних з реєстрації
const user = Object.create(User, {
  verify: {
    value(password) {
      return this.password === password
    },
  },
})
user.login = registrationData.login
user.email = registrationData.email
user.password = registrationData.password
user.role = registrationData.role
console.log(user.verify('123456')) // true
// але ми випадково можемо не передати дані у всі властивості, або передати їх у неправильному порядку, тоді наш юзер буде містити не повну інформацію
// Уявимо що десь в іншому місці нам знову треба створювати юзера, тоді ми знову повторимо цей код
// тому краще створимо функцію конструктор, яка буде приймати дані з реєстрації і створювати нового юзера
function UserConstructor(creationData) {
  return Object.create(User, {
    // повертаємо новий об'єкт на основі прототипу User
    login: { value: creationData.login }, // властивості об'єкта будуть мати значення з creationData
    email: { value: creationData.email }, // value: значення властивості
    password: { value: creationData.password },
    role: { value: creationData.role ? creationData.role : 'user' }, // якщо в creationData.role немає значення, то властивість role буде мати значення 'user'
    verify: {
      // додаємо метод verify
      value(password) {
        return this.password === password // метод повертає true, якщо пароль вірний і false якщо ні
      },
    },
  })
}
// тепер ми можемо створювати нових юзерів за допомогою функції конструктор
const admin = new UserConstructor(registrationData)
// тобто створюється новий юзер на основі прототипу User, і властивості об'єкта будуть мати значення з registrationData, куди ми передаємо дані з реєстрації (форми)
console.log(admin) // { login: 'admin', email: '...', password: '...', role: 'admin' }

// Зараз ми працювали зі звичайною функцією конструктором. Але зараз об'єкти які створюються на основі такого конструктора завжди створюються з використанням ключового слова new. Також функція конструктор пишеться з великої літери, щоб відрізняти її від звичайних функцій. Написання з великої літери може нам підказати, що ця функція є конструктором (певною сутністю) і її потрібно викликати з new.

function CreateUser(data) {
  // сюди потрапляють дані з реєстрації
  if (new.target) {
    // якщо функція викликається з new, то в new.target буде зберігатися функція конструктора, яка викликається
    const {
      login = null,
      email = null,
      password = null,
      role = role ? 'Admin' : 'User',
    } = data
    // тут ми за допомоги деструктуризації присвоюємо значення властивостям об'єкта, якщо вони є в data, а якщо немає, то властивості будуть мати значення null
    const object = Object.assign(this, {
      login,
      email,
      password,
      role,
    }) // створюємо об'єкт з властивостями, які ми отримали з data
    // const verify = function (password) {
    //   // створюємо метод verify для перевірки пароля
    //   // але краще цей метод винести в окрему функцію, щоб він не повторювався при створенні кожного нового юзера
    //   return this.password === password
    // }
    if (object.role === 'Admin') {
      object.verify = function (password) {
        return this.password === password && this.role === 'Admin'
      }
    } else {
      object.verify = function (password) {
        return this.password === password
      }
    }
    // також тут можна додавати багато інших перевірок
    return object // повертаємо об'єкт
  } else {
    // якщо функція не викликається з new, то повертаємо новий об'єкт на основі прототипу CreateUser
    return new CreateUser(data)
  }
}

const user1 = new CreateUser(registrationData) // створюємо нового юзера на основі функції конструктора за допомогою оператора new
console.log(user1) // CreateUser { login: 'admin', email: '...', password: '...', role: 'admin', verify: [Function (anonymous)] }

// Якщо ми забудемо викликати функцію конструктор з оператором new, то вона поверне нам undefined
// Тому є перевірка на наявність оператора new (прописано в нашому об'єкті CreateUser)

console.log(user1.__proto__ === CreateUser.prototype) // true
console.log(Object.getPrototypeOf(user1) === CreateUser.prototype) // true
console.log(user1.isPrototypeOf(CreateUser)) // false

// і вже з нашим модифікованим методом (функцією) ми можемо створювати нових юзерів з використанням new або без нього

registrationData = {
  login: 'Vasyl',
  email: 'vasyl@email.com',
  password: 'dasjgjeqj',
  role: 'User',
}
const user2 = CreateUser(registrationData) // створюємо нового юзера на основі функції конструктора без оператора new
console.log(user2) // CreateUser { login: 'Vasyl', email: '...', password: '...', role: 'User', verify: [Function (anonymous)] }

// ==========================================================================================================
// Перезапис існуючих методів (поліморфізм)
Object.toString = function () {
  // перезаписуємо метод toString для об'єкта object
  return `This user: ${this.login}`
}
user1.toString() // This user: admin
user2.toString() // This user: Vasyl
// ==========================================================================================================
// Кількість параметрів функції
console.log(CreateUser.length) // 1
// ім'я функції
console.log(CreateUser.name) // CreateUser, але це якщо наш конструктор покладений в змінну
// ----------------------------------------------------------------------------------------------------------
console.log(user.verify('123456')) // true
let verifyUser = user.verify
console.log(verifyUser('123456')) // false
// це є певна проблематика JavaScript, яка виникає при використанні this в методах об'єктів. У даному випадку this вказує на об'єкт user, але якщо ми використаємо метод verify в іншому контексті, то this буде вказувати на контекст, в якому він викликається. І тому ми отримаємо помилку, оскільки в контексті verifyUser немає властивості password. Це можна вирішити за допомогою bind, call, apply

// apply(thisArg, argsArray) - викликає функцію з вказаним значенням this і аргументами, які передаються у вигляді масиву
console.log(verifyUser.apply(user, ['123456'])) // true

// call(thisArg, arg1, arg2, ...) - викликає функцію з вказаним значенням this і аргументами, які передаються у вигляді списку
console.log(verifyUser.call(user, '123456')) // true

// bind(thisArg, arg1, arg2, ...) - створює нову функцію, яка, при виклику, має вказане значення this і аргументи, які передаються у вигляді списку
console.log(verifyUser.bind(user, '123456')()) // true
// так як ми хочемо створити нову функцію то краще використовувати bind, а не call або apply
