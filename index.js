const addBtn = document.getElementById("add__button");
const input = document.getElementById("input");
const taskList = document.querySelector(".task__container");

const addTask = (event) => {
	event.preventDefault();
	const currTask = document.createElement("div");
	currTask.className = "task";
	currTask.innerHTML = `
    
    <span class="task__text">
        ${input.value}
    </span>
    <button id="edit__button" onclick="editTask(event)">
        edit
    </button>
    <button id="delete__button" onclick=deleteTask(event)>
        delete
    </button>

    `;
	taskList.appendChild(currTask);
	input.value = "";
};

const deleteTask = (event) => {
	event.preventDefault();
	const parentDiv = event.target.parentElement;
	parentDiv.remove();
	console.log(parentDiv);
};

const editTask = (event) => {
	if (event.target.innerText === "EDIT") {
		event.target.previousElementSibling.remove();
		const edit = document.createElement("input");
		edit.className = "task__text";
		event.target.parentElement.prepend(edit);
		event.target.innerText = "Done";
		event.target.style.backgroundColor = "green";
		edit.focus();
	} else {
		const editedTask = event.target.previousElementSibling.value;
		event.target.previousElementSibling.remove();
		const editDisplay = document.createElement("span");
		editDisplay.className = "task__text";
		editDisplay.innerText = editedTask;
		event.target.parentElement.prepend(editDisplay);
	}
};
