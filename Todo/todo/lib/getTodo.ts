import client from "@/db"


export async function getTodo(){
    const todos = await client.todo.findMany({})
    return todos.map(todo=>({
        id:todo.id,
        title:todo.title,
        description:todo.description,
        completed:todo.completed
    }))
}