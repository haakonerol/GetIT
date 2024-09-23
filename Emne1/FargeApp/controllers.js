
function startAdd(){
    isAdding=true;
    updateView();
}
function canselAddColor(){
    isAdding=false;
    updateView();
}
function addColor(){
    colors.push(addColorName);
    isAdding= false;
    addColorName="";
    updateView();
}
function deleteColor(i){
    colors.splice(i,1);
    updateView();
}