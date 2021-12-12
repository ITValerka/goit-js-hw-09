const startPromise = document.querySelector('[type=submit]');
startPromise.addEventListener('click', onSubmitCreatePromise);
function onSubmitCreatePromise(event) {
  event.preventDefault();
  let delay = document.querySelector('[name=delay]').value;
  let step = document.querySelector('[name=step]').value;
  let amount = document.querySelector('[name=amount]').value;
  const createPromise = (position, dеlay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          // Fulfill
          resolve({ position, delay });
        } else {
          // Reject
          reject({ position, delay });
        }
      }, delay);
    });
  };
  for (let i = 1; i <= amount; i += 1) {
    position = i + step;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
