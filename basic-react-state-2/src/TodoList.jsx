import { useState } from "react"

export default function TodoList(){
    let [todos, setTodos] = useState(["Sample Task"]);

    return (
        <div>
            <input placeholder="Add a Task" />
            <br /><br />
            <button>Add Task</button>
            <br /><br />
            <br /><br />
            <br /><br />

            <hr />
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}