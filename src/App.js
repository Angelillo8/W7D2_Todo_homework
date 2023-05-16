import { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTask] = useState(
    [
      { id: 1, name: "Collect yer messages", priority: "low" },
      { id: 2, name: "Clean bathroom", priority: "high" },
      { id: 3, name: "Car's MOT", priority: "low" },
    ]
  )

  const [newTask, setNewTask] = useState("")
  const [newPriority, setNewPriority] = useState("")

  const completeTask = (taskId) => {
    const newListTasks = tasks.filter((task) => task.id !== taskId)
    setTask(newListTasks)
  }

  // const colourByPriority = (taskPriority) => {
  //   if (taskPriority === "high") {
  //     return "red"
  //   } else {
  //     return "green"
  //   }
  // }

  const listTasks = tasks.map((task) => {
    return (
      <li key={task.id} className={task.priority}>
        {task.name}
        <button onClick={() => completeTask(task.id)}>Complete</button>
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handleRadioButton = (event) => {
    setNewPriority(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const lastTask = tasks.slice(-1)
    const newTaskObj = { id: lastTask[0].id + 1, name: newTask, priority: newPriority};
    const nextItems = [...tasks, newTaskObj];
    setTask(nextItems);
    setNewTask("")
    event.target[1].checked = false
    event.target[2].checked = false
  };



  return (
    <div className="App">
      <h1>Yer thingies tae dae</h1>
      <hr></hr>
      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>Add a new Tae Dae</label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput} />
        <input type="radio" id="high" name="priority" value="high" onClick={handleRadioButton}/>
        <label htmlFor="high">High</label>
        <input type="radio" id="low" name="priority" value="low" onClick={handleRadioButton}/>
        <label htmlFor="low">Low</label>
        <input type="submit" value="Save new Tae Dae" />
      </form>
      <ul>{listTasks}</ul>

    </div>
  );
}


export default App;
