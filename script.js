let addTaskButton = document.getElementById("addTaskButton");
let taskTableBody = document.getElementById("taskTableBody");
let taskForm = document.getElementById("taskForm");
let searchCategory = document.getElementById("searchCategory");
let searchStatus = document.getElementById("searchStatus");

// Filter tasks when category or status changes
searchCategory.addEventListener('change', filterTasks);
searchStatus.addEventListener('change', filterTasks);

let addTasks = [];

//add new task
addTaskButton.addEventListener('click', function (event) {
    event.preventDefault();
    let taskValue = document.getElementById("taskname").value.trim();
    let categoryValue = document.getElementById("category").value.trim();
    let deadLineDateValue = document.getElementById("deadLine").value.trim();

    // check that all fields are filled before adding the task
    if (taskValue === "" || categoryValue === "" || deadLineDateValue === "") {
        alert("Please fill all the fields");
        return;
    }

    let task = {
        taskname: taskValue,
        category: categoryValue,
        deadline: deadLineDateValue,
        status: "In Progress"
    };
    addTasks.push(task);
    searchTaskByCategoryOrStatus();
    renderList();
    taskForm.reset();
}
);

// Display all tasks in the table
function renderList() {
    updateTaskStatus();
    taskTableBody.innerHTML = "";

    for (let i = 0; i < addTasks.length; i++) {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `
    <td>${addTasks[i].taskname}</td>
    <td>${addTasks[i].category}</td>
    <td>${addTasks[i].deadline}</td>
    <td>${addTasks[i].status}</td>
    <td><button onClick="editTask(${i})">Edit</button></td>
     `;
        taskTableBody.appendChild(tableRow);

    }
}

//Replace the selected row with input fields for editing
function editTask(index) {
    let row = taskTableBody.rows[index];
    let task = addTasks[index];

    row.innerHTML = `
     <td><input type="text" id="editTaskName-${index}" value="${task.taskname}"></td>
     <td><input type="text" id="editCategory-${index}" value="${task.category}"></td>
     <td> <input type="date" id = "editDeadLine-${index}" value="${task.deadline}"></td>
     <td>
      <select id= "editStatus-${index}">
       <option value="In Progress" ${task.status === "In Progress" ? "selected" : ""}>In Progress</option>
       <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
       <option value="Overdue" ${task.status === "Overdue" ? "selected" : ""}>Overdue</option>
      </select>
     </td>
    <td><button onClick ="saveTask(${index})">Save</button></td>
    `;
}

//save the updated task values
function saveTask(index) {
    let updatedTaskValue = document.getElementById(`editTaskName-${index}`).value.trim();
    let updatedCategory = document.getElementById(`editCategory-${index}`).value.trim();
    let updatedDeadline = document.getElementById(`editDeadLine-${index}`).value.trim();
    let updatedStatus = document.getElementById(`editStatus-${index}`).value.trim();

    // prevent saving if any field is empty
    if (updatedTaskValue === ""
        || updatedCategory === ""
        || updatedDeadline === ""
        || updatedStatus === "") {
        alert("Please fill all the fields");
        return;

    }
    addTasks[index].taskname = updatedTaskValue;
    addTasks[index].category = updatedCategory;
    addTasks[index].deadline = updatedDeadline;
    addTasks[index].status = updatedStatus;
    //renderList();
    searchTaskByCategoryOrStatus();
    filterTasks();

}

// Mark tasks as overdue if the deadline has passed
function updateTaskStatus() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    //let taskUpdated = false;
    for (let i = 0; i < addTasks.length; i++) {
        let taskDeadline = new Date(addTasks[i].deadline);
        taskDeadline.setHours(0, 0, 0, 0);

        if (today > taskDeadline && addTasks[i].status !== "Completed" && addTasks[i].status !== "Overdue") {
            addTasks[i].status = "Overdue";
            //taskUpdated = true;
        }
    }
    //   if(taskUpdated) {
    //     saveTaskToLocalStorage();
    //   }

}
//populate category and status filter options
function searchTaskByCategoryOrStatus() {
    searchCategory.innerHTML = `<option value="">All Categories</option>`;
    let uniqueCategories = [];

    for (let i = 0; i < addTasks.length; i++) {
        if (!uniqueCategories.includes(addTasks[i].category)) {
            uniqueCategories.push(addTasks[i].category);
            let option = document.createElement("option");
            option.value = addTasks[i].category;
            option.textContent = addTasks[i].category;
            searchCategory.appendChild(option);
        }

    }
    searchStatus.innerHTML = `
  <option value="">All</option>
  <option value="In Progress">In Progress</option>
  <option value="Completed">Completed</option>
  <option value="Overdue">Overdue</option>
   `;
}

//show only tasks that match the selected category and status
function filterTasks() {
    updateTaskStatus();
    let selectedCategory = searchCategory.value;
    let selectedStatus = searchStatus.value;
    taskTableBody.innerHTML = "";

    for (let i = 0; i < addTasks.length; i++) {
        let matchedCategory = selectedCategory === "" || addTasks[i].category === selectedCategory;
        let matchedStatus = selectedStatus === "" || addTasks[i].status === selectedStatus;

        if (matchedCategory && matchedStatus) {
            let tableRow = document.createElement("tr");

            tableRow.innerHTML = `
       <td>${addTasks[i].taskname}</td>
       <td>${addTasks[i].category}</td>
       <td>${addTasks[i].deadline}</td>
       <td>${addTasks[i].status}</td>
       <td><button onClick="editTask(${i})">Edit</button></td>
       `;
            taskTableBody.appendChild(tableRow);
        }
    }
}
