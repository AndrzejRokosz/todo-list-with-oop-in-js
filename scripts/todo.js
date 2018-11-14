class Task{
    constructor(text){
        this.text=text
    }
}



class ToDoList{
    constructor(){
        this.tasks=["dfsfds","dwdwdwdw","d23d2d2"]

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


}
const todo = new ToDoList()


