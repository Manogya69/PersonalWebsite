const boxes = document.querySelectorAll(".box");
const container = document.querySelector(".container");

window.addEventListener("scroll", checkBoxes);
checkBoxes(); //remove this if you want to show content only after scrolling

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
