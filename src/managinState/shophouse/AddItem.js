import { useState } from "react";
const AddItem = ({onAddItem}) => {
    const [title, setTitle] = useState('');
    const handleChangeInput = (e) => {
        setTitle(e.target.value)
    }
    const handleAddItem = () => {
        onAddItem(title)
    }
    const handleRemoveText = () => {
        setTitle('')
    }
    return(
        <>
            <input 
                value={title}
                onChange={handleChangeInput}
                placeholder="Add item"
            />
            <button onClick={()=>{handleAddItem(); handleRemoveText()}}>Add</button>
        </>
    )
}
export default AddItem;