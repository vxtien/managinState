import { useState } from "react";
const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('');
    const handleAddText = (e) => {
        setText(e.target.value)
    }
    return(
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={handleAddText}
            />
            <button
                onClick={() => {setText(''); onAddTask(text)}}
            >
                Add
            </button>
        </>
    )
}
export default AddTask;