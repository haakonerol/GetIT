let toDoTable = document.getElementById("toDoTable");
function showTable() {
  let html = `
    <tr>
     <th>Oppgave</th>
     <th>Lagt tid</th>
     <th>Person</th>
     <th>Gjort</th>
     <th>Gjort tid</th>
     <th></th>
    </tr>`;
  for (let i = 0; i < toDos.length; i++) {
    html += createHtmlRow(i);
  }
  toDoTable.innerHTML = html;
}

function createHtmlRow(i) {
  let toDo = toDos[i];
  const checkedHtml = toDo.isDone ? 'checked="checked"' : "";
  if (!toDo.editMode)
    return `
    <tr>
     <td>${toDo.description}</td>
     <td>${toDo.dayOfAdd??""}</td>
     <td>${toDo.taskOfPerson?? " "}</td>
     <td><input onchange="changeIsDone(this,${i})" type="checkbox" ${checkedHtml}></td>
     <td>${toDo.dayOfComplited??""}</td>
     <td>
        <button onclick="deleteToDo(${i})">Erase</button>
        <button onclick="editToDo(${i})">Edit</button>
     </td>
    </tr>
    
    `;
  return `
    <tr>
     <td><input id="updateToDo${i}" type="text" value="${toDo.description}"/></td>
     <td>${toDo.dayOfAdd??""}</td>
     <td><input id="updatePerson${i}" type="text" value="${toDo.taskOfPerson??" "}"/></td>
     <td><input onchange="changeIsDone(this,${i})" type="checkbox" ${checkedHtml}></td>
     <td>${toDo.dayOfComplited??""}</td>
     <td>
        <button onclick="update(${i})">Save</button>
        
     </td>
    </tr>
    
    `;
}
showTable();
