const initTimerControl = function () {
  const secondsInput = document.getElementById("seconds-input");
  const startBtn = document.getElementById("start-btn");
  const statusDisplay = document.getElementById("status-display");

  startBtn.addEventListener("click", function () {
    const seconds = parseInt(secondsInput.value);

    if (isNaN(seconds) || seconds <= 0) {
      alert("Please enter a valid number of seconds!");
      return;
    }

    startBtn.disabled = true;
    secondsInput.disabled = true;
    statusDisplay.textContent = `Time left: ${seconds} sec.`;

    let timeLeft = seconds;

    const timerId = setInterval(function () {
      timeLeft -= 1;

      if (timeLeft > 0) {
        statusDisplay.textContent = `Time left: ${timeLeft} sec.`;
      } else {
        clearInterval(timerId);
        statusDisplay.textContent = "Time is up!";
        alert(`${seconds} seconds have passed!`);

        startBtn.disabled = false;
        secondsInput.disabled = false;
        secondsInput.value = "";
      }
    }, 1000);
  });
};

initTimerControl();