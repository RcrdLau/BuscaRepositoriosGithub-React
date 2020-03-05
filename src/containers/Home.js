import React from 'react'
import AddTask from 'components/AddTask'
import Loader from 'components/Loader'
import ListTask from 'components/ListTask'

const Home = () => {
    return (
        <>
            <AddTask></AddTask>
            <Loader></Loader>
            <ListTask></ListTask>
        </>
    )
}
export default Home