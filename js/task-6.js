const numbers = [];
let total = 0;

const sum = function () {
  while (true) {
    let input = prompt("Введите любое число:");

    if (input === null) {
      break;
    }

    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
      alert("Вы ввели не число, введите число!");
      continue;
    }

    numbers.push(input);
  }

  for (const number of numbers) {
    total += number;
  }
  console.log(`Вы ввели: ${numbers}`);

  return total;
};

console.log(`Общая сумма чисел: ${sum(numbers)}`);
