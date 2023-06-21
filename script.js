'use strict';
const captcha = document.querySelector('.captcha');
const reloadBtn = document.querySelector('.reload');
const inputField = document.querySelector('.input');
const checkBtn = document.querySelector('.check-btn');
const result = document.querySelector('.result');

let allCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomLtr =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += `${randomLtr}`;
  }
}
getCaptcha();

reloadBtn.addEventListener('click', () => {
  captcha.innerText = '';
  inputField.value = '';
  getCaptcha();
});

checkBtn.addEventListener('click', (e) => {
  e.preventDefault();
  result.style.display = 'block';

  let inputValue = inputField.value.split('').join('');
  if (inputValue === captcha.innerText) {
    result.innerText = "Nice! you don't appear to be robot";
    setTimeout(() => {
      result.style.display = 'none';
      inputField.value = '';
      captcha.innerText = '';
      getCaptcha();
    }, 4000);
  } else {
    result.innerText = 'Enter correct captcha';
  }
});
