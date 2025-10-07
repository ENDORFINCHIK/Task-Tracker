const table = document.getElementById('table');

const addBtn = document.getElementById('addTaskBtn');

function createTask(){
    const name = document.getElementById('nameTask').value;
    const date = document.getElementById('dateTask').value;
    const status = document.getElementById('statusTask').value;
    const comment = document.getElementById('commentTask').value;
   
    const row = document.createElement('tr');
    row.classList.add('noteRow');
    row.innerHTML = `
        <td><input id="commentTask" type="text"</td>
        <td><input id="commentTask" type="date"</td>
        <td>
          <select id="statusTask" value="">
            <option value=""></option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
            <option value="Not started">Not started</option>
          </select></td>
        <td><input id="commentTask" type="text"></td> 
        <td class="deleteBtnField"><button class="deleteBtn">X</button></td>
    `;
    table.appendChild(row);
    checkCountNotes();
}
function deleteTask(event){
    if(event.target.classList.contains('deleteBtn')){
        const row = event.target.closest('.noteRow');
        row.remove();
        
        
    }
}
function checkCountNotes(){
    const notes = document.querySelectorAll('.noteRow');
    console.log(notes.length);
}
function saveNotes(){
    const notes = document.querySelectorAll('.noteRow');
    const notesArray = [];
    notes.forEach(note => {
        const name = note.querySelector('td:nth-child(1) input').value;
        const date = note.querySelector('td:nth-child(2) input').value;
        const status = note.querySelector('td:nth-child(3) select').value;
        const comment = note.querySelector('td:nth-child(4) input').value;
        notesArray.push({name, date, status, comment});
    });
    localStorage.setItem('notes', JSON.stringify(notesArray));
}
function loadNotes(){
    const notesArray = JSON.parse(localStorage.getItem('notes')) || [];
    notesArray.forEach(({name, date, status, comment}) => {
        const row = document.createElement('tr');
        row.classList.add('noteRow');
        row.innerHTML = `
            <td><input id="commentTask" type="text" value="${name}"></td>
            <td><input id="commentTask" type="date" value="${date}"></td>
            <td>
              <select id="statusTask" value="${status}">
                <option value=""></option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
                <option value="Not started">Not started</option>
              </select></td>
            <td><input id="commentTask" type="text" value="${comment}"></td> 
            <td class="deleteBtnField"><button class="deleteBtn">X</button></td>
        `;
        table.appendChild(row);
    });
    checkCountNotes();
}

window.addEventListener('load', loadNotes);
window.addEventListener('beforeunload', saveNotes);
table.addEventListener('click', deleteTask);
addBtn.addEventListener('click', createTask);