const table = document.getElementById('table');

const addBtn = document.getElementById('addTaskBtn');

function createTask(){
    const name = document.getElementById('nameTaskInput').value;
    const date = document.getElementById('dateTaskInput').value;
    const status = document.getElementById('statusTaskInput').value;
    const comment = document.getElementById('commentTaskInput').value;

    const row = document.createElement('tr');
    row.classList.add('noteRow');
    row.innerHTML = `
        <td><textarea id="nameTaskInput" class="nameTask">${name}</textarea></td>
        <td><input id="dateTaskInput" type="date" class="dateTask" value="${date}"></td>
        <td>
          <select id="statusTaskInput" class="statusTask">
            <option value=""></option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
            <option value="Not started">Not started</option>
          </select>
        </td>
        <td><textarea id="commentTaskInput" class="commentTask">${comment}</textarea></td> 
        <td class="deleteBtnField"><button class="deleteBtn">X</button></td>
    `;
    table.appendChild(row);

    // Встановлюємо значення select після вставки
    row.querySelector('.statusTask').value = status;

    checkCountNotes();
}

function deleteTask(event){
    if(event.target.classList.contains('deleteBtn')){
        const row = event.target.closest('.noteRow');
        row.remove();
    }
}function saveNotes(){
    const notes = document.querySelectorAll('.noteRow');
    const notesArray = [];
    notes.forEach(note => {
        const name = note.querySelector('.nameTask').value;
        const date = note.querySelector('.dateTask').value;
        const status = note.querySelector('.statusTask').value;
        const comment = note.querySelector('.commentTask').value;
        notesArray.push({name, date, status, comment});
    });
    localStorage.setItem('notes', JSON.stringify(notesArray));
}
function checkCountNotes(){
    const notes = document.querySelectorAll('.noteRow');
    const countNotes = document.getElementById('countNotes');
    console.log(notes.length);
}
function loadNotes(){
    const notesArray = JSON.parse(localStorage.getItem('notes')) || [];
    notesArray.forEach(({name, date, status, comment}) => {
        const row = document.createElement('tr');
        row.classList.add('noteRow');
        row.innerHTML = `
            <td><textarea id="nameTaskInput" class="nameTask">${name}</textarea></td>
                    <td><input id="dateTaskInput" type="date" class="dateTask" value="${date}"></td>
                    <td>
                        <select id="statusTaskInput" class="statusTask">
                            <option value=""></option>
                            <option value="In progress">In progress</option>
                            <option value="Done">Done</option>
                            <option value="Not started">Not started</option>
                        </select>
                    </td>
                    <td><textarea id="commentTaskInput" class="commentTask">${comment}</textarea></td> 
                    <td class="deleteBtnField"><button class="deleteBtn">X</button></td>
        `;
        table.appendChild(row);

        // Встановлюємо значення select
        row.querySelector('.statusTask').value = status;
    });
    checkCountNotes();
}
window.addEventListener('load', loadNotes);
window.addEventListener('beforeunload', saveNotes);
table.addEventListener('click', deleteTask);
addBtn.addEventListener('click', createTask);

function autoResizeTextarea(event) {
    const textarea = event.target;
    if (textarea.tagName.toLowerCase() === 'textarea') {
        textarea.style.height = 'auto'; // Скидаємо висоту, щоб обчислити нову
        textarea.style.height = `${textarea.scrollHeight}px`; // Встановлюємо висоту відповідно до вмісту
    }
}
document.addEventListener('input', autoResizeTextarea);

function deleteTask(event){
    if(event.target.classList.contains('deleteBtn')){
        const row = event.target.closest('.noteRow');
        row.remove();
    }
}function saveNotes(){
    const notes = document.querySelectorAll('.noteRow');
    const notesArray = [];
    notes.forEach(note => {
        const name = note.querySelector('.nameTask').value;
        const date = note.querySelector('.dateTask').value;
        const status = note.querySelector('.statusTask').value;
        const comment = note.querySelector('.commentTask').value;
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
            <td><textarea id="nameTaskInput" class="nameTask">${name}</textarea></td>
                    <td><input id="dateTaskInput" type="date" class="dateTask" value="${date}"></td>
                    <td>
                        <select id="statusTaskInput" class="statusTask">
                            <option value=""></option>
                            <option value="In progress">In progress</option>
                            <option value="Done">Done</option>
                            <option value="Not started">Not started</option>
                        </select>
                    </td>
                    <td><textarea id="commentTaskInput" class="commentTask">${comment}</textarea></td> 
                    <td class="deleteBtnField"><button class="deleteBtn">X</button></td>
        `;
        table.appendChild(row);
        
        // Встановлюємо значення select
        row.querySelector('.statusTask').value = status;
    });
    checkCountNotes();
}
window.addEventListener('load', loadNotes);
window.addEventListener('beforeunload', saveNotes);
table.addEventListener('click', deleteTask);
addBtn.addEventListener('click', createTask);

function autoResizeTextarea(event) {
    const textarea = event.target;
    
    if (textarea.tagName.toLowerCase() === 'textarea') {
        textarea.style.height = 'auto'; // Скидаємо висоту, щоб обчислити нову
        textarea.style.height = `${textarea.scrollHeight}px`; // Встановлюємо висоту відповідно до вмісту
        
    }
}
document.addEventListener('input', autoResizeTextarea);

