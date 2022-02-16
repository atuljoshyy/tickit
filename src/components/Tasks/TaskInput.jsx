import React from 'react'

const TaskInput = () => {
  const addTaskHandler = () => {
    console.log('btn clicked')
  }
  return (
    <div>
      <div className="mt-2">
        <button className='flex items-center bg-gray-100 hover:bg-gray-700 hover:text-gray-200 py-2 px-4 rounded-xl cursor-pointer ' onClick={addTaskHandler}>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </span>
          <span className="ml-2">Add task</span>
        </button>
        <input type="text" id="simple-email" className="hidden dark:bg-blk-100 rounded-xl  border-transparent flex-none appearance-none focus:border-none w-full m-auto py-3 px-4 focus:border-transparent outline-transparent" placeholder="Add a new task" />
      </div >
    </div >
  )
}

export default TaskInput
