document
  .querySelector(".my_input_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let inputele = document.getElementById("inputele");
    let tasks = document.querySelector(".tasks");

    if (inputele.value == "") {
      alert("Please enter a value");
    } else {
      let newEle = document.createElement("ul");
      newEle.innerHTML = `
        <span>${inputele.value}</span>
        <i class="fas fa-edit edit-icon"></i>
        <i class="fas fa-trash-alt delete-icon"></i>
      `;
      newEle.classList.add("task-item");
      tasks.appendChild(newEle);
      inputele.value = "";

      newEle.querySelector(".edit-icon").addEventListener("click", function () {
        editTask(newEle);
      });

      function editTask(taskElement) {
        let taskTextElement = taskElement.querySelector("span");
        let taskText = taskTextElement.textContent;
        let newText = prompt("Edit task:", taskText);
        if (newText !== null && newText.trim() !== "") {
          taskTextElement.textContent = newText;
        }
      }

      newEle.querySelector(".delete-icon").addEventListener("click", remove);
      function remove() {
        newEle.remove();
      }
    }
  });
