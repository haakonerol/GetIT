//Controllers
updateView();
let fuelColor = document.getElementById("fuelBar");

function toggleDropdown() {
  let menu = document.getElementById("hilsList");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
function decay() {
  fuelColor.style.width = fuelProgress + "%";
  fuelProgress -= 20;
  console.log(fuelProgress);
}
function setTimer() {
  
  if (fuelProgress >0) {
    fuelTimer = setInterval(decay, 1000);
  }
  else if (fuelProgress=0){clearInterval(fuelTimer);}
}
//setTimer();
function drive() {}
function receive() {}
function greet() {}