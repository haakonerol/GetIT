//Model
const item1 ={name:"coils.jpeg",effect:18}
const item2 ={name:"exhaust.jpeg",effect:15}
const item3 ={name:"turbo.jpeg",effect:28}
const item4 ={name:"wheels.jpeg",effect:20}
const item5 ={name:"stone.jpeg",effect:-18}
const item6 ={name:"paper.jpeg",effect:-18}
const item7 ={name:"scissors.jpeg",effect:-18}
const item8 ={name:"man1.jpg",effect:20}
const item9 ={name:"man2.png",effect:20}
const item10 ={name:"grandmother.webp",effect:18}
const itemArray = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10];
let item;
let message = "Welcome to cool car app";
let coolnessProgress = 50;
let coolnessColor;
let fuelProgress = 100;
let fuelColor;
let fuelTimer;
let itemTimer;

/*-------------------------------------------------*/
//View
function updateView() {
  document.getElementById("app").innerHTML = `
          <div id="coolness">Kulhet:
            <div id="coolnessBar">${coolnessProgress}%</div>
          </div>
          <div id="fuel">Bensin:
            <div id="fuelBar" >${fuelProgress}%</div>
          </div>
          <div id="congrats">
              <h1> ${message}</h1>                
          </div>
          <div class="main">                                   
            <img id="car" src="./images/car.gif"  alt="car"/>
            <div id="itemImg">                                   
            </div>            
          </div>            
            <p id="message"></p>
            
            <button class="button" onclick="drive()"> Leave it </button>
            <button class="button" onclick="receive()"> Take it</button>
          <div id="dropdown" >
            <button class="button" onclick="toggleDropdown()"> Hilse </button>
              <ul id="hilsList">
                <li onclick="greet(controlName)">Assen går det!</li>
                <li onclick="greet(controlName)">Hva Skjera!</li>
                <li onclick="greet(controlName)">Wazzaaap!</li>
                <li onclick="greet(controlName)">Kom på besøk!</li>
              </ul>
          </div>
            `;
  fuelColor = document.getElementById("fuelBar");
  coolnessColor= document.getElementById("coolnessBar")
}
updateView();
/*-------------------------------------------------*/
//Controllers

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
//setTimer();

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
