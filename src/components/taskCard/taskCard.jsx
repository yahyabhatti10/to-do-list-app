import './taskCard.css';

function TaskCard({id, task, onEd, onDel})
{
    return (
        <div className='task-card'>
            {task}
            <button className='edit-button' onClick={()=>onEd(id)}>Edit</button>
            <button className='delete-button' onClick={()=>onDel(id)}>Delete</button>
        </div>
    );
}
export default TaskCard;