// #region Перемінні
let num = 1; // тип перемінної який доступний тільки в межах видимості.
const NAME = `Bazzil`; // тип перемінної як і let який ніколи не зміниться, тому що константа, нові значення в таку перемінну не присвоїти.
var num1 = 2; // тип перемінної який такий же як і let, але він не обмежений зоною видимості; Такий тип перемінної зараз не використовується.

// АЛЕ джаваскріпт це динамічно-типізована мова, тому let може бути і string i boolean, number тощо
// також в джаваскріпт є null (нуль/0) та undefined (не об'явлено) які відрізняються один від одного
//#endregion

// #region Типи перемінних
// 1. примітивні:
//  - string
//  - number - цілі або з плавучою точкою
//  - boolean - true or false (логічний)
//  - null
//  - undefined
//  - symbol - з його допомоги створюються унікальні типи

// 2. ссилочний тип - object - такий об'єкт містить тільки посилання на об"єкт в пам'яті. Таких об'єктів може бути багато і вони можуть вказувати на один і ту ж ділянку пам'яті. При зміні даних в такому об'єкті, вони зміняться у всіх об'єктах.

const objectA = {
  a: 1,
  b: true,
};

const objectB = objectA;

objectB.a = 2;

console.log(objectA);
// output: 2 => тому що ми змінили дані на які посилаються два об'єкта, тобто в обох об'єктах вже цифра 2

// також до таких перемінних можна додавати нові властивості:
objectB.с = `string`;

console.log(objectA.с);
// output: bazzil => тому що все що доступно другому об'єкту доступно і першому
//#endregion

// #region Статична та динамічна типізація

// string str = `string`
// int number = 123
// number = `string` => Error присвоєння даних з одного типу в інший

let a = 1;
a = `string`;
a = true;
a = undefined;

// ще один приклад: (розкоментуй щоб побачити)
// function a() {
//   console.log(`hey there`);
// }

// a();

// a = 10;

// a(); // Error => тому що "а" це функція, а не перемінна, тому в "а" може бути присвоєна тільки функція
// тому треба користуватися константами, тому ще попереджує помилки з динамічною типізацією

// ще приклад:
// const a = () => {
//   console.log(`hey there`);
// };
// a();
// a = 10; // Error => тому що в константу не можна присвоювати інші дані
// a();
// тому даний запис функції кращий у випадку коли мова динамічна

//#endregion

// #region Об'єкти
// всі сутності в джаваскріпт це об'єкти
const myCity = {
  // - об'єкт
  city: `Chernivtsi`, // - властивості об'єкт, їх порядок немає значення
  popular: true,
  country: `Ukraine`,
};

console.log(myCity); // {city: `Chernivtsi`, popular: true, country: `Ukraine`}
// точковий запис:
console.log(myCity.city); // `Chernivtsi`
// тощо

// зміна властивостей використовуючи точковий запис:
myCity.city = `New York`;
console.log(myCity.city); // `New York`

delete myCity.city; // видалення властивості
myCity.city = "New York"; // додавання нової властивості
delete myCity.city;

// запис властивості "в лапках":
myCity[`cityName`] = "New York";
// так робиться якщо десь вже є перемінна з таким іменем (`cityName`)

// або
const cityPropertyName = "city";
myCity[cityPropertyName] = "New York";
console.log(myCity.city); // "New York"
// тобто ми спочатку створили перемінну, а потім через назву перемінної дали ім'я властивості в об'єкт тим чим присвоєно в ту перемінну ("city")

delete myCity.cityName;
delete myCity.country;
delete myCity.city;

// вкладені об'єкт + використання перемінної як властивості об'єкта:
const city = "New York";
const population = 100000;
const myNewCity = {
  city: city, // тут можна скоротити прибравши city після двокрапок
  population,
  info: {
    // вкладений об'єкт
    isPopular: true,
    country: "USA",
  },
};
// причому властивості які використовують перемінні, як правило, пишуться на початку в об'єкті
myNewCity.population = 20000;
console.log(myNewCity.population); // 20000
// такі перемінні (const) через об'єкт можна змінювати

console.log(myNewCity.info.country); // "USA"

