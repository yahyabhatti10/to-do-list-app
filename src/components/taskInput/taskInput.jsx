import './taskInput.css';

function TaskInput({ taskInput, setTaskInput, onAdd, onUpdate, isEditing }) {
  function handleSubmit(e) {
    e.preventDefault();
    const task = taskInput.trim().toLowerCase();
    console.log(task)
    if (!task) {
        // console.log("Please enter a valid task before adding.")
        alert("Please enter a valid task before adding.");
        return;
    }
    if (isEditing) {
        //   console.log(`Task updated: ${taskInput}`)  
        onUpdate();  
    } 
    else {
        // console.log(`New task added: ${task}`)
      onAdd(task); 
    }
    setTaskInput("");    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter the Task"
      />
      <button type="submit">
        {isEditing ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default TaskInput;
