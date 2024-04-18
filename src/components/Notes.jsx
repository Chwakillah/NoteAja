/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import CreateNote from './CreateNote'

const Notes = () => {
    const [inputText, setInputText] = useState("")
    const [notes, setNotes] = useState([])
    const saveHandler = () => {

    }
    return (
        <div>
            <CreateNote 
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
            />
        </div>
    )
}

export default Notes
