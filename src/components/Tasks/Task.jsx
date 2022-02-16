import React from 'react'

const Task = (props) => {
  const listClass = `bg-${props.color}-50 px-2 py-1 rounded-lg text-${props.color}-500 text-sm`

  return (
    <li className='hover:bg-gray-100 p-3 rounded-xl cursor-pointer '>
      <div className="flex items-center">
        <div className='flex items-center justify-between w-full'>
          <div className="inline-flex items-center">
            <input type="checkbox" className="w-6 h-6 rounded border-0 cursor-pointer focus:ring-0 text-gray-600" />
            <span className="ml-4 ">{props.title}</span>
          </div>
          <span className={listClass}>{props.icon + props.list}</span>
        </div>
      </div>
    </li>
  )
}

export default Task
