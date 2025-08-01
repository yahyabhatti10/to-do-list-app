// import {useState} from 'react'
import TaskCard from '../taskCard/taskCard'

function TaskList({tasks, onEdit, onDelete})
{
    return (
        <div>
            {tasks.map((task) => {
                if(task.isDone===false)
                {
                    return (<TaskCard key={task.id} id={task.id} task={task.task} onEd={onEdit} onDel={onDelete} />)
                }
            }
            )}      
        </div>
    );
}
export default TaskList;

