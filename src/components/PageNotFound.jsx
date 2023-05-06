import React from 'react'

function PageNotFound() {
  return (
    <>
        <div className='bg-gray-300 h-87vh p-2'>
            <div>
                <h1 className='text-3xl text-center mt-6 font-semibold text-red-700 '>Page not found </h1>
                <p className='text-center mt-6 text-xl text-red-500 animate-bounce'>The page you are looking for is not available on the server. <br /> please contact support team to resolve your issue.</p>
            </div>
        </div>
    </>
  )
}

export default PageNotFound