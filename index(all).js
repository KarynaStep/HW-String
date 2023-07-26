"use strict";

// Написати функцію (*стрілку),  яка приймає рядок і повертає кількість голосних літер, які присутні в цьому рядку.
// Голосні: A, E, I, O, U, Y - рахуємо як верхній так і нижній регистр
// 'console' -> 3
// 'www' -> 0
// 'oOo!' -> 3
// 'QwertY' -> 2

// 1 превратить рядок в массив
// 2 привести все буквы к нижнему регистру
// v-1
// 3 написать метод, который посчитывает количество встреч
// 4  сравнить с гласными
// v - 2
//3  методы который перебирает значение и возвращает правду
// 4 считает элементы в массиве


// v-2 (подсчет длинны)
// const countVowel = function (str) {
//   let  strNew = str.toLowerCase().split('');
//   let str2 = strNew.filter((element) => {
//     if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u' || element === 'y') {
//       return element
//     } return
//   })
//   return str2.length;
// }


// v-1 (подсчет значений)
// const countVowel = function (str) {
//   let strNew = str.toLowerCase().split("");
//   let str2 = strNew.reduce((accumulator, currentValue) => {
//     if (
//       currentValue === "a" ||
//       accumulator === "a" ||
//       currentValue === "e" ||
//       accumulator === "e" ||
//       currentValue === "i" ||
//       accumulator === "i" ||
//       currentValue === "o" ||
//       accumulator === "0" ||
//       currentValue === "u" ||
//       accumulator === "u" ||
//       currentValue === "y" ||
//       accumulator === "y"
//     ) {
//       return accumulator + 1;
//     }
//     return accumulator;
//   }, 0);
//   return str2;
// };

// v-2 (подсчет длинны)
// const arrayForCheck = ['a', 'e', 'i' , 'o', 'u', 'y']
// const countVowel = (str) => str
//     .toLowerCase()
//     .split("")
//     .filter((element) => arrayForCheck.includes(element)).length;

// console.log(countVowel("QwertY"));

// v-1 (подсчет значений)
// const arrayForCheck = ["a", "e", "i", "o", "u", "y"];
// const countVowel = (str) => str.toLowerCase().split("").reduce((accumulator, currentValue) => arrayForCheck.includes(currentValue) ?  accumulator + 1 :  accumulator, 0);

// console.log(countVowel("QweerootY"));
