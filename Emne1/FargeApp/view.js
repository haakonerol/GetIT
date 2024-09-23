function updateView() {
  document.getElementById("app").innerHTML = `
        ${createAddColorHtml()}
        <div class="colors">
        ${createColorsHtml()}
        </div>
    
    
    `;
}

function createAddColorHtml() {
  if (!isAdding) return "<button onclick='startAdd()'>+</button>";
  return `
        <input
        type="text"
        oninput="addColorName=this.value"
        value="${addColorName ?? ""}"
        />
        <button onclick="addColor()">Legg til ny farge</button>
        <button onclick="canselAddColor()">Avbryt</button>
    
    `;
}
function createColorsHtml() {
  let colorsHtml = "";
  colors.forEach((color) => {
    let index= colors.indexOf(color)
    colorsHtml += `
            <div class="color">
                <div class="topBox">
                    <div>${color}</div>
                    <button onclick="deleteColor(${index})">x</button>
                </div>
                
                <div style="background-color:${color}" class="box"></div>
            </div>
        `;
  });
  return colorsHtml;
}
