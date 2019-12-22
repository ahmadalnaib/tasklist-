const form= document.querySelector("#task-form");
const taskInput=document.querySelector("#task");
const taskList= document.querySelector(".collection");
const clearBtn=document.querySelector(".clear-tasks");
const filter=document.querySelector("#filter");


// load all event listeners
loadEventListeners();



// load all event listeners
function loadEventListeners(){

  // Dom load event
   
  document.addEventListener("DOMContentLoaded",getTasks);

  // add task event
  form.addEventListener("submit",addTask);

  // delete tasks
  taskList.addEventListener("click",removeTask);

  // CLEAR taskS
  clearBtn.addEventListener("click",clearTasks);

  // filter tasks
  filter.addEventListener("keyup",filterTasks);
  
}
// ----------------------------//

// get tasks from localStorage

function getTasks(){
  let tasks;

if(localStorage.getItem("tasks"===null)){
tasks=[];
} else {
  tasks=JSON.parse(localStorage.getItem("tasks"));
}

tasks.forEach(function(task){
  
// create Element
const li = document.createElement("li");
// add class to li
li.className="collection-item";
// crete text node and append to li
li.appendChild(document.createTextNode(task));

// create a link
const link=document.createElement("a");
// add class
link.className="delete-item secondary-content";

// add icon link
link.innerHTML= "<i class='fa fa-remove'></i>";
// append the link to link
li.appendChild(link);

// append to ul

taskList.appendChild(li);

})

}

function addTask(e){
if(taskInput.value === ''){
  alert("Please fill the Task 😂")
}

// create Element
const li = document.createElement("li");
// add class to li
li.className="collection-item";
// crete text node and append to li
li.appendChild(document.createTextNode(taskInput.value));

// create a link
const link=document.createElement("a");
// add class
link.className="delete-item secondary-content";

// add icon link
link.innerHTML= "<i class='fa fa-remove'></i>";
// append the link to link
li.appendChild(link);

// append to ul

taskList.appendChild(li);


// store in local stroge
storeTaskInLocalStorage(taskInput.value);

// clear input 

taskInput.value="";


e.preventDefault();
}

// store Task in local 

function storeTaskInLocalStorage(task){
let tasks;

if(localStorage.getItem("tasks")===null){
tasks=[];
} else {
  tasks=JSON.parse(localStorage.getItem("tasks"));
}

tasks.push(task);

localStorage.setItem("tasks",JSON.stringify(tasks));
}

// -----------------------------------//

// remove Tasks 

function removeTask(e){
if(e.target.parentElement.classList.contains("delete-item")){

  if(confirm("DO WANT TO DELETE TASK 👀")){
   
    e.target.parentElement.parentElement.remove();

    // remove from ls
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}
}

 function removeTaskFromLocalStorage(taskitem){
  let tasks;

  if(localStorage.getItem("tasks")===null){
  tasks=[];
  } else {
    tasks=JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task,index){
    if(taskitem.textContent===task){
tasks.splice(index,1);

    }
  })
  localStorage.setItem("tasks",JSON.stringify(tasks))

 }

// ------------------------------//

// clear taskS
function clearTasks(e){

taskList.innerHTML='';

clearTasksFromLocalStorage();


}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}

//---------------------------//


// filter tasks 

function filterTasks(e) {

  const text= e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function(task){
       const item=task.firstChild.textContent;
       if(item.toLowerCase().indexOf(text)!= -1){
         task.style.display="block";

       }else{
        task.style.display="none";

       }
  });

}





