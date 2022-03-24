const shapeArray = ["pomme", "sapin", "swan", "tortue"];

const shapeNodeList = document.querySelectorAll(".shape");
const square = document.querySelector(".container-general");

for (shape of shapeNodeList) {
  shape.addEventListener("click", changeShape);
}

let lastestAddedClass = "";

function changeShape(e) {
  let whichShape = e.target;
  let shapeLiIndex = Array.prototype.indexOf.call(shapeNodeList, whichShape);

  if (shapeArray[shapeLiIndex] !== lastestAddedClass) {

    if (square.classList.contains(lastestAddedClass)) {
      square.classList.remove(lastestAddedClass);
    }

    square.classList.toggle(shapeArray[shapeLiIndex]);
    lastestAddedClass = shapeArray[shapeLiIndex];
  } else {
    square.classList.remove(lastestAddedClass);
    lastestAddedClass = "";
  }
}


