const randomBtn = document.querySelector('.js-random-btn');
const resultEl = document.querySelector('.js-result');
const choseRandomInputEl = document.querySelector('.js-chose-input');
const usedNumbersEl = document.querySelector('.js-used-number');

// Приклад використання:
const usedNumbers = [];

const onRandomClick = () =>
  (resultEl.textContent = generateUniqueRandomNumber(usedNumbers));

randomBtn.addEventListener('click', onRandomClick);

// Random number
function generateUniqueRandomNumber(usedNumbers) {
  const choseInput = choseRandomInputEl.value;
  const min = 1;
  const max = choseInput;

  if (!choseInput) {
    return alert('Забув обрати число');
  }

  try {
    if (usedNumbers.length === max - min + 1) {
      throw new Error('Усі можливі числа вже використані.');
    }

    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.includes(randomNumber));

    usedNumbers.push(randomNumber);

    usedNumbersEl.textContent = usedNumbers.join(' / ');

    return randomNumber;
  } catch (error) {
    alert(error.message); // Виведе повідомлення про помилку
  }
}
