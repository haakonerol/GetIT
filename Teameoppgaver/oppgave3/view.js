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