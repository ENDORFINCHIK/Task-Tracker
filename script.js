const table = document.getElementById('table');

const addBtn = document.getElementById('addTaskBtn');

function createTask(){
    const name = document.getElementById('nameTask').value;
    const date = document.getElementById('dateTask').value;
    const status = document.getElementById('statusTask').value;
    const comment = document.getElementById('commentTask').value;
    if(name === '' || date === '' || status === '' || comment === ''){
        alert('Please fill in all fields');
        return;
    }
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${date}</td>
        <td>
          <select id="statusTask" selected="${status}">
            <option value="do">In progress</option>
            <option value="done">Done</option>
            <option value="started">Not started</option>
          </select></td>
        <td><input type="text" value="${comment}"></td>
    `;
    table.appendChild(row);
    document.getElementById('nameTask').value = '';
    document.getElementById('dateTask').value = '';
    document.getElementById('statusTask').value = '';
    document.getElementById('commentTask').value = '';
}

addBtn.addEventListener('click', createTask);