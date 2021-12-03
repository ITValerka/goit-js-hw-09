const btnStartChangeColor = document.querySelector('button[data-start]');
const btnStopChangeColor = document.querySelector('button[data-stop]');

btnStartChangeColor.addEventListener('click', changeBackgroundColor);
btnStopChangeColor.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const intervalId = setInterval(getRandomHexColor, 1000);

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  btnStartChangeColor.classList.add('active');
  btnStopChangeColor.classList.remove('active');
  if (btnStartChangeColor.classList.contains('active')) {
    btnStartChangeColor.disabled = 'true';
    btnStopChangeColor.disabled = '';
  }
}
function stopChangeColor() {
  clearInterval(intervalId);
  btnStartChangeColor.classList.remove('active');
  btnStopChangeColor.classList.add('active');
  if (btnStopChangeColor.classList.contains('active')) {
    btnStopChangeColor.disabled = 'true';
    btnStartChangeColor.disabled = '';
  }
}
// button.style.backgroundColor = 'teal';
// button.style.fontSize = '24px';
