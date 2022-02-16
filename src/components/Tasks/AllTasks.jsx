import React from 'react'
import tasks from '../../data/Tasks'
import Task from './Task'
import TaskInput from './TaskInput'

const AllTasks = () => {
  return (
    <div className='mt-10 overflow-scroll '>
      <div className='border-b-2 border-gray-300'>
        <h3 className='text-lg' >All Tasks</h3>
      </div>
      <ul className='mt-5'>
        {tasks.map(task => (
          <Task
            key={task.id}
            title={task.title}
            list={task.list}
            icon={task.icon}
            color={task.color}
          />
        ))}
        <TaskInput />
      </ul>


    </div>
  )
}

export default AllTasks
