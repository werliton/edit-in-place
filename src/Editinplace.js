import React, { useState, useEffect, useRef } from 'react'


const EditInPlace = () => {
    const [isEditing, setIsEditing] = useState(false)
    const edit = () => setIsEditing(true)
    const done = () => setIsEditing(false)
    const inputRef = useRef(null)
    /* useEffect -> permite realizar efeitos colaterais em componentes de função,
       ou seja, elimina a necessidade de utilizar os métodos de ciclo de vida
       #componentDidMount ou componentDidUpdate para essa tarefa.
       Resumindo: permite aqui ouvir os efeitos aplicados à função isEditing
    */
    useEffect(() => {
            if(isEditing){
              inputRef.current.focus()
            }
    }, [isEditing])

    if(isEditing){
        return <input type="text" onBlur={done} ref={inputRef}/>
    }
    return <h1 className="edit-in-place" onClick={edit}>Edit in place</h1>
}

export default EditInPlace