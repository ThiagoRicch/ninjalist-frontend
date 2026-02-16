import "./TaskReady.css"
import ImageKunai from "../../assets/imagekunai.png"
import ImageSmokeNinja from "../../assets/imagesmokeninja.png"
import ModalEditTask from "../ModalEditTask"
import ModalDeleteTask from "../ModalDeleteTask"
import { useState } from "react"



function TaskReady({ task, onUpdate, onDelete }) {

    const priorityClass = `priority-${task.prioridade?.toLowerCase()}`
    const activeClass = task.ativo ? "active-true" : "active-false"
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    return (
        <>

            <div className="tasks-ready-container">
                <div className={`body-task-ready ${priorityClass}`}>
                    <h5 className="task-ready-title">{task.titulo}</h5>
                    <p className="task-ready-description">{task.descricao}</p>
                    <p className="task-ready-data">{task.datatask}</p>
                    <span className={`status-circle ${activeClass}`}></span>
                    <span className="task-ready-active">{task.ativo ? "Active" : "Inactive"}</span>
                    <div>
                        <button
                            className="button-kunai"
                            onClick={() => setOpenEditModal(true)}>
                            <img className="image-kunai" src={ImageKunai} alt="Image kunai" />
                        </button>
                        <button
                            className="button-smoke"
                            onClick={() => setOpenDeleteModal(true)}>
                            <img className="image-smoke" src={ImageSmokeNinja} alt="Image smoke ninja" />
                        </button>
                    </div>
                </div>
            </div>

            <ModalEditTask
                isOpen={openEditModal}
                onClose={() => setOpenEditModal(false)}
                task={task}
                onUpdate={onUpdate}
            />

            <ModalDeleteTask
                isOpen={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
                task={task}
                onDelete={onDelete}
            />

        </>)
}

export default TaskReady
