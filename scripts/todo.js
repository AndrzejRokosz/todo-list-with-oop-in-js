class Task{
    constructor(text){
        this.text=text
    }
}



class ToDoList{
    constructor(){
        this.tasks=[]

        this.render()
    }


render(){
    document.body.innerHTML=''

    const ul= document.createElement('ul')
    this.tasks.forEach(task=>{
        const li=document.createElement('li')
        li.innerText=task.text
        ul.appendChild(li)
    })
    document.body.appendChild(ul)

}

addTaskToList(text){
    this.tasks.push(new Task(text))
    this.render()
}


}
const todo = new ToDoList()
todo.addTaskToList("ggggg")
todo.addTaskToList("sdcscsc")


