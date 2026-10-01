const initTimerControl = function () {
  const secondsInput = document.getElementById("seconds-input");
  const startBtn = document.getElementById("start-btn");
  const statusDisplay = document.getElementById("status-display");

  startBtn.addEventListener("click", function () {
    const seconds = parseInt(secondsInput.value);

    if (isNaN(seconds) || seconds <= 0) {
      alert("Введіть коректну кількість секунд!");
      return;
    }

    startBtn.disabled = true;
    secondsInput.disabled = true;
    statusDisplay.textContent = `Залишилось: ${seconds} сек.`;

    let timeLeft = seconds;

    const timerId = setInterval(function () {
      timeLeft -= 1;

      if (timeLeft > 0) {
        statusDisplay.textContent = `Залишилось: ${timeLeft} сек.`;
      } else {
        clearInterval(timerId);
        statusDisplay.textContent = "Час вийшов!";
        alert(`Минуло ${seconds} секунд!`);

        startBtn.disabled = false;
        secondsInput.disabled = false;
        secondsInput.value = "";
      }
    }, 1000);
  });
};

initTimerControl();