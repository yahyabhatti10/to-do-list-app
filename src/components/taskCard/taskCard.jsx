import './taskCard.css';

function TaskCard({id, task, index, onEd, onDn, onDel})
{
    return (
        // <h1>This is Task Card component</h1>
        <div className='task-card'>
            <div className='task-content'>
                <span>{index + 1}. {task}</span>
                <div className='task-buttons'>
                    <button className='edit-button' onClick={()=>onEd(id, task)}>Edit</button>
                    <button className='done-button' onClick={()=>onDn(id)}>Done</button>
                    <button className='delete-button' onClick={()=>onDel(id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}
export default TaskCard;