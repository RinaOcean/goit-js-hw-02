/*Напиши функцию formatString(string) которая принимает строку 
  и форматирует ее если необходимо.
  Если длина строки не превышает 40 символов, функция возвращает 
  ее в исходном виде.
  Если длина больше 40 символов, то функция обрезает строку
  до 40-ка символов и добавляет в конец строки троеточие '...', 
  после чего возвращает укороченную версию.  
*/

const formatString = function (string) {
  //let newStr = string;
  //if (string.length > 40) {
  //  newStr = string.slice(0, 41) + "...";
  //}

  const newStr = string.length > 40 ? string.slice(0, 41) + "..." : string;
  return newStr;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
