import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions as actionsTask } from 'store/ducks/tasks'

const ListTask = () => {
    const tasks = useSelector(state => state.tasks)
    const loader = useSelector(state => state.loader)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionsTask.getTasks())
    }, [dispatch])

    return (
        <>
            {!loader && (
                <ol>
                    {tasks.map(item => <li key={item}>{item}</li>)}
                </ol>
            )}
        </>
    )
}
export default ListTask