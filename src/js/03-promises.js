import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  form: document.querySelector('.form'),
  delayUser: document.querySelector('input[name="delay"]'),
  stepDelayUser: document.querySelector('input[name="step"]'),
  amountUser: document.querySelector('input[name="amount"]'),
  createPromisesBtn: document.querySelector('button[type="submit"]'),
}

refs.form.addEventListener('submit', onSubmitClick);

function onSubmitClick(e) {
  e.preventDefault();

  let delay = refs.delayUser.valueAsNumber;
  let stepDelayUser = refs.stepDelayUser.valueAsNumber;
  let amountUser = refs.amountUser.valueAsNumber;

   for (let i = 1; i <= amountUser; i+=1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${i} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${i} in ${delay}ms`
        );
      });
    delay += stepDelayUser;
  }

}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
