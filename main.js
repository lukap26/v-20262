import './style.css';
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const headline = document.querySelector('h1');
const hamster = document.getElementById('middle');

const resetState = () => {
  headline.textContent = 'Will you be my Valentines?';
  hamster.src = '/hamster.gif';
  hamster.alt = 'Hamster gif';
};

yesButton.addEventListener('click', () => {
  headline.textContent = 'YAY! I knew you would say yes!';
  hamster.src = '/cat-dancing.gif';
  hamster.alt = 'Happy hamster gif';
  hamster.style.width = '300px';
  hamster.style.height = '500px';
  yesButton.classList.add('active');
  noButton.classList.remove('active');
  yesButton.style.display = 'None';
  noButton.style.display = 'None';
});

noButton.addEventListener('click', () => {
  headline.textContent = ':( try again';
  const noWidth = parseFloat(getComputedStyle(noButton).width) || 0;
  const noHeight = parseFloat(getComputedStyle(noButton).height) || 0;
  const nofontSize = parseFloat(getComputedStyle(noButton).fontSize) || 0;
  noButton.style.width = `${Math.max(0, noWidth - 10)}px`;
  noButton.style.height = `${Math.max(0, noHeight - 10)}px`;
  noButton.style.fontSize = `${Math.max(0, nofontSize - 5)}px`;
  const yesWidth = parseFloat(getComputedStyle(yesButton).width) || 0;
  const yesHeight = parseFloat(getComputedStyle(yesButton).height) || 0;
  const yesfontSize = parseFloat(getComputedStyle(yesButton).fontSize) || 0;
  yesButton.style.width = `${yesWidth + 10}px`;
  yesButton.style.height = `${yesHeight + 10}px`;
  yesButton.style.fontSize = `${yesfontSize + 5}px`;
  hamster.src = '/sad-hamster.gif';
  hamster.alt = 'Pondering hamster gif';
  noButton.classList.add('active');
  yesButton.classList.remove('active');
  noButton.blur();
});

resetState();