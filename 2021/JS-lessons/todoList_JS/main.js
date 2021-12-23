const addTaskBtn = document.getElementById('add-task-btn');
const descrTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks;

let todoItemElems = [];

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task(description) {
    this.description = description;
    this.completed = false;
}

const createTemplate = (task, index) => {
    return `
        <div class="todo-item ${task.completed ? 'checked' : ''}">
                    <div class="description">${task.description}</div>
                    <div class="buttons">
                        <input onclick = "completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
                        <button class="btn-delete">Удалить</button>
                    </div>
                </div>
    `
};

const FillHtml = () => {
    todosWrapper.innerHTML = '';
    if (tasks.length > 0) {
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        })
    }
    todoItemElems = document.querySelectorAll('.todo-item');
}

FillHtml();

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
        todoItemElems[index].classList.add('checked');
    } else {
        todoItemElems[index].classList.remove('checked');
    }
    updateLocal();
    FillHtml();
}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(descrTaskInput.value));
    updateLocal();
    FillHtml();
    descrTaskInput.value='';
})