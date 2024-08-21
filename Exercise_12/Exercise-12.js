//Create an array of strings representing a list of tasks.
const listoftask=['cooking','singing','dancing','work'];
console.log(listoftask);

//Implement functions to add, remove, update, and display tasks.
//Add new Task
function addTask(newTask){
    listoftask.push(newTask);
    console.log("New Task added");

}
//Remove Task
function removeTask(index){
    if(index>=0 && index < listoftask.length){
        const remove=listoftask.splice(index,1);
        console.log(`Task removed ${remove}`)
    }
    else{
        console.log("Enter valid index");
    }
}
//Update Task
function updateTask(index,newTask){
    if(index>=0 && index < listoftask.length){
        listoftask[index]=newTask;
        console.log(`Task Updated at ${index}`);
    }
    else{
        console.log("Enter valid index");
    }
}
//Display Task
function displayTask(){
    listoftask.forEach(function(tasks, index) {
        console.log(`Task at ${index} is ${tasks}`);
    });
}

addTask("playing");
removeTask(0);
updateTask(1,'swiming');
console.log(listoftask);
displayTask();


//Write a function that searches for a task by name and returns its index.
function searchTask(taskName) {
    if(listoftask.includes(taskName)){
     const index =listoftask.indexOf(taskName);
     console.log(`${taskName} task at ${index}`);
    }
    else {
        console.log("Enter valid Task");
    }
}
searchTask('playing');