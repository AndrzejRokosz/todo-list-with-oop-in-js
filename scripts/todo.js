class Task {
    constructor(text) {
        this.text = text


        this.isCompleted = false
       
    }

}



class ToDoList {
    constructor() {

        this.tasks = []
       
        this.render()
    }


    render() {

        document.body.innerHTML = ''
        this.promptFormForAddingTask()
       
        const ul = document.createElement('ul')
        ul.className = 'todo-list'
        this.tasks.forEach((task, taskIndex) => {
            const li = document.createElement('li')
            const removeTaskButton = document.createElement('div')
            const removeIcon = document.createTextNode("\u00D7")

            li.classList.add('task')
            removeTaskButton.className = 'delete-task-button'

            li.addEventListener('click', (event) => {
                event.target.classList.add('task--completed')
                task.isCompleted=true
            })

            removeTaskButton.addEventListener('click', () => {
                ul.removeChild(li)
                this.tasks = this.tasks.slice(0, taskIndex).concat(this.tasks.slice(taskIndex + 1, this.tasks.length))
                this.render()
            })

            removeTaskButton.appendChild(removeIcon)
            li.innerText = task.text
            if(task.isCompleted){
                li.style.textDecoration="line-through"
                li.style.textDecorationColor='green'
            }

            li.appendChild(removeTaskButton)
            ul.appendChild(li)
        })
        document.body.appendChild(ul)

    }


    addTaskToList(text) {
        if (text == '' || text == null) {
            alert("Empty task")
        } else {
            this.tasks.push(new Task(text))
            console.log(this.tasks)
        }
        this.render()
    }


    promptFormForAddingTask() {
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.innerText = 'Add task'

        button.addEventListener('click', () => this.addTaskToList(input.value))
        document.body.appendChild(input)
        document.body.appendChild(button)

    }


}
const todo = new ToDoList()



