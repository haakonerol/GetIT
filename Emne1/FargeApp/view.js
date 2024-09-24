function updateView() {
  document.getElementById("app").innerHTML = `
        ${createAddColorHtml()}
        <button onclick="sortBy(null)">Fjern sortering</button>
        <button onclick="sortBy('rating')">Sorter etter rating</button>
        <button onclick="sortBy('name')">Sorter etter navn</button>
        ${
          model.creatorFilter === null
            ? ""
            : `<button onclick="filterByCreator(null)">Fjern filter</button>`
        }
        <div class="colors">
        ${createColorsHtml()}
        </div>
    
    
    `;
}

function createAddColorHtml() {
  if (!model.isAdding) return "<button onclick='startAdd()'>+</button>";
  return `
        Forgrunnsfarget:
        ${createInputHtml("foregroundColor")}
        <!-- <input
        type="text"
        oninput="model.foregroundColor=this.value"
        value="${model.foregroundColor ?? ""}"
        /> --><br>
        Bakgrunnsfarget:
        ${createInputHtml("backgroundColor")}
        <!-- <input
        type="text"
        oninput="model.backgroundColor=this.value"
        value="${model.backgroundColor ?? ""}"
        /> --><br>
        Laget av: 
        ${createInputHtml("creator")}
        <!-- <input
        type="text"
        oninput="model.creator=this.value"
        value="${model.creator ?? ""}"
        /> --><br>
        Rating:
        ${createInputHtml("rating")}
         <!-- <input
        type="number"
        min="0.0" max="6.0" step="0.1"
        oninput="model.rating=this.value"
        value="${model.rating ?? ""}"
        /> --> <br>

        <button onclick="addColor()">Legg til ny farge</button>
        <button onclick="canselAddColor()">Avbryt</button>
    
    `;
}
function createColorsHtml() {
  let colorsHtml = "";

  let colors = model.colorThemes;
  //console.log(colors);
  let colorThemes = sort(colors);
  colorThemes.forEach((color) => {
    let index = colors.indexOf(color);
    //console.log(index);
    if (model.creatorFilter != color.creator && model.creatorFilter != null)
      return;
    colorsHtml += `
            <div class="color">
                <div class="topBox">
                    <div>Theme ${index + 1}</div>
                    <button onclick="deleteColor(${index})">x</button>
                </div>
                
                <div style="background-color:${color.backgroundColor}; color:${
      color.foregroundColor
    }" class="box">
                    Rating:${color.rating}
                    Laget av:<a href="javascript:filterByCreator('${
                      color.creator
                    }')">${color.creator}</a>
                    
                    <span style="color:${color.highlightColor}">Utheving</span>
                </div>
            </div>
        `;
  });
  return colorsHtml;
}

function sort(colorThemesBase) {
  if (model.sort === null) return colorThemesBase;
  let colorThemes = [...colorThemesBase];
  if (model.sort === "rating") {
    colorThemes.sort((a, b) => b.rating - a.rating);
    return colorThemes;
  } else if (model.sort === "name") {
    colorThemes.sort((a, b) => a.creator.localeCompare(b.creator));
    return colorThemes;
  }
}
function createInputHtml(param){
    let html = `
    <input
        type="text"
        oninput="model.param=this.value"
        value="${model.param ?? ""}"
        />
    
    `;
    return html;
}