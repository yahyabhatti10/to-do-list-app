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
        task: taskDescription,
        isDone: false
      };
      console.log(tasks)
      console.log(`New task in handleAddTask Function in App.jsx: ${newTask}`)
      setTasks([...tasks, newTask])
  }

  function handleDeleteTask(taskID)
  {
      const updatedTasks = tasks.map(task => {
        if(task.id==taskID)
        {
            // task = {...task, isDone: true}
            return {...task, isDone: true}
        }
        // console.log(task)
        return task  
      })
      // console.log(updatedTasks)
      setTasks(updatedTasks)


  }

  function handleEditTask(taskID)
  {
    console.log(taskID)
  }
  return (
    <>
      <h1>To Do List App</h1>
      <TaskInput onAdd={handleAddTask}/>
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask}/>
    </>
  )
}

export default App
