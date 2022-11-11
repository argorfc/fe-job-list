import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-4 px-16">
      <button
        type="button"
        className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 rotate-180"
        id="btn-nav-back"
        onClick={() => navigate('/')}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
        <span className="sr-only">Icon back</span>
      </button>
    </div>
  )
}
