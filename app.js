const form= document.querySelector("#task-form");
const taskInput=document.querySelector("#task");
const taskList= document.querySelector(".collection");
const clearBtn=document.querySelector(".clear-tasks");
const filter=document.querySelector("#filter");

loadEventListeners();


function loadEventListeners(){

  form.addEventListener("submit",addTask);
  
}
function addTask(e){
if(taskInput.value === ''){
  alert("Please fill the Task")
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
link.innerHTML="<i class='fa fa-remove'></i>";
// append the link to link
li.appendChild(link);

// append to ul

taskList.appendChild(li);

// clear input 

taskInput.value="";








  e.preventDefault();
}