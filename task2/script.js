document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Add Task
    const addTask = (event) => {
        event.preventDefault(); // prevent form submission

        const taskText = taskInput.value.trim();
        if (!taskText) return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-btn"><i class="fa fa-pen"></i></button>
            <button class="delete-btn"><i class="fa fa-trash"></i></button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    };

    // Handle Delete and Edit
    taskList.addEventListener('click', (e) => {
        const target = e.target;
        const li = target.closest('li');

        if (target.closest('.delete-btn')) {
            li.remove();
        }

        if (target.closest('.edit-btn')) {
            const span = li.querySelector('.task-text');
            const newTask = prompt('Update your task:', span.textContent);
            if (newTask !== null && newTask.trim() !== '') {
                span.textContent = newTask.trim();
            }
        }
    });

    // Add via button or Enter key
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask(e);
    });
});
