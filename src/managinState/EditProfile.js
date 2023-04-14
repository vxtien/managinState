import { useState } from "react";
const EditPofile = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing)
    }
    const handleChangeFistName = (e) => {
        setFirstName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                First Name: { '' }
                {isEditing ? (<input value={firstName} onChange={handleChangeFistName}/>): (<b>{firstName}</b>)}
            </label>
            <br/>
            <label>
                Last Name: { '' }
                {isEditing ? (<input value={lastName} onChange={handleChangeLastName}/>): (<b>{lastName}</b>)}
            </label> <br/>
            <button type="submit">Edit profile</button>
            <p>Hello, {firstName} {lastName}!</p>
        </form>
    )
}
export default EditPofile;