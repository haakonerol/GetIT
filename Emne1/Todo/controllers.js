let toDoDescriptionInput = document.getElementById("toDoDescription");
let personName = document.getElementById("toDoPerson");

function activateAddBtn() {
  if (toDoDescriptionInput.value.trim() === "") {
    document.getElementById("add").disabled = true;
  } else {
    document.getElementById("add").disabled = false;
  }
}

function addToDo() {
  let addDate = new Date().toLocaleDateString("nb-NO");
  toDos.push({
    description: toDoDescriptionInput.value,
    taskOfPerson: personName.value,
    dayOfAdd: addDate,
    dayOfComplited: "",
    isDone: false,
  });
  toDoDescriptionInput.value = "";
  personName.value = "";
  activateAddBtn();
  showTable();
}

function changeIsDone(checkbox, index) {
  let addDate = new Date().toLocaleDateString("nb-NO");
  const isDone = checkbox.checked;
  // console.log(isDone);
  toDos[index].isDone = isDone;
  if (toDos[index].isDone) {
    toDos[index].dayOfComplited = addDate;
  } else {
    toDos[index].dayOfComplited = "";
  }
  //   console.log(toDos[index].dayOfComplited);
  //   console.log(toDos[index].isDone);
  showTable();
}
function deleteToDo(index) {
  toDos.splice(index, 1);
  showTable();
}
function editToDo(index) {
  toDos[index].editMode = true;
  showTable();
}
function update(index) {
  const idToDo = `updateToDo${index}`;
  const idPerson = `updatePerson${index}`;
  const inputToDo = document.getElementById(idToDo);
  const inputPerson = document.getElementById(idPerson);
  toDos[index].description = inputToDo.value;
  toDos[index].taskOfPerson = inputPerson.value;
  toDos[index].editMode = false;
  showTable();
  //console.log(toDos);
}
