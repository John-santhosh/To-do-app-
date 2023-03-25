// Accessing elements

let addBtn = document.querySelector("#task-add");
let parent = document.querySelector(".children");
let task = document.querySelector("#parent-input");
let sessionArray = [];
let count = 0;

// adding a task
addBtn.addEventListener("click", preChecking);

// checking input field for empty input box before processing
function preChecking() {
  return task.value ? createTask() : alert("No Task added");
}

// creating previous elements on page load
if (sessionArray == false) {
  let json = localStorage.getItem("task");
  let data = JSON.parse(json);
  data.forEach((each) => {
    task.value = each;
    createTask();
  });
}
function createTask() {
  const inputValue = task.value;
  //
  sessionArray.push(inputValue);
  let json = JSON.stringify(sessionArray);
  localStorage.setItem("task", json);
  //
  task.value = "";
  // creating the task

  const childDiv = document.createElement("div");
  childDiv.classList.add("child", "row");
  childDiv.setAttribute("data-position", `${count}`);
  parent.append(childDiv);

  let createdChild = `
        <input class="col-10" disabled data-id="input">
        <button class="col-1 d-none" data-id="done">✔️</button>
        <button class="col-1" data-id="edit" id="editTask">✏️</button>
        <button class="col-1" data-id="delete" id="deleteTask">🗑️</button>`;
  childDiv.innerHTML += createdChild;

  childDiv.firstElementChild.value = inputValue;

  childDiv.addEventListener("click", function (e) {
    if (e.target.dataset.id == "delete") {
      // removing the item from local storage
      let json = localStorage.getItem("task");
      let data = JSON.parse(json);
      let position = parseInt(e.currentTarget.dataset.position);
      data.splice(position, position + 1);
      localStorage.setItem("task", JSON.stringify(data));

      // button action
      e.currentTarget.remove();
      count--;

      // body image
    }
    if (e.target.dataset.id == "edit") {
      const currentInput = this.firstElementChild;
      const doneButton = currentInput.nextElementSibling;

      currentInput.removeAttribute("disabled");
      currentInput.classList.replace("col-10", "col-9");
      doneButton.classList.remove("d-none");
    }
    if (e.target.dataset.id == "done") {
      const currentInput = this.firstElementChild;
      const doneButton = currentInput.nextElementSibling;
      currentInput.setAttribute("disabled", "");
      currentInput.classList.replace("col-9", "col-10");
      doneButton.classList.add("d-none");
    }
  });
  count++;
  if (count == 0) {
    parent.firstElementChild.style.display = "block";
  } else {
    parent.firstElementChild.style.display = "none";
  }
}

// footer year
let footer = document.querySelector("footer p");
footer.innerHTML = `Copyright &copy; ${new Date().getFullYear()} John santhosh`;
