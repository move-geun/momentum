const toDoForm = document.querySelector(".todo")
const toDoInput = document.querySelector(".todo input")
const toDoList = document.querySelector(".todo-list")
const toDos = []

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function delList(event){
    console.log(event);
    const li = event.target.parentElement;
    li.remove();

}

function addList(newToDo){
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = newToDo;
   const deletbtn = document.createElement("button");
   deletbtn.innerText = "❌";
   li.appendChild(span);
   li.appendChild(deletbtn);
   toDoList.appendChild(li);
   deletbtn.addEventListener("click",delList);
}


function addToDo(event) {
   event.preventDefault();
    const newToDo = toDoInput.value;
    toDos.push(newToDo);
    toDoInput.value = "";
    addList(newToDo);
    saveToDos();

}


toDoForm.addEventListener("submit",addToDo);