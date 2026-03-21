
let addTaskButton = document.getElementById("addTaskButton");
let taskTableBody = document.getElementById("taskTableBody");

let addTasks = [];

addTaskButton.addEventListener('click', function (event) {
  event.preventDefault();
  let taskValue = document.getElementById("taskname").value;
  let categoryValue = document.getElementById("category").value;
  let deadLineDateValue = document.getElementById("deadLine").value;
  let task = {
    taskname: taskValue,
    category: categoryValue,
    deadlin: deadLineDateValue,
    status: "In Progress"
  };
  pushObjects(task);
  renderList();

  document.getElementById("taskForm").reset();
}
);

function pushObjects(task) {
  addTasks.push(task);
}

function renderList() {
  console.log(addTasks);
  taskTableBody.innerHTML = "";
  for (let i = 0; i < addTasks.length; i++) {
    let tableRow = document.createElement("tr");

    for (let key in addTasks[i]) {
      let tableData = document.createElement("td");
      tableData.textContent = addTasks[i][key];
      tableRow.appendChild(tableData);
    }
    taskTableBody.appendChild(tableRow);

  }
}


