function toggleDropdown() {
    let menu = document.getElementById("hilsList");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  
  function decayFuel() {
    if (fuelProgress > 0) {
      fuelProgress -= 2;
      //coolnessProgress+=10
      //console.log(coolnessProgress)
      //console.log(item);
  
      if (fuelProgress > 75) {
        fuelColor.style.backgroundColor = "green";
      }
      if (fuelProgress >= 50 && fuelProgress <= 75) {
        fuelColor.style.backgroundColor = "yellow";
      }
      if (fuelProgress < 50) {
        fuelColor.style.backgroundColor = "orange";
      }
      if (fuelProgress < 25) {
        fuelColor.style.backgroundColor = "red";
      }
  
      fuelColor.style.width = fuelProgress + "%";
      fuelColor.innerHTML = `${fuelProgress}%`;
      
    }
  
    if (fuelProgress === 0 || coolnessProgress>=100) {
      clearInterval(fuelTimer);
      clearInterval(itemTimer);
      if(coolnessProgress<100){
        message ="Opps! Try again"
        document.getElementById("congrats").innerHTML =`<h1> ${message}</h1>`
      }if(coolnessProgress>=100){
        message ="Congrats! You win"
        document.getElementById("congrats").innerHTML =`<h1> ${message}</h1>`
        ;
      }
    }
  }
  
  function setTimer() {
    fuelTimer = setInterval(decayFuel, 1000);
    itemTimer = setInterval(showItem, 5000);
  }
  setTimer();
  
  function showItem() {
    let index = Math.floor(Math.random() * itemArray.length);
    let newArray= itemArray
    item = newArray[index];
    newArray.splice(index,1)
    //console.log(newArray);
    document.getElementById(
      "itemImg"
    ).innerHTML = `<img class="kompis" style="width:200px, height:200px"src="./images/${item.name}" alt="${item.name}"/>`;
    
  }
  
  function receive() {
    coolnessProgress+=item.effect
    coolnessColor.style.width = coolnessProgress + "%";
    coolnessColor.innerHTML=coolnessProgress+ "%"
  }
  
  function greet() {}