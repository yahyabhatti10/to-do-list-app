import './App.css'
import {useState} from 'react'
import TaskInput from './components/taskInput/taskInput'
import TaskList from './components/taskList/taskList'

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(taskDescription)
  {
      const newTask = {
        id: Date.now(),
        task: taskDescription
      };
      console.log(tasks)
      console.log(`New task in handleAddTask Function in App.jsx: ${newTask}`)
      setTasks([...tasks, newTask])
  }
  return (
    <>
      <h1>To Do List App</h1>
      <TaskInput onAdd={handleAddTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
