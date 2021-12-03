const btnStartChangeColor = document.querySelector('[data-start]');
const btnStopChangeColor = document.querySelector('[data-stop]');
btnStartChangeColor.addEventListener('click', changeBackgroundColor);
btnStopChangeColor.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
