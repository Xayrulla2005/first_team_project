// // Homework
// // 1-masala
// function sortArrayPreserveDuplicates(arr) {
//   return [...arr].sort((a, b) => a - b);
// }

// // 2-masala
// function mostFrequentElement(arr) {
//   const freq = {};
//   let max = 0, result;
//   for (let el of arr) {
//     freq[el] = (freq[el] || 0) + 1;
//     if (freq[el] > max) {
//       max = freq[el];
//       result = el;
//     }
//   }
//   return result;
// }
// // 3-masala
// function toggleEvenOdd(arr) {
//   return arr.map(n => n % 2 === 0 ? n + 1 : n - 1);
// }
// // 4-masala
// function getPalindromes(arr) {
//   return arr.filter(word => word === word.split('').reverse().join(''));
// }
// // 5-masala
// function findWordsOccurTwice(text) {
//   const words = text.toLowerCase().match(/\b\w+\b/g);
//   const count = {};
//   words.forEach(w => count[w] = (count[w] || 0) + 1);
//   return Object.keys(count).filter(word => count[word] === 2);
// }
// // 6-masala
// function sortWordsByLengthDescending(text) {
//   return text.split(' ').sort((a, b) => b.length - a.length);
// }
// // 7-masala
// function firstLetters(text) {
//   return text.split(' ').map(word => word[0]).join('');
// }
// // 8-masala
// function squareDigitsInString(str) {
//   return str.replace(/\d/g, d => (d * d));
// }
// // 9-masala
// function wordsStartingWithVowels(text) {
//   return text.split(' ').filter(word => /^[aeiouAEIOU]/.test(word));
// }

