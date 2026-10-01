const runIntervalTimer = function () {
  let count = 0;
  const maxMessages = 5;

  const timerId = setInterval(function () {
    count++;
    console.log(`Повідомлення #${count}`);

    if (count >= maxMessages) {
      clearInterval(timerId);
      console.log("Інтервал зупинено після 5 повідомлень.");
    }
  }, 1000);
};

runIntervalTimer();