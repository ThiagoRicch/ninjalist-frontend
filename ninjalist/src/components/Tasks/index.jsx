import "./Tasks.css"
import { useState, useEffect } from "react"
import NavBarAfterLogin from "../NavBarAfterLogin"
import ModalNewTask from "../ModalNewTask"
import TaskReady from "../TaskReady"
import { getTask } from "../../services/taskService"

function Tasks() {

    const [openModal, setOpenModal] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        loadTasks()
    }, [])

    async function loadTasks() {

        const data = await getTask()
        setTasks(data)

    }

    function handleNewTasks(task) {
        setTasks(prev => [...prev, task])
    }

    function handleUpdateTasks(updateTask){
        setTasks(prev =>
            prev.map(task =>
                task.id === updateTask.id ? updateTask : task
            )
        )
    }

    function handleDeleteTasks(id){
        setTasks(prev => prev.filter(task => task.id !== id))
    }


    return (<>
        <NavBarAfterLogin />

        <div className="tasks-container">
            <h1>Add your Tasks!</h1>
            <button onClick={() => setOpenModal(true)} className="add-tasks-button">+</button>
        </div>
        <div className="tasks-list">
            {tasks.map(task => (
                <TaskReady 
                    key={task.id} 
                    task={task}
                    onUpdate={handleUpdateTasks}
                    onDelete={handleDeleteTasks} />
            ))}
        </div>

        <ModalNewTask
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            newTask={handleNewTasks}
        />
    </>
    )
}

export default Tasks