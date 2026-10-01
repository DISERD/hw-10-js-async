const initTimerControl = function () {
  const timeInput = document.getElementById("time-input");
  const startBtn = document.getElementById("start-btn");
  const statusDisplay = document.getElementById("status-display");

  const formatTime = function (totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  startBtn.addEventListener("click", function () {
    const timeValue = timeInput.value;
    if (!timeValue) return;

    const parts = timeValue.split(":");
    let totalSeconds = 0;

    if (parts.length === 3) {
      totalSeconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
    } else if (parts.length === 2) {
      totalSeconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }

    if (totalSeconds <= 0) {
      alert("Please enter a valid time greater than 0.");
      return;
    }

    startBtn.disabled = true;
    timeInput.disabled = true;
    statusDisplay.textContent = `Залишилось: ${formatTime(totalSeconds)}`;

    const timerId = setInterval(function () {
      totalSeconds -= 1;
      statusDisplay.textContent = `Залишилось: ${formatTime(totalSeconds)}`;

      if (totalSeconds === 0) {
        clearInterval(timerId);
        statusDisplay.textContent = "Time's up!";
        alert("Time's up!");

        startBtn.disabled = false;
        timeInput.disabled = false;
      }
    }, 1000);
  });
};

initTimerControl();