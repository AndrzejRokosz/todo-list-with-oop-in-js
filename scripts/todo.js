class Task{
    constructor(text,taskId){
        this.text=text
    this.taskId=taskId 
    }

}



class ToDoList{
    constructor(){

        this.tasks=[]
        this.rowIndex
        this.deleteTaskButtonIndex=0
        this.taskId=0
        this.render()
    }


render(){

    document.body.innerHTML=''
    this.promptFormForAddingTask()
    this.rowIndex=0
    const ul= document.createElement('ul')
    ul.className='todo-list'
    this.tasks.forEach(task=>{
        const li=document.createElement('li')
        const deleteTaskButton=document.createElement('div')
        li.className='list-row'
        deleteTaskButton.className='delete-task-button'
        li.id=this.rowIndex++
        deleteTaskButton.id=this.deleteTaskButtonIndex++

        deleteTaskButton.addEventListener('click',()=>{
            console.log('tasks',this.tasks)
            console.log('row',this.rowIndex)
            ul.removeChild(li)
            // this.tasks.slice(0,lili.id.id)
        })
        // 

        li.innerText=task.text
        li.appendChild(deleteTaskButton)
        ul.appendChild(li)
    })
    document.body.appendChild(ul)

}


addTaskToList(text){
    
    if(text==''|| text==null){
        alert("Empty task")
    }else{
        this.taskId++
    this.tasks.push(new Task(text,this.taskId))
        }
   this.render()
}
removeTaskFromList(){
  

//   console.log('rtbr',rowToBeRemoved)
  console.log('removed',this.tasks)
  this.render()
}

promptFormForAddingTask(){
    const input=document.createElement('input')
    const button=document.createElement('button')
    button.innerText='Add task'

    button.addEventListener('click',()=>this.addTaskToList(input.value))
    document.body.appendChild(input)
    document.body.appendChild(button)
     
}


}
const todo = new ToDoList()



