// #region Класи та Прототипи
// класи дозволяють створювати прототипи для об'єктів, вже не основі прототипів створюються екземпляри. Ці екземпляри наслідують властивості та методи прототипів, а також можуть мати свої властивості та методи

// Приклад:
class Comment {
  constructor(text) {
    // метод (параметри) {тіло метода} -> конструктор в який ми передаємо текст в якості параметра
    this.text = text // this. -> посилається на новий екземпляр класу; this.text = текст який зайшов сюди в якості параметра
    this.votesQty = 0 // кількість голосів, по замовчанням в нового коментаря 0 голосів
  } // конструктор викликається тільки тоді коли створюється новий екземпляр класу
  upvote() {
    // метод(функція)
    this.votesQty += 1
  }
  static mergeComments(first, second) {
    // проста конкатенація текстів
    return `${first} ${second}`
  }
}
// екземпляр класу:
const firstComment = new Comment('First Comment')
console.table(firstComment) // First Comment 0
firstComment.upvote() // 0 + 1
console.log(firstComment.votesQty) // 1

// належність екземпляра тому чи іншому класу:
firstComment instanceof Comment // true
firstComment instanceof Object // true => тому що Object це глобальний клас від якого походять всі інші класи

// перевірка належності властивості екземпляру об'єкту
firstComment.hasOwnProperty('text') // true
firstComment.hasOwnProperty('votesQty') // true
firstComment.hasOwnProperty('upvote') // false => методи будуть тільки так, тому цей метод є тільки в прототипі
firstComment.hasOwnProperty('hasOwnProperty') // false => так і тут, цей метод є тільки в глобальному класі

// Декілька екземплярів якогось класу:
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

// #region Статичні методи
Comment.mergeComments(firstComment, secondComment)
// такий метод буде доступний як метод класу Comment і він не буде успадковуватися екземплярами класу
// #endregion

// #region Розширення інших класів
class NumberArray extends Array {
  // extends - розширює інший клас
  sum() {
    // додаємо новий метод, який буде сумувати всі елементи нового масиву
    return this.reduce((el, acc) => (acc += el), 0)
  }
}
// TODO: Розібратися із reduce !!!

const numberArray = new NumberArray(2, 5, 7) // тут спершу викликається батьківський конструктор, а потім додаються методи які його розширюють

console.log(numberArray)
numberArray.sum() // 14
// #endregion
