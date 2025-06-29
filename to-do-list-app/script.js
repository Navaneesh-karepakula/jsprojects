const todo_input=document.getElementById("todo-input");
const add_task_btn=document.getElementById("add-task-btn");
const todo_list=document.getElementById("todo-list");
let tasks=[];
add_task_btn.addEventListener("click",()=>{
    let task=todo_input.value.trim();
    if(task==="") return;
    let details={
        id:Date.now(),
        text:task,
        completed:false,
    }
    tasks.push(details);
    todo_input.value="";
    console.log(tasks);
})