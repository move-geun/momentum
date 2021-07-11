const toDoForm = document.querySelector(".todo")
const toDoInput = document.querySelector(".todo input")
const toDoList = document.querySelector(".todo-list")
let toDos = []

const TODO_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function delList(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function addList(newToDo){
   const li = document.createElement("li");
   li.id = newToDo.id;
   const deletbtn = document.createElement("button");
   deletbtn.innerText = "✔";
   const span = document.createElement("span");
   span.innerText = newToDo.text;
   
   li.classList.add("todoSpan")
   li.appendChild(deletbtn);
   li.appendChild(span);
   toDoList.appendChild(li);
   deletbtn.addEventListener("click",delList);
}


function addToDo(event) {
   event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";    
    const newTdoObj = {
        text:newToDo,
        id:Date.now(),
    };                           
    toDos.push(newTdoObj);
    addList(newTdoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",addToDo);

const savedToDos = localStorage.getItem(TODO_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(addList);

}