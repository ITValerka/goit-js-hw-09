const btnStartChangeColor = document.querySelector('button[data-start]');
const btnStopChangeColor = document.querySelector('button[data-stop]');
const button = document.querySelector('button');
btnStartChangeColor.addEventListener('click', changeBackgroundColor);
btnStopChangeColor.addEventListener('click', stopChangeColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function bgColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
}
function changeBackgroundColor() {
  if (changeBackgroundColor) {
    btnStartChangeColor.disabled = 'true';
    btnStopChangeColor.disabled = '';
  }
  intervalId = setInterval(bgColorChange, 1000);
}
function stopChangeColor() {
  if (stopChangeColor) {
    btnStopChangeColor.disabled = 'true';
    btnStartChangeColor.disabled = '';
  }
  clearInterval(intervalId);
}
btnStartChangeColor.style.position = 'absolute';
btnStartChangeColor.style.top = '55%';
btnStartChangeColor.style.left = '39%';
btnStartChangeColor.style.width = '150px';
btnStartChangeColor.style.height = '75px';
btnStopChangeColor.style.position = 'absolute';
btnStopChangeColor.style.top = '55%';
btnStopChangeColor.style.left = '51%';
btnStopChangeColor.style.width = '150px';
btnStopChangeColor.style.height = '75px';
