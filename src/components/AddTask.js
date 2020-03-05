import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions as actionsTasks } from 'store/ducks/tasks'

const AddTask = () => {
    const [inputValue, setInputValue] = useState("")
    const dispacth = useDispatch()

    const updateInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const inputKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    const addTask = () => {
        dispacth(actionsTasks.addTask(inputValue))
        setInputValue("")
    }

    return (
        <>
            <input
                type="text"
                placeholder="Nova tarefa"
                value={inputValue}
                onChange={updateInputValue}
                onKeyDown={inputKeyDown}
            />
            <button onClick={addTask}>Salvar</button>
        </>
    )
}
export default AddTask