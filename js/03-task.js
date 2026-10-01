const initClickGame = function () {
  const startBtn = document.getElementById("start-btn");
  const target = document.getElementById("target");
  const scoreDisplay = document.getElementById("score");
  const timerDisplay = document.getElementById("timer");
  const gameField = document.getElementById("game-field");

  let score = 0;
  let timeLeft = 10;
  let gameTimer = null;
  let moveTimer = null;

  const moveTarget = function () {
    const x = Math.random() * (gameField.clientWidth - target.clientWidth);
    const y = Math.random() * (gameField.clientHeight - target.clientHeight);

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
  };

  startBtn.addEventListener("click", function () {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;

    startBtn.disabled = true;
    target.classList.remove("hidden");
    moveTarget();

    moveTimer = setInterval(moveTarget, 800);

    gameTimer = setInterval(function () {
      timeLeft -= 1;
      timerDisplay.textContent = timeLeft;

      if (timeLeft === 0) {
        clearInterval(gameTimer);
        clearInterval(moveTimer);
        target.classList.add("hidden");
        startBtn.disabled = false;
        alert(`Гра закінчена! Очки: ${score}`);
      }
    }, 1000);
  });

  target.addEventListener("click", function () {
    score += 1;
    scoreDisplay.textContent = score;
    moveTarget();
  });
};

initClickGame();