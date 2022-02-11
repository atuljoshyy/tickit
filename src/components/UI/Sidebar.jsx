import React from 'react'

const Sidebar = () => {
    return (
        <div className="relative min-h-screen md:flex">
            {/*   mobile menu bar  */}
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                {/*   logo  */}
                <a href="#" className="block p-4 text-white font-bold">Tickit</a>
                {/*  mobile menu button */}
                <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/*   sidebar  */}
            <div className="sidebar bg-white rounded-2xl text-gray-500 w-80 m-3 shadow-sm space-y-6 py-7 px-6 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                {/*   logo  */}
                <a href="#" className="text-gray-600 flex items-center space-x-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <span className="text-2xl font-extrabold">TickIt</span>
                </a>
                {/*   nav  */}
                <nav>
                    <a href="#" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-200 hover:text-gray-900">
                        <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg></span>
                        Home
                    </a>
                    <a href="" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-200 hover:text-gray-900">
                        <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg></span>
                        Today
                    </a>
                    <a href="" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-200 hover:text-gray-900">
                        <span className='mr-2'>🧑‍💻</span>
                        Work
                    </a>
                    <a href="" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-200 hover:text-gray-900">
                        <span className='mr-2'>🎓</span>
                        College
                    </a>
                    <a href="" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-200 hover:text-gray-900">
                        <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg></span>
                        Add List
                    </a>
                </nav>
            </div>



        </div>
    )
}

export default Sidebar
