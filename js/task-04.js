let counterValue = 0;

const reduceBtnEl = document.querySelector('[data-action="decrement"]');
const increaseBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');


reduceBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

increaseBtnEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})


