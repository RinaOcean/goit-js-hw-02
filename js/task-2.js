/*Напиши скрипт подсчета стоимости гравировки украшений.
 Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
 принимающую строку (в строке будут только слова и пробелы)
 и цену гравировки одного слова, и возвращающую цену гравировки всех 
 слов в строке.
*/

const calculateEngravingPrice = function (message, pricePerWord) {
  //const normalizedMessage = message.split(" ");
  const wordsQuantity = message.split(" ").length;
  const totalPrice = wordsQuantity * pricePerWord;
  return totalPrice;
};

console.log(`Engraving price is: 
${calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
)}`);

console.log(`Engraving price is: 
${calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  20
)}`);

console.log(`Engraving price is: 
${calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)}`);

console.log(`Engraving price is: 
${calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)}`);
