import React from 'react'
import { Link } from 'react-router-dom'

const PageNot = () => {
  return (
    <div className='h-screen flex-col flex justify-center items-center'>

        <h1 className='mb-4 text-4xl font-bold'>Page Not Found</h1>
        <Link
                   to = "/"
                    type="Link"
                    className="mt-5 bg-red-500 text-white inline-flex  justify-center rounded-md border border-gray-300  px-4 py-2 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 lg:text-lg sm:text-sm"
                   
                    
                  >
                 Back To Home
                  </Link>
    </div>
  )
}

export default PageNot