// як видаляти:
delete myNewCity.info.country;
// як додавати:
const countryPropertyName = "country";
myNewCity.info[countryPropertyName] = "USA";

// #endregion

// #region Глобальні об'єкт

// window; // глобальний об'єкт в браузері
// global // глобальний об'єкт в Node.js

globalThis; // уніфікований глобальний об'єкт

// console це об'єкт глобальних об'єкті
globalThis.console.log("hello world");
console.log("hello world");

// #endregion

// #region Методи
// це об'єкт в об'єкті який приставляє собою функцію
const myNewCity2 = {
  city: "New York",
  CityGreeting() {
    console.log("Hello!");
  },
};

myNewCity2.CityGreeting(); // 'Hello!'

// методи vs властивості:
myNewCity2.city; // властивість
myNewCity2.CityGreeting(); // метод
// #endregion

// #region JSON (JavaScript Object Notation)
// це для обміну між сервером та сайтом у вигляді строки
// JSON:
// {
//   "name": "bazzil",
//   "id": 1,
//   "status": {
//     "complete": true
//   }
// }

// конвертація в JSON та навпаки:
const myNewCity2Stringified = JSON.stringify(myNewCity2); // конвертація javascript в JSON і присвоєння результату в перемінну
JSON.parse(myNewCity2Stringified); // конвертація JSON в javascript тої перемінної що зберегли

// #endregion

// #region Мутації в JavaScript
const b = 10;
let c = b; // копіювання значення з однієї перемінної в іншу (copy by value)
c = 30;

console.log(b); // 10
console.log(c); // 30
// ----------------------------------------------------------------
// А що якщо ми скопіюємо об'єкт? (ссилочний тип)
const person = {
  name: "John",
  age: 34,
};

const person2 = person; // копіювання посилання (copy by reference)

person2.age = 22;
person2.isAdult = true;

console.log(person.age); // 22
console.log(person.isAdult); // true
// тобто відбувається мутація одного об'єкта в інший
// ----------------------------------------------------------------
// як позбутися мутації?
// Варіант №1:
const person3 = Object.assign({}, person); // створення нового об'єкта

person3.age = 26;

console.log(person2.age); // 22
console.log(person3.age); // 26
// Але такий варіант не підходить якщо в об'єкт є вкладений об'єкт

// Варіант №2:
const person4 = { ...person }; // ... - це оператор розділення (spread), тобто відбувається розділення властивостей які потім збираються в новому об'єкті
person4.name = "Alice";

console.log(person.name); // 'John'
console.log(person4.name); // 'Alice'
// Але і в такому об'єкті зберігаються ті ж вкладені об'єкти

// Варіант №3:
const person5 = JSON.parse(JSON.stringify(person)); // тобто конвертуємо person в JSON, а потім той JSON назад в новий об"єкт person5

person5.name = "Bob";

console.log(person.name); // 'John'
console.log(person5.name); // 'Bob'
// І такий варіант кращий якщо є вкладені об'єкти
// #endregion

// #region Функції
// це блок кода який можна використовувати багаторазово (як метод в C#)
let number1 = 10;
let number2 = 20;
let number3 = number1 + number2;
console.log(number3); //30
// але рекомендується уникати повтору кода

number1 = 5;
number2 = 10;

function sum(number1, number2) {
  const result = number1 + number2;
  console.log(result);
}
sum(number1, number2); // 15

number1 = 8;
number2 = 5;
sum(number1, number2); // 13
// --------------------------------------------------------------------------------
// Функція може бути:
// - названа
// - присвоєна в перемінну
// - анонімною
// - може бути аргументом при виклику іншої функції
// - властивістю об'єкта (може бути методом)

// функція - це об'єкт і як в будь якого об'єкта в неї є властивості
function myFn(num1, num2) {
  let res;
  num1 += 1;
  res = num1 + num2;
  return res;
}
// якщо в кінці функції немає return вона буде повертати UNDEFINED

console.log(myFn(10, 10)); // 21

