const conntainer = document.getElementById("container");
const numberofInput = document.querySelector(".input");
const button = document.querySelector(".button");

function createBoxes(numberOfBoxes) {
  //to clear any existing boxes
  conntainer.innerHTML = "";
  

  for (let i = 0; i < numberOfBoxes; i++) {
    //create a new div for each box
    const box = document.createElement("div");
    box.className = "box";

    //set some content for the box
    box.textContent = `Box ${i + 1}`;
    conntainer.appendChild(box);
  }
}


button.addEventListener("click", () => {
  
  console.log("forming tables");
    console.log(numberofInput.value);
    numberOfBoxes = numberofInput.value;
    createBoxes(numberOfBoxes);
});
