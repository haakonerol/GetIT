
let toDoDescriptionInput = document.getElementById("toDoDescription")

function addToDo(){
    toDos.push(
        {
            description:toDoDescriptionInput.value,
            isDone:false
        }
    )
    toDoDescriptionInput.value="";
    showTable()
}

function changeIsDone(checkbox){

}