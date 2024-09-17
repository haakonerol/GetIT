let toDoDescriptionInput = document.getElementById("toDoDescription");

function addToDo() {
  toDos.push({
    description: toDoDescriptionInput.value,
    isDone: false,
  });
  toDoDescriptionInput.value = "";
  showTable();
}

function changeIsDone(checkbox, index) {
  const isDone = checkbox.checked;
  // console.log(isDone);
  toDos[index].isDone = isDone;
}
function deleteToDo(index) {
  toDos.splice(index, 1);
  showTable();
}
function editToDo(index) {
  toDos[index].editMode = true;
  showTable();
}
function updateToDo(index){
    const id= `updateToDo${index}`
    const inputTag = document.getElementById(id)
    toDos[index].description = inputTag.value
    toDos[index].editMode = false;
    showTable();
    //console.log(toDos);
}
