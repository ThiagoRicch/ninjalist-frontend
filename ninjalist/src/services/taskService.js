import {api} from "./api"


export async function createTask(data)
{
    const response = await api.post("/task/me",data)
    return response.data
}

export async function getTask()
{
    const response = await api.get("/task/me")
    return response.data
}

export async function updateTask(id, data)
{
    const response = await api.put(`/task/${id}`,data)
    return response.data
}

export async function deleteTask(id)
{
    await api.delete(`/task/${id}`)

}