// передача значення за посиланням:
function increasePersonAge(person) {
  person.age += 1;
  return person;
}
increasePersonAge(person);
console.log(person.age); // 23
// тобто ми мутуємо об'єкт всередину функції (передали об'єкт за посиланням)
// це НЕ рекомендується робити!!!!!!!!
// А що робити якщо це треба зробити?

const personOne = {
  name: "Michael",
  age: 25,
};

function increasePersonAge(person) {
  const updatePerson = Object.assign({}, person); // новий об'єкт який ми змінюємо
  updatePerson.age += 1;
  return updatePerson;
}

const updatePersonOne = increasePersonAge(personOne);
console.log(personOne.age); // 25
console.log(updatePersonOne.age); // 26
// АЛЕ треба врахувати чи є вкладеність об'єктів в об'єкт
// #endregion

// #region Колбек функції
function anotherFunction() {
  // something - просто об'явили функцію
}
function fnWithCallback(callbackFunction) {
  callbackFunction; // callback function - викликаємо функцію в функції
}
fnWithCallback(anotherFunction); // викликаємо функцію і в якості параметра передаємо їй іншу функцію і без виклику цієї функції перша функція не викличеться, бо вона викликається тільки всередині іншої функції

// Приклад:
function printMyName() {
  console.log("Vasyl");
}
console.log("Start"); // такий собі старт щоб розуміти що далі відбудеться
setTimeout(printMyName, 2000); // наша функція викличеться через 2 секунди після попередньої
// даний виклик був callback function

// Основні моменти, правила в роботі з функціями:
// 1. Називати функції виходячи з того, що ця функція буде робити
// 2. Одна функція робить одну дію, одну задачу
// 3. Не рекомендується змінювати зовнішні, відносно функції, перемінні

// #endregion

// #region Оператори
// насправді це вбудована функція яка виконує певні дії (все як в С#)
// є Унарні, Бінарні... Операнди... Оператори...
// і відповідно є Постфіксний запис, Префіксний, Інфіксний

// все нагадуємо...
// 1. Арифметичні оператори:
// + - * /
// 2. Порівняння:
//  === !== <= >=
// 3. Логічні оператори:
// !(не) &&(і) ||(або)
// 4. Присвоєння:
// =

// &&:
// a && b && c && d
// якщо а false -> закінчення виразу,
//        true ? -> перевіряє b,
//        false ? -> закінчення виразу,
//        true ? -> c,
//        false ? -> закінчення виразу,
//        true ? -> d
//        false ? -> закінчення виразу,
//        true ? -> закінчення виразу (його виконання)
// || працює аналогічним способом, але true і false навпаки

// Трюк з "&&" (i)
let borya = 10;
borya && console.log("executed!");
// executed!
let borya2;
borya2 && console.log("executed!");
// не виконалося бо "borya2" false

// оператор "..."
const button = {
  width: 200,
  text: "Buy",
  color: "black",
};
const redButton = {
  ...button,
  color: "red",
}; // створюємо новий об'єкт і додаємо в нього нову властивість, або переписуємо стару.

// якщо властивість "color" вже є у батьківського об'єкта, то значення в новому об'єкті буде перезаписано. Тобто було color: black, а в новому - color: red.
// це створюється за допомоги оператора "...", так як представлено вище.

console.table(redButton); // вивід в табличному вигляді
// --------------------------------------------------------------------

const buttonInfo = {
  text: "Buy",
};
const buttonStyle = {
  color: "yellow",
  width: 200,
  height: 300,
};
// об'єднуємо два об'єкта в один за допомоги "...":
const button2 = {
  ...buttonInfo,
  ...buttonStyle,
  // так розподіляється порядок зображення властивостей, що перше - ті властивості і будуть першими
};
console.table(button2);

// все так як при мутації об'єктів, але ми беремо окремі властивості і додаємо нові або змінюємо старі
// #endregion

// #region Конкатенація строк
console.log("hello " + "world!");
// hello world!
const hello = "Hello";
const world = "World!";
let greeting = hello + " " + world;
// Hello World!

// Але якщо такий строк багато це все може бути складно писати, тому використовується...
// template string literal (шаблонні строки):
greeting = `${hello} ${world}`;
// Hello World!
// Але такий запис простіший, тут навіть не потрібно щоб перемінна була строкою

