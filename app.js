const number = document.querySelector(".number");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");

// Initialize counter
let count = 0;

// Increase function
decrease.addEventListener("click", () => {
  count--;
  updateDisplay();

  //   Return count to 0
  if (count === 50) {
    window.location.reload();
  }
});

// Decrease function
increase.addEventListener("click", () => {
  count++;
  updateDisplay();

  //   Return count to 0
  if (count === 50) {
    window.location.reload();
  }
});

const updateDisplay = () => {
  number.innerHTML = count;
};
