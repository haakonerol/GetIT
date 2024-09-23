
function startAdd(){
    model.isAdding=true;
    updateView();
}
function canselAddColor(){
    model.isAdding=false;
    updateView();
}
function addColor(){
    let colorTheme={
        foregroundColor:model.addColorName,
        backgroundColor:model.backgroundColor,
        highlightColor:model.highlightColor,
        rating:model.rating,
        creator:model.creator,
    }
    model.colorThemes.unshift(colorTheme);
    model.isAdding= false;
    colorTheme={};
    updateView();
}
function deleteColor(i){
    model.colorThemes.splice(i,1);
    updateView();
}
function filterByCreator(creator){
    model.creatorFilter=creator;
    updateView();
    //console.log(creator);

}