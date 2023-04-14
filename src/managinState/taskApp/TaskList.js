import Task from "./Task"
const TaskList = ({tasks, onChangeTask, onDeleteTask}) => {
    return(
        <ol>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}/>
                </li>
            ))}
        </ol>
    )
}
export default TaskList;