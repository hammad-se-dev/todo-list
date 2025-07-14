import { useState } from "react"

function ToDoList(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value) 
        // document.getElementById('list-item').value = ''
    }

    function addTask(){
        setTasks(t => [...t, newTask])
        document.getElementById('list-item').value = ''
        
    }

    function deleteTask(index){
        setTasks(tasks.filter((_,i) => i!==index))
    }

    function moveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks]
            const a = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index-1]
            updatedTasks[index-1] = a
            setTasks(updatedTasks)
        }
    }

    function moveDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks]
            const a = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index+1]
            updatedTasks[index+1] = a
            setTasks(updatedTasks)
        }
    }
 
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div className="input-div">
                <input type="text" onChange={handleInputChange} id="list-item" placeholder="Enter your text..." />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ul>
                {
                    tasks.map((task,index) => 
                    <li key={index}>
                        <span className="text">{task} </span>
                        <button className="delete-button " onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveUp(index)}>⬆️</button>
                        <button className="move-button" onClick={() => moveDown(index)}>⬇️</button>
                        <button></button>
                    </li>)
                }
            </ul>
        </div>
    )
}
export default ToDoList