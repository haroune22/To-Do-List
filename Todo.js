import './Todo.css';

function Todo(props){
    return <div id="todo" className={props.done ? "done" : "not_done"}>
        <div>
            <input
                type="checkbox"
                checked={props.done}
                onClick={(e) => props.handleCheck(e, props.index)}
            />
            <p className={props.done ? "task_done":""}>
                {props.todo}
            </p>    
        </div>

        <button onClick={(e) => props.handleDelete(e, props.index)}>
            X Delete
        </button>
    </div>
}

export default Todo;