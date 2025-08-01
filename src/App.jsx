import './App.css'
import {useState} from 'react'
import TaskInput from './components/taskInput/taskInput'
import TaskList from './components/taskList/taskList'

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);  

  function handleAddTask(taskDescription)
  {
      const newTask = {
        id: Date.now(),
        task: taskDescription,
        isDone: false
      };
      console.log(tasks)
      // console.log(`New task in handleAddTask Function in App.jsx: ${newTask}`)
      setTasks([...tasks, newTask])
      alert(`Added Task: ${newTask.task}`)
  }
  
  function handleEditTask(taskID, task) {
    setCurrentTask(task);
    setEditingTask(taskID);
  }

  function handleUpdateTask() 
  {
    let updatedTask;
    const updatedTasks = tasks.map((task) =>{
      if(task.id === editingTask){
        updatedTask = { ...task, task: currentTask } 
        return { ...task, task: currentTask } }
      return task
    }
    );
    console.log(updatedTasks)
    setTasks(updatedTasks);
    alert(`Updated Task: ${updatedTask.task}`)
    setEditingTask(null);
    setCurrentTask('');
  }
  function handleDoneTask(taskID)
  {
      let doneTask;
      const updatedTasks = tasks.map(task => {
      if(task.id==taskID)
      {
          doneTask = task
          return {...task, isDone: true}
      }
      // console.log(task)
      return task  
      })
      console.log(updatedTasks)
      setTasks(updatedTasks)
      alert(`Done Task: ${doneTask.task}`)
    }
  function handleDeleteTask(taskID)
  {
      const deletedTask = tasks.find(task=> task.id === taskID)
      console.log(deletedTask.task)

      const updatedTasks = tasks.filter(task => task!==deletedTask)
      console.log(updatedTasks)
      setTasks(updatedTasks)
      alert(`Deleted Task ${deletedTask.task}`)
  }


  return (
    <>
      <h1>To Do List App</h1>
      <TaskInput
        taskInput={currentTask}
        setTaskInput={setCurrentTask}
        onAdd={handleAddTask}
        onUpdate={handleUpdateTask}
        isEditing={editingTask !== null}
      />
      <TaskList tasks={tasks} onEdit={handleEditTask} onDone={handleDoneTask} onDelete={handleDeleteTask}/>
    </>
  )
}

export default App