const vasylName = "Vasyl";
const myCityName = "Chernivtsi";

greeting = `Hello, my name is ${vasylName}. i'm living in ${myCityName}.`;
console.log(greeting);

// #endregion

// #region Функціональні вирази
// оголошена функція проти функціонального виразу (анонімного)
// оголошена функція:
function myFunction(a, b) {
  let res;
  a += 1;
  res = a + b;
  return res;
}
// функціональний вираз:
// function (a, b) {
//   let res
//   a += 1
//   res = a + b
//   return res
// };
// функціональний вираз добре передавати як колбек функцію
const myFunction = function (a, b) {
  let res;
  a += 1;
  res = a + b;
  return res;
};
myFunction(5, 3); // 9
// присвоєння перемінній функціонального виразу, тобто даємо їй ім'я
setTimeout(function () {
  console.log(`Відкладене повідомлення`);
}, 1000);
// `Відкладене повідомлення` буде виведено в консоль через 1000мс(1 сек), в такому випадку функції не потрібне ім'я
// #endregion

// #region Стрілочна функція
(a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};
// це аналог функціонального виразу, тільки без слова `function`
const myFunction = (a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};
myFunction(5, 3); // 9
// присвоюємо стрілочну функцію перемінній і таким чином даємо їй ім'я. Це робиться для того щоб не було можливості змінити дані в такій функції, через те що присвоєно в const перемінну. Використовуючи звичайну функцію з'являється можливість змінювати таку функцію
setTimeout(() => {
  console.log(`Відкладене повідомлення`);
}, 1000);
// знову ж таки колбек функція використовуючи стрілочну функцію

// скорочення стрілочних функцій:
(a) => {
  console.log(`hello world`);
};
// так можна писати коли у функції тільки один параметр, але все одно радять писати в дужках, тому що це робить таку функцію більш читабельною

(a, b) => a + b; // дуже схоже на лямбда вираз в C#, ні?))
// в такому випадку функція неявно повертає результат дії
// #endregion

// #region Значення функцій по-замовчуванням (по default)
function multByFactor(value, factor = 2) {
  return value * factor; // default factor value is 2
}
multByFactor(5); // 10
multByFactor(10, 3); // 30

// прості приклади:
// 1. стрілочна функція
let multByFactor2 = (value, factor = 2) => value * factor;
console.log(multByFactor2(2, 5));

// 2. функціональний вираз
multByFactor2 = function (value, factor = 1) {
  return (result = value * factor);
};
console.log(multByFactor2(3, 3));
// ------------------------------------------------------------------
// ще один приклад параметрів по-замовчуванням:
const newPost = (post, addedAt = Date()) => ({
  // Date() викликаємо поточну дату
  ...post,
  addedAt, // дата виклику функції (яка буде на момент виклику і вона виставлена по-замовчуванням)
});

// чому {()} ? Задача була виставлена повернути новий об'єкт newPost і додати в нього нову властивість addedAt, використовуючи в параметрах старий об'єкт post. Тобто додали нову дефолтну властивість в об'єкт який ми не хочемо мутувати, а це означає, що ми створили новий об'єкт. (так понятно??))). Тут відбулося неявне повернення об'єкта з функції.

/* 
новий_об'єкт (старий_об'єкт, нова_властивість = дефолтне_значення) => ({
  ..старий_об'єкт, 
  нова_властивість, <== тут або дефолтне значення, або задаємо самі 
}) 
*/

const firstPost = {
  id: 1,
  author: `Vasyl`,
};
const secondPost = {
  ...firstPost,
  id: 2,
  author: `Bazzil`,
};
newPost(firstPost); // тут відбувається присвоєння нового значення в addedAt тому що Date() не постійна (дата міняється)). + тут відбувається скорочений варіант створення властивостей об'єкта. Тобто в дужках (post, addedAt = Date()) addedAt як дефолтне значення, а вже в ({ addedAt }) як властивість об'єкта і відбувається ніби як перенос імені та власне значення з дефолтного у властивість. Створюючи новий об'єкт ми отримуємо можливість його зберігати в БД із тією датою коли він був створений.

