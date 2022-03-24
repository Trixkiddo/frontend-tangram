const shapeArray = ["pomme", "sapin", "swan", "tortue"];

const square = document.querySelector(".container-general");
const shapeList = document.querySelectorAll(".js-get-shape")

// add event listener
for (shape of shapeList) {
  shape.addEventListener("click", changeShape);
}

let lastestAddedClass = "";

function changeShape(e) {
  let whichShape = e.target;
  let shapeLiIndex = Array.prototype.indexOf.call(shapeList, whichShape);

  // if clicked button isnt the same as the lastest class
  if (shapeArray[shapeLiIndex] !== lastestAddedClass) {
    //clean classList from preview shape class
    if (square.classList.contains(lastestAddedClass)) {
      square.classList.remove(lastestAddedClass);
    }
    // add corresponding ( clicked button ) shape class to the Classlist
    square.classList.add(shapeArray[shapeLiIndex]);
    lastestAddedClass = shapeArray[shapeLiIndex];
  } else {
    // remove class if same button clicked once again for toggle effect
    square.classList.remove(lastestAddedClass);
    //need to reset lastestclass for initial check
    lastestAddedClass = "";
  }
}
