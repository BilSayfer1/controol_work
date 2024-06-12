let todos = [
    {
        time: new Date().toDateString(),
    }
];

function openModal() {
   let task_modal = document.getElementById("task_modal")
   task_modal.style.display = "block";
}

function closeModal() {
    let task_modal = document.getElementById("task_modal")
    task_modal.style.display = "none"

}

function addTask(e) {
    e.preventDefault();

    const taskName = document.getElementById("task_name").value;
    const taskCategory = document.getElementById("task_category").value;
    const taskOptions = document.getElementById("task_options").value
    const taskDate = todos[0].time;

    const newTaskCategory = document.createElement("div");
    newTaskCategory.className = "task-category";
    newTaskCategory.innerHTML = `
        <h2 class="osnova">${taskCategory}</h2>
        <ul>
            <li>
                <textarea>${taskName}</textarea>
                <br>
                <span class="due-date">Due: ${taskDate}</span>
                <button class="delete-btn"><img src="./img/icons8-кнопка-удалить-50.png" alt=""></button>
            </li>
        </ul>
    `;

   let box = document.querySelector(".box")
   box.append(newTaskCategory);


   let deleteBtn = newTaskCategory.querySelector(".delete-btn");
   deleteBtn.onclick = () => {
    newTaskCategory.remove();
};

  let task_form = document.getElementById("task_form")
  task_form.reset();
    closeModal();
}