console.table(newPost(firstPost));

// явне повернення об'єкта:
const newPost2 = (post, addedAt = Date()) =>
  Object.assign({}, post, { addedAt }); // явно об'являємо створення нового об'єкта
// ({} - новий об'єкт, post - старий об`єкт, {addedAt} - нова властивість нового об'єкта)
// {addedAt} - тут може задаватися нове дефолтне значення
setTimeout(() => {
  console.table(newPost2(secondPost));
}, 2000);

// #endregion

// #region Обробка помилок
const fnWithError = () => {
  throw new Error("Something went wrong"); // генеруємо помилку в JS
};
fnWithError(); // <== в момент виклику функції зупиниться виконання коду
// out: Uncaught Error: Something went wrong
console.log("Continue..."); // це ми вже не побачимо через помилку вище

// як з цим боротися?
try {
  // виконуємо блок кода <== сюди ми поміщаємо блок кода в якому ми очікуємо помилку
} catch (error) {
  // цей блок коду виконується якщо виникає помилка в блоці try
}
// Приклад:
const fnWithError2 = () => {
  throw new Error("Something went wrong"); // генеруємо помилку в JS
};
try {
  fnWithError2();
} catch (error) {
  // тут функція буде присвоєно в перемінну err
  console.error(error); // виведення всієї помилки в консоль
  console.log(error.message);
  // викликаємо тільки повідомлення що є у функції => Something went wrong
}
console.log("Continue...");
// виконання коду буде продовжуватися незалежно від помилки

// тобто рекомендовано поміщати блоки коду де очікуються помилки в try catch блок
// #endregion

// #region Інструкції
// Загалом є:
// 1. Вираз (який завжди повертає значення, він же функціональний вираз)
// 2. Інструкція (let a = 1 => тобто щось куди присвоюється, або виконує певну дію)
// 3. Вираз-інструкція (вираз який може бути інструкцією / Expression statement)
// Інструкція-вираз (ІНСТРУКЦІЯ НЕ МОЖЕ СТАТИ ВИРАЗОМ!!!!)

// Приклади інструкції:
let a1; // інструкція, що ми створили перемінну і присвоїли їй значення - undefined
// Кожну інструкція треба завершувати ";" і розділяти їх пустими строками
const a2 = 5; // наступна інструкція

if (a > b) {
  console.log("a is bigger than b");
}
// це все також інструкція - виконується дія, що якщо а більше б => виведеться повідомлення про це

for (let i = 0; i < a2; i++) {
  console.log(i);
}
// цикл (при них пізніше) також виконує дію (стартове значення; умова якої потрібно досягти; дія яка виконується)
// інструкції що закінчуються } не потребують ";"
// АЛЕ в JS ";" можна опускати

// Приклад Вираз-інструкції:
("abc"); // це вираз але ми конвертували її за допомоги ";" в інструкцію
// але така інструкція не має значення, так як ми нікуди її не присвоїли

a = a + 3; // знову вираз-інструкція - дія яка повертає значення

c = a + b; // те саме, але треба помітити, що ці перемінні не були об'явлені, розуміючи що це було зроблено раніше

d = "Good " + "Evening"; // об'єднуємо дві строки в одну і присвоюємо в перемінну
// "Good " + "Evening" - це як інструкція
//  d = ...щось - це вираз
// разом вираз-інструкція за допомоги ";"

myFunction(c, d); // це також вираз-інструкція

console.log("Hey!"); // це також вираз-інструкція

// АЛЕ в JS ";" можна опускати...
// то як відрізнити вираз від інструкції?
// 1. інструкція пишеться з нового рядка (!)
// 2. вирази можуть бути використані як аргументи у викликах функцій, інструкції так не можуть

// Приклад:
function myFn2(a) {
  console.log(a);
}

const b1 = true;
let c1 = 10;

