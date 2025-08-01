import './taskCard.css';

function TaskCard({id, task, onEd, onDn, onDel})
{
    return (
        // <h1>This is Task Card component</h1>
        <div className='task-card'>
            {task}
            <button className='edit-button' onClick={()=>onEd(id, task)}>Edit</button>
            <button className='done-button' onClick={()=>onDn(id)}>Done</button>
            <button className='delete-button' onClick={()=>onDel(id)}>Delete</button>
        </div>
    );
}
export default TaskCard;