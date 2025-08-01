// import {useState} from 'react'
import TaskCard from '../taskCard/taskCard'

function TaskList({tasks})
{
    return (
        <div>
            {tasks.map((task) => (<TaskCard key={task.id} task={task.task}/>
            ))}
            
        </div>
    );
}
export default TaskList;

