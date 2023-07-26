// Написати функцію (*стрілку),  яка приймає рядок і повертає кількість голосних літер, які присутні в цьому рядку.
// Голосні: A, E, I, O, U, Y - рахуємо як верхній так і нижній регистр
// 'console' -> 3
// 'www' -> 0
// 'oOo!' -> 3
// 'QwertY' -> 2


// v-1 (подсчет значений)
const arrayForCheck = ["a", "e", "i", "o", "u", "y"];
const countVowel = (str) => str.toLowerCase().split("").reduce((accumulator, currentValue) => arrayForCheck.includes(currentValue) ?  accumulator + 1 :  accumulator, 0);

console.log(countVowel("console"));
console.log(countVowel("www"));
console.log(countVowel("oOo!"));
console.log(countVowel("QwertY"));

// v-2 (подсчет длинны)
const arrayForCheck2 = ['a', 'e', 'i' , 'o', 'u', 'y']
const countVowel2 = (str) => str
    .toLowerCase()
    .split("")
    .filter((element) => arrayForCheck2.includes(element)).length;

console.log(countVowel2("console"));
console.log(countVowel2("www"));
console.log(countVowel2("oOo!"));
console.log(countVowel2("QwertY"));