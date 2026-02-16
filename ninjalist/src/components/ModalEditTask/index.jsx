import "./ModalEditTask.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageEditTask from "../../assets/imageedittesk.png"
import { updateTask } from "../../services/taskService";
import { useEffect, useState } from "react";


function ModalEditTask({ isOpen, onClose, task, onUpdate }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("LOW")
    const [active, setActive] = useState(true)

    useEffect(() => {

        if (task) {
            setTitle(task.titulo)
            setDescription(task.descricao)
            setPriority(task.prioridade)
            setActive(task.ativo)
        }

    }, [task])

    if (!isOpen) return null

    async function handleUpdate() {
        try {

            const data = {
                titulo: title,
                descricao: description,
                prioridade: priority,
                ativo: active
            }

            const uptadedTask = await updateTask(task.id, data)

            onUpdate(uptadedTask)
            onClose()

        }
        catch (error) {
            console.log("Error updating Task", error);

        }
    }

    return (
        <>
            <div className="modal-backdrop fade show"></div>

            <div
                className="modal fade show"
                style={{ display: "block" }}
                tabIndex="-1"
            >
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Edit Task</h5>
                            <img className="image-edit-task" src={ImageEditTask} alt="weapon edit task" />
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>

                        <div className="modal-body modal-body-task">
                            <label>Title</label>
                            <input
                                className="modal-input"
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            <label>Description</label>
                            <textarea
                                className="modal-input-description"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required>
                            </textarea>

                            <select
                                className="form-select select-priority"
                                aria-label="Default select example"
                                onChange={(e) => setPriority(e.target.value)}
                                value={priority}>
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </select>

                            <div className="form-check form-switch switch-active">
                                <div className="switch-active input-switch">
                                    <label className="label-switch">Active</label>
                                    <input
                                        className="form-check-input input-switch"
                                        type="checkbox"
                                        role="switch"
                                        id="switchCheckChecked"
                                        checked={active}
                                        onChange={(e) => setActive(e.target.checked)}
                                    />
                                </div>

                            </div>


                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleUpdate}
                            >
                                Update
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalEditTask
