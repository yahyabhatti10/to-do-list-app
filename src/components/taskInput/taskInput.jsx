import {useState} from 'react'

function TaskInput({onAdd})
{
    const [taskInput, setTaskInput] = useState("")

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const task = taskInput.trim().toLowerCase();
        console.log(task)
        if (!task) {
            // console.log("Please enter a valid task before adding.")
            alert("Please enter a valid task before adding.");
            return;
        }
        // console.log(`New task added: ${task}`)
        alert(`New task added: ${task}`);
        setTaskInput("");
        onAdd(task);
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Enter your task"
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
export default TaskInput;
