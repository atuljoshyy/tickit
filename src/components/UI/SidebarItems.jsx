import React from 'react'

const SidebarItems = (props) => {
  return (
    <li>
      <a href="" className="flex items-center py-2.5 px-4 rounded-lg transition-all duration-100 dark:hover:bg-blk-50 dark:hover:text-gray-300 hover:bg-gray-200 hover:text-gray-900 ">
        <span className='mr-2'>{props.icon}</span>
        {props.title}
      </a>
    </li>
  )
}

export default SidebarItems
