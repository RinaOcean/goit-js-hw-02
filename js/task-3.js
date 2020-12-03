//Напиши фукцнию findLongestWord(string),
//которая принимает параметром произвольную строку
//(в строке будут только слова и пробелы) и возвращает
//самое длинное слово в этой строке.

const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return `The longest word in a string is: ${longestWord}`;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
