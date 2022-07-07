'use strict';

// task 1

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(i + 1 + " - " + array[i]);
//   }
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// task 2

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let countGaps = 0;
//   let target = ' ';
//   let per = -1;
//   while ((per = message.indexOf(target, per + 1)) != -1) {
//     countGaps += 1;
//   }
//   return pricePerWord * (countGaps + 1);
// };

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// );

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// );

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); 


// task 3

// const findLongestWord = function (string) {
//   const arr = string.split(' ');
//   let theLongestWord = '';
//   for (let i = 0; i < arr.length; i++) {
//     let str = arr[i];
//     if (str.length > theLongestWord.length) {
//       theLongestWord = str;
//     }
//   }
//   return theLongestWord;
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'


// task 4

// const formatString = function (string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     return string.slice(0, 41) + "…";
//   }
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // повернеться оригінальний рядок

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // повернеться форматований рядок

// console.log(formatString("Curabitur ligula sapien."));
// // повернеться оригінальний рядок

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // повернеться форматований рядок


// task 5

// const checkForSpam = function (message) {
//   let lowerStr = message.toLowerCase();
//   if (lowerStr.includes("spam") || lowerStr.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// task 6

// let input;
// const numbers = [];
// let total = 0;

// for (
//   let input = prompt("Введіть ваше число");
//   input !== null;
//   input = prompt("Введіть ваше число")
// ) {
//   if (isNaN(input)) {
//     alert("Було введено не число, попробуйте ще раз");
//     continue;
//   }

//   numbers.push(Number(input));
// }

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }

// console.log("Загальна сума чисел дорівнює " + total);
