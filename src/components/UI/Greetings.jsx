import React from 'react'

const Greetings = () => {
  return (
    <div>
      <div className='flex flex-col dark:text-gray-300'>
        <div className='flex' >
          <div className='flex flex-col items-left mr-2'>
            <h2 className='text-2xl'>Good morning, Atul</h2>
            <p className='text-lg'>It's Sunday, Feb 13</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>

        </div>


      </div>
    </div>
  )
}

export default Greetings
