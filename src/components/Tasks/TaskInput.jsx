import React, {useState} from 'react'

const TaskInput = () => {
  const [addTaskOpen, setAddTaskOpen] = useState(false)
  const taskInputOpenClass = 'visible'
  const taskInputCloseClass = 'hidden'
  const addTaskHandler = () => {
    setAddTaskOpen(!addTaskOpen)
  }
  return (
    <div>
      <div className="mt-2">
        <button className='flex items-center px-3 rounded-xl cursor-pointer ' onClick={addTaskHandler}>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </span>
          <span className="ml-2">Add task</span>
        </button>
        <div className={addTaskOpen? taskInputOpenClass: taskInputCloseClass}>
          <form className="mx-3 my-1 bg-gray-300 flex flex-col rounded-xl p-5">
            <div>
              <input type="text" id="simple-email" className="appearance-none border border-transparent w-full m-auto py-2 px-4 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:border-transparent focus:bg-white focus:placeholder-gray-300" placeholder="Add new task" />
            </div>
            <div className='flex justify-between items-center mt-4'>
              <select className="w-1/4 text-sm text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:border-0" name="list">
                <option value="personal">
                  personal
                </option>
                <option value="college">
                  college
                </option>
                <option value="shopping">
                  shopping
                </option>
                <option value="work">
                  work
                </option>
              </select>
              <div className='flex items-center'>
                <button className='bg-gray-800 text-white text-sm py-2 px-3 rounded-lg' type='submit'>Add Task</button>
                <button className='bg-white py-2 text-sm px-3 rounded-lg ml-2'>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}
export default TaskInput
