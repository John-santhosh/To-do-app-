// Accessing elements

let addBtn = document.querySelector("#task-add");
// let removeText = document.querySelector("#remove-taskText");
let parent = document.querySelector(".children");
let task = document.querySelector("#parent-input");

let deleteIcon = document.querySelector("#deleteTask");

// adding a task
addBtn.addEventListener("click", preChecking);

// removing text from the input field
// removeText.addEventListener("click", clearParentText);
function clearParentText() {
  task.value = "";
}

// checking input field for empty input box before processing
function preChecking() {
  return task.value ? createTask() : alert("No Task added");
}

// creating the task
function createTask() {
  // let createdChild = `<div class="child row">
  //           <input class="col-10" disabled="">
  //           <button class="col-1 d-none">✔️</button>
  //           <button class="col-1" id="editTask">✏️</button>
  //           <button class="col-1" id="deleteTask">🗑️</button>
  //         </div>`;
  // parent.innerHTML = createdChild;
  // return;
  // creating elements
  let div = document.createElement("div");
  let input = document.createElement("input");
  let editButton = document.createElement("button");
  let deleteTaskButton = document.createElement("button");
  let saveEditButton = document.createElement("button");

  // adding attributes and textContent to the newly created elements
  div.classList.add("child");
  div.classList.add("row");

  input.classList.add("col-10");
  input.value = task.value;
  input.disabled = true;

  editButton.classList.add("col-1");
  editButton.setAttribute("id", "editTask");
  editButton.textContent = "✏️";

  deleteTaskButton.classList.add("col-1");
  deleteTaskButton.id = "deleteTask";
  deleteTaskButton.textContent = "🗑️";
  deleteTaskButton.addEventListener("click", () => div.remove());

  saveEditButton.classList.add("col-1");
  saveEditButton.textContent = "✔️";

  editButton.addEventListener("click", () => {
    input.disabled = false;
    input.classList.remove("col-10");
    input.classList.add("col-9");
    // making the done button (✔️) visible once the user click edit button(✏️)
    saveEditButton.classList.remove("d-none");
    // creating an done button (✔️) once the user click the edit icon (✏️)
    div.firstElementChild.after(saveEditButton);

    // done button (✔️) actions
    saveEditButton.addEventListener("click", function () {
      input.disabled = true;
      // hiding the edit button once the user clicked (✔️) icon
      saveEditButton.classList.add("d-none");
      input.classList.remove("col-9");
      input.classList.add("col-10");
    });
  });

  div.appendChild(input);
  div.appendChild(editButton);
  div.appendChild(deleteTaskButton);
  parent.appendChild(div);

  // clearing the text inside input field when task is added
  clearParentText();
}

// let currentYear = ;
let footer = document.querySelector("footer p");
footer.innerHTML = `Copyright &copy; ${new Date().getFullYear()} John santhosh`;

let newBtn = document.querySelector(".newNote");
newBtn.addEventListener("click", () => {
  let newList = new DocumentFragment();
});

function getdate() {
  let date = new Date();
  console.log(date);
  console.log(date.getDate(), date.getMonth(), date.toLocaleTimeString());
}

getdate();
