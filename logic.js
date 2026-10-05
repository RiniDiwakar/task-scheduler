const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {

    const task = taskInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    // Check whether task and deadline are entered
    if (task.trim() === "" || deadline === "") {
        alert("Please enter a task and select a deadline.");
        return;
    }

    // Convert deadline into a Date object
    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    // Check whether deadline is in the future
    if (selectedDate <= currentDate) {
        alert("Please select an upcoming date for the deadline.");
        return;
    }

    // Create a new task container
    const taskItem = document.createElement("div");

    taskItem.classList.add("task");

    // Add task information inside the container
    taskItem.innerHTML = `
        <p>${task}</p>
        <p>Priority: ${priority}</p>
        <p>Deadline: ${deadline}</p>
        <button class="mark-done">Mark Done</button>
    `;

    // Add the task to the task list
    taskList.appendChild(taskItem);

    // Clear the form
    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";
});


// Handle the Mark Done button
taskList.addEventListener("click", (event) => {

    if (event.target.classList.contains("mark-done")) {

        const taskItem = event.target.parentElement;

        taskItem.style.backgroundColor = "#f2f2f2";

        event.target.disabled = true;
    }

});