import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  let { delay, step, amount } = event.currentTarget;
  let delay = Number(delay.value);
  let step = Number(step.value);
  let amount = Number(amount.value);

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay);
    console.log('delayPromise', delay, 'position', position);
    delay += step;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
