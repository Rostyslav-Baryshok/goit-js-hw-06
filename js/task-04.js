const counter = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtb: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = 0;

counter.decrementBtn.addEventListener('click', decrement);
counter.incrementBtb.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  changeValueEl(counterValue);
}

function increment() {
  counterValue += 1;
  changeValueEl(counterValue);
}

function changeValueEl(value) {
  counter.valueEl.textContent = value;
}