myFn2(2 + 3); // => 5 ; в якості аргумента вираз ; у функції параметру "а" буде передано результат дії, що тут записаний, тобто "а" буде = 5
myFn2(b1); // => true ; значення із "б" передаємо у функцію в "а" яка вже буде = true
myFn2((c1 = c1 + 1)); // => 11 ; тут так само ; даний приклад практично дуже рідкісний на практиці, але він гарно ілюструє як вираз відрізняється від інструкції
// myFn2(c1 = c1 + 1;)
// myFn2(let d)  => Uncaught SyntaxError - тому що тут в параметрах інструкції

// Тобто використовуючи функцію ми можемо перевірити що є виразом, а що інструкцією

// #endregion

// #region Масиви
// Нагадування: масив це об'єкт, з цифровими іменами властивостей (0..1..2.. і тд.)
const myArray = [1, 2, 3];
console.log(myArray); // [1, 2, 3]

const myArray2 = new Array(1, 2, 3);
console.log(myArray2); // [1, 2, 3]
// при чому myArray !== myArray2, тому що це 2 різні ОБ'ЄКТИ! в пам'яті на них два різних посилання
console.table(myArray2); // вивід структури об'єкта, довжиною в 3
console.log(myArray2.length); // 3

// Порівняння масиву з об'єктом
const myObject2 = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
console.log(myObject2); // ми отримаємо щось дуже схоже на масив: { '0': 1, '1': 2, '2': 3, length: 3 } , але відрізняються вони прототипами (про них пізніше). Також довжина в масиві буде оновлюватися кожний раз коли туди щось додається, з об'єктом такого відбуватися не буде

// Вивід елемента під індексом:
console.log(myArray[0]); // 1
// Зміна довжини:
myArray.length = 7;
// Все що далі 2 буде:
console.log(myArray[7]); // undefined

// Додавання нових елементів у масив:
myArray[3] = "abc";
console.log(myArray); // [ 1, 2, 3, 'abc', <3 empty items> ]
myArray[4] = true;
console.log(myArray); // [ 1, 2, 3, 'abc', true, <2 empty items> ]
myArray.length = 4;
myArray[5] = false; // додавання нового елементу в кінець масиву
console.log(myArray); // [ 1, 2, 3, 'abc', <1 empty item>, false ]
console.log(myArray.length); // 5, а було 4
// але таке додавання не зручне, тому що ми можемо не знати довжину масиву. Для цього є методи масиву
// #endregion

// #region Методи масиву
// Ці методи являються функціями вищого порядку, або методами(функціями) прототипів

// Основні методи:
myArray3 = [1, 2, 3];
myArray3.push("name"); // додавання в кінець масиву
let removedElement = myArray3.pop(); // видаляє останній елемент масиву і цей останній елемент можна присвоїти в перемінну
console.log(removedElement); // 'name'
myArray3.unshift(removedElement); // додавання елемента в початок масиву => 'name'
removedElement = myArray3.shift(); // видаляє перший елемент масиву => 'name' і присвоєння в перемінну
// вказані методи змінюють оригінальний масив, тобто відбувається "мутація"

// Популярний метод: forEach
const res = myArray3.forEach((el) => console.log(el * 2)); // колбек функція як буде викликана у функції forEach
// output: 2 4 6 ; по суті всередині цикл який перебирає елементи і виконує над ними вказану нами дію і він буде повторюватися стільки, скільки в нас елементів в масиві
console.log(myArray3);
// output: 1 2 3
// оригінальний масив не змінився
console.log(res); // output: undefined, тому що задача тільки перебір елементів масиву і виконання над нами певної дії, все, нічого він не повертає

// Ще один популярний метод: map
let newArray = myArray3.map((el) => el * 2);
console.log(myArray3); // [ 1, 2, 3 ]
console.log(newArray); // [ 2, 4, 6 ]
// цей метод вже виконує дію над всіма елементами І повертає результат дії який можна помістити у новий масив, при чому однакової довжини

newArray = myArray3.map((el) => {
  el * 3;
});
console.log(newArray); // [ undefined, undefined, undefined ]
// тому що немає ключового слова return

newArray = myArray3.map((el) => {
  return el * 3;
});
console.log(newArray); // [ 3, 6, 9 ]

// також замість (el) => {  можна писати  function(el) {
// #endregion

// #region Деструктуризація

// #endregion
