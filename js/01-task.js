const runIntervalTimer = function () {
  let count = 0;

  const timerId = setInterval(function () {
    count += 1;
    console.log(`Повідомлення #${count}`);

    if (count === 5) {
      clearInterval(timerId);
      console.log("Інтервал зупинено.");
    }
  }, 1000);
};

runIntervalTimer();