import React, { useState } from 'react'

const Todo = () => {
  const [todo,setTodo] = useState([]);
  const [task,setTask] = useState("");
  const [editing,setEditing] = useState(null);
  const handleAddorupdate = (e) =>{
    if(task.trim()==="")return
    e.preventDefault();
    if(editing!==null){
      const UpdateTodo =[...todo];
      UpdateTodo[editing].task = task;
      setTodo(UpdateTodo);
      setEditing(null)
    }
    else{setTodo([...todo,{task: task,completed: false}])
    }
    setTask("")
  };
  const handleEdit = (index) => {
    setEditing(index);
    setTask(todo[index].task)
  }


  const handleDelete = (index) =>{
  const UpdateTodo = todo.filter((todos,i)=>i!==index);
  setTodo(UpdateTodo)
  };
  const handleToggleComplete = (index) => {
    const UpdateTodo = [...todo];
    UpdateTodo[index].completed = !UpdateTodo[index].completed
    setTodo(UpdateTodo);
  }
return (
    <div>
      <h1>Todo</h1>
      <label>Task : </label>
      <input type="text" placeholder='Enter the task' value={task} onChange={(e)=>setTask(e.target.value)}></input>
      <button onClick={handleAddorupdate}>{editing===null?"Add":"Update"}</button>
      <ul>
        {todo.map((todos,intex)=>(
          <li key={intex}>
            <span onClick={()=>handleToggleComplete(intex)}>{todos.task}</span>
            <button onClick={()=>handleEdit(intex)}>Edit</button>
            <button onClick={()=>handleDelete(intex)}>Delete</button>
          </li>
        ))}
      </ul>
    
    </div>
  )
}

export default Todo
