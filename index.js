
let addTaskButton = document.getElementById("addTaskButton");

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
  rendeorList();
}
);

function pushObjects(task) {
  addTasks.push(task);
}

function rendeorList() {
  for(let i=0; i< addTasks.length; i++ ) {
    console.log(addTasks.length);
    console.log(addTasks);
    // let task =addTasks(i);
     //console.log("tast : "+task);

  }
}


