// import sumNumbers from "./moduleOne.mjs";
//  імпорт завжди пишеться зверху, назва може відрізнятися якщо експорт був дефолтним
// const res = sumNumbers(10, 2);
// console.log(res); // 12
// console.log(myName); // undefined
// тому що ця перемінна не експортується сюди

// імпорт декількох перемінних:
import { one, two as twoRenamed, sum, mult } from "./moduleOne.mjs";

console.log(one, twoRenamed); // 1 two
// імена таких перемінних тощо мають співпадати але їх назву можна змінювати, щоб уникнути конфлікту назв

console.log(sum(5, 10));
console.log(mult(5, 10));
