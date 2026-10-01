const animateElements = function () {
  const boxes = document.querySelectorAll(".box");
  const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"];
  let step = 0;

  const intervalId = setInterval(function () {
    step += 1;

    boxes.forEach(function (box, index) {
      const isBig = step % 2 === 0;
      const colorIndex = (step + index) % colors.length;

      box.style.width = isBig ? "110px" : "80px";
      box.style.height = isBig ? "110px" : "80px";
      box.style.backgroundColor = colors[colorIndex];
    });
  }, 800);
};

animateElements();