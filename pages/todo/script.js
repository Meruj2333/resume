"use strict";
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
let updateTask=null
let base = [
    {
        id: 1,
        text: 'task',
        status: 'Pending'
    },
    {
        id: 2,
        text: 'task',
        status: 'In Progress'
    },
    {
        id: 3,
        text: 'task',
        status: 'Completed'
    },
    {
        id: 4,
        text: 'task',
        status: 'Pending'
    },
    {
        id: 5,
        text: 'task',
        status: 'In Progress'
    },
    {
        id: 6,
        text: 'task',
        status: 'Completed'
    }
]
if (localStorage.getItem('#todoList')) {
    base = JSON.parse(localStorage.getItem('#todoList'));
}

base.forEach(task => {
    addTask(task)
})


$("#todoStatus")
$("#save").onclick = function () {
    if(updateTask){
update()
    }
    else add()

}
function add(){
    let status = $('#todoStatus').value
    let valueInput = $("#todoText")
    if (valueInput.value.trim() === '') {
        return
    }
    let task =
        {
            id: Date.now(),
            text: valueInput.value,
            status
        }
    $(`#todoText`).value=''
    base.push(task)
    localStorage.setItem('#todoList', JSON.stringify(base))
    addTask(task)
}


function addTask(value) {
    const status = value.status === 'Pending' ? 'bg-secondary' : value.status === 'In Progress' ? 'bg-primary' : 'bg-success'
    $('#todoList').innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
            <span class="task-text" data-id="${value.id}">${value.text}#${value.id}</span>
            <span class="badge ${status} ms-2 task-status" data-id="${value.id}">${value.status}</span>
        </div>
        <div>
            <button class="btn btn-sm btn-warning edit-btn" data-id="${value.id}" data-label="edit">Edit</button>
            <button class="btn btn-sm btn-danger delete-btn" data-id="${value.id}" data-label="delete">Delete</button>
        </div>
    </li>`
}

$(`#todoList`).onclick = (function (e) {
    let findData = e.target.getAttribute('data-label')
    if (findData === 'edit') {
editTask(e.target)
    } else if (findData === 'delete') {
        deleteTask(e.target)
    }
})


function editTask(element) {
    const id = +element.getAttribute('data-id')
   updateTask = base.find(task => task.id === id)
$('#todoText').value = updateTask.text
    $('#todoStatus').value = updateTask.status
    $('#save').innerHTML=`Update`


}
function update(){
updateTask.text=$('#todoText').value
    let statusEl=$(`.task-status[data-id="${updateTask.id}"]`)
    updateTask.status= $('#todoStatus').value
    localStorage.setItem('#todoList', JSON.stringify(base))
  $(`.task-text[data-id="${updateTask.id}"]`).innerText=`${updateTask.text}#${updateTask.id}`
    const status = updateTask.status === 'Pending' ? 'bg-secondary' : updateTask.status=== 'In Progress' ? 'bg-primary' : 'bg-success'
    statusEl.classList.remove('bg-primary','bg-success','bg-secondary')
    statusEl.classList.add(status)



    statusEl.innerText=`${updateTask.status}`
    $(`#save`).innerHTML=`Add`
    updateTask=null
    $('#todoText').value=''


}
function deleteTask(element) {
    const id = +element.getAttribute('data-id')

    base = base.filter(task => task.id !== id)
    localStorage.setItem('#todoList', JSON.stringify(base))
    element.closest('li').remove()
}