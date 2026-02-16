import "./ModalNewTask.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageNewTask from "../../assets/imagenewtesk.png"
import { createTask } from "../../services/taskService"
import { useState } from "react";


function ModalNewTask({ isOpen, onClose, newTask }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("LOW")

    if (!isOpen) return null

    async function handleAdd()
    {
        try{

            const data = {
                titulo : title,
                descricao: description,
                prioridade: priority
            }

            const savedTask = await createTask(data)

            newTask(savedTask)
            onClose()

            setTitle("")
            setDescription("")
            setPriority("LOW")

        }
        catch(error)
        {
            console.log("Error creating Task", error);
            
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
                            <h5 className="modal-title">New Task</h5>
                            <img className="image-new-task" src={ImageNewTask} alt="pappler new task" />
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
                                <option selected>Select a priority</option>
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </select>
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
                                onClick={handleAdd}
                            >
                                Add
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalNewTask
