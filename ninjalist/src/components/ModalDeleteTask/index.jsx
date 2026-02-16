import "./ModalDeleteTask.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageDeleteTask from "../../assets/imagedeletetesk.png"
import { deleteTask } from "../../services/taskService"


function ModalDeleteTask({ isOpen, onClose, task, onDelete }) {

    if (!isOpen) return null

    async function handleDelete() {
        try {

            await deleteTask(task.id)

            onDelete(task.id)
            onClose()

        }
        catch (error) {
            console.log("Error deleting Task", error);

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
                            <h5 className="modal-title">Delete Task</h5>
                            <img className="image-delete-task" src={ImageDeleteTask} alt="weapon edit task" />
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="question-delete">
                            <h5>Are you sure?</h5>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ModalDeleteTask
