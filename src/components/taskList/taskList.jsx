import TaskCard from '../taskCard/taskCard'

function TaskList({tasks, onEdit, onDone, onDelete})
{
    return (
        // <h1>This is task list component</h1>
        <div>
            {tasks.map((task) => {
                if(task.isDone===false)
                {
                    return (<TaskCard key={task.id} id={task.id} task={task.task} onEd={onEdit} onDn={onDone} onDel={onDelete} />)
                }
            }
            )}      
        </div>
    );
}
export default TaskList;

