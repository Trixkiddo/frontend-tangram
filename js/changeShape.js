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

  console.log("clicked shape: ", shapeArray[shapeLiIndex]);
  console.log(lastestAddedClass !== shapeArray[shapeLiIndex]);

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

  console.log(square.classList);
  console.log(lastestAddedClass);
}

// console.log(shapeArray[shapeLiIndex]);
// console.log(square.classList);

// let domtokenToArray = [...square.classList]
// console.log(domtokenToArray)
