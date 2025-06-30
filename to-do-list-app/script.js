document.addEventListener("DOMContentLoaded",()=>{
    const todo_input=document.getElementById("todo-input");
const add_task_btn=document.getElementById("add-task-btn");
const todo_list=document.getElementById("todo-list");
let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => {
    renderTasks(task);
});
add_task_btn.addEventListener("click",()=>{
    let task=todo_input.value.trim();
    if(task==="") return;
    let details={
        id:Date.now(),
        text:task,
        completed:false,
    }
    tasks.push(details);
    saveTask();
    todo_input.value="";
    console.log(tasks);
})

function saveTask() {
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
function renderTasks(task) {
    console.log(task);
}
})