import React, { useState } from 'react'


const EditInPlace = () => {
    const [isEditing, setIsEditing] = useState(false)
    const edit = () => setIsEditing(true)
    const done = () => setIsEditing(false)

    if(isEditing){
        return <input type="text" onBlur={done}/>
    }
    return <h1 className="edit-in-place" onClick={edit}>Edit in place</h1>
}

export default EditInPlace