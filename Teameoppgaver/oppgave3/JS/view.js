

function updateView() {
  document.getElementById("app").innerHTML = `
        <div id="coolness">Kulhet:
          <div id="coolnessBar">${coolnessProgress}%</div>
        </div>
        <div id="fuel">Bensin:
          <div id="fuelBar">${fuelProgress}%</div>
        </div>
        <div id="congrats">
            <h1> Gratulerer! du vant</h1>                
        </div>
        <div class="main">                                   
          <img id="car" src="../images/car.gif"  alt="car"/>
          <img class="kompis" src="../images/images.jpg" alt="kompis"/>
          
        </div>            
          <p id="message"></p>
          
          <button class="button" onclick="drive()"> KJØR Forbi</button>
          <button class="button" onclick="receive()"> Ta i Mot</button>
        <div id="dropdown" >
          <button class="button" onclick="toggleDropdown()"> Hilse </button>
            <ul id="hilsList">
              <li onclick="greet()">Assen går det!</li>
              <li onclick="greet()">Hva Skjera!</li>
              <li onclick="greet()">Wazzaaap!</li>
              <li onclick="greet()">Kom på besøk!</li>
            </ul>
        </div>
          `;
}

updateView();
