import React, { useState, useEffect } from 'react'


const EditInPlace = () => {
    const [isEditing, setIsEditing] = useState(false)
    const edit = () => setIsEditing(true)
    const done = () => setIsEditing(false)
    /* useEffect -> permite realizar efeitos colaterais em componentes de função,
       ou seja, elimina a necessidade de utilizar os métodos de ciclo de vida
       #componentDidMount ou componentDidUpdate para essa tarefa
    */
    useEffect(() => {
            console.log(isEditing)
    }, [isEditing])

    if(isEditing){
        return <input type="text" onBlur={done}/>
    }
    return <h1 className="edit-in-place" onClick={edit}>Edit in place</h1>
}

export default EditInPlace