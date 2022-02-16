import React from 'react'
import AllTasks from '../components/Tasks/AllTasks'
import TaskInput from '../components/Tasks/TaskInput'
import Greetings from '../components/UI/Greetings'
import Progress from '../components/UI/Progress'
import Sidebar from '../components/UI/Sidebar'

const Home = () => {
    return (
        <div className='bg-gray-200 dark:bg-blk-50 flex flex-1    '>
            <Sidebar />
            <div className='py-10 px-20 w-1/2 mx-auto flex flex-col justify-start min-h-screen '>
                <Greetings />
                <AllTasks />
            </div>
        </div>
    )
}

export default Home
