const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let isValid;
let notUnique;

const isLoginValid = function (login) {
  const length = login.length;
  isValid = 4 <= length && length <= 16;

  return isValid;
};

const isLoginUnique = function (allLogins, login) {
  notUnique = allLogins.includes(login);

  return !notUnique;
};

const addLogin = function (allLogins, login) {
  console.log("Все логины: ", allLogins);
  console.log("Логин: ", login);

  isLoginValid(login);

  if (isValid === false) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  isLoginUnique(logins, login);

  if (notUnique === true) {
    return "Такой логин уже используется!";
  }

  logins.push(login);
  return "Логин успешно добавлен!";
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
