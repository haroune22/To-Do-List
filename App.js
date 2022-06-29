import Todo from "./pages/Todo";
import { useState, useRef } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef(null);

  function handleClick(e){
    const val = inputRef.current.value;
    inputRef.current.value = "";
    setTodoList([...todoList, {
      done: false,
      value: val
    }])
  }

  function handleDelete(e, index) {
    setTodoList(todoList.filter((el, index2) => index2 != index))
  }

  function handleCheck(e, index)
  {
    let temp = [...todoList];
    temp[index].done = e.target.checked
    setTodoList(temp);
  }

  return (
    <div className="App">
      <h1 style={{}}>Create Your To Do List</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '50px',
          justifyContent:'space-between'
        }}
      >
        <input 
          type="text" 
          style={{
            width: "80%",
            height: "40px",
            paddingLeft: "20px"
          }}
          ref={inputRef}
          placeholder="Add a task to do..."
        />
        <button
          style={{
            width: "100px",
            height: "100%"
          }}
          onClick={handleClick}
        >
          + Add
        </button>
      </div>

      {
        todoList.map((el, index) => {
          return(
            <Todo 
              todo={el.value} 
              done={el.done}
              index={index}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          )
        })
      }
    </div>
  );
}

export default App;
