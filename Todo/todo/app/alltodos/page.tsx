import {getTodo} from "@/lib/getTodo"
import TodoInfo from "@/components/card"
export default async function allTodo(){
    const todos = await getTodo();
    return <div className="border-sm p-3 m-3 justify-center text-center">
        {todos.map(todo=>(
            <TodoInfo key ={todo.id} title={todo.title} description={todo.description} completed={todo.completed}></TodoInfo>
        ))}
    </div>
}