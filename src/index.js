"use strict";

/**
 * Функция спрашивает пользователя о продолжении выполнения чего-то
 *
 * @param {string} question Вопрос
 * @param {function} yes Срабатываемая функция при положительном ответе
 * @param {function} no Срабатываемая функция при отрицательном ответе
 */
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function spinWords(string) {
  let separateWords = string.split(" ");
  separateWords.forEach((word) => {
    if (word.length >= 5) {
      string = string.replace(word, spinOneWord(word));
    }
  });
  return string;
}

function spinOneWord(string) {
  let chars = Array.from(string);
  let resultString = "";

  for (let i = chars.length - 1; i >= 0; i--) {
    resultString += chars[i];
  }

  return resultString;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    console.log(key, obj);
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
      console.log(obj[key]);
    }
  }
}

console.log(multiplyNumeric(menu));

let bindError;

// .....
// ....
// ...

/* bindError ?? (() => {
  alert("Сработало");
  alert("Да-да");
})(); */

// let str = String("Привет");

// str.test = 5; // (*)

// alert(str.test);

/*ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);*/
