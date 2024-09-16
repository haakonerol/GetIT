let toDoTable = document.getElementById("toDoTable");
function showTable() {
  let html = `
    <tr>
     <th>Oppgave</th>
     <th>Gjort</th>
     <th></th>
    </tr>`;
  for (let i = 0; i < toDos.length; i++) {
    let toDo = toDos[i];
    const checkedHtml = toDo.isDone ? 'checked="checked"' : "";
    html += `
    <tr>
     <td>${toDo.description}</td>
     <td><input onchange="changeIsDone()" type="checkbox" ${checkedHtml}></td>
     <td>
        <button onclick="">Erase</button>
        <button onclick="">Edit</button>
     </td>
    </tr>
    
    `;
  }
  toDoTable.innerHTML = html;
}

function createHtmlRow(i) {}
showTable();
