import React ,{useRef}from 'react'
import cover from "../assets/cover.png"
import { useNavigate } from 'react-router-dom'
// import animator from "./animation/animator"

function LandingPage() {
  const navigate = useNavigate();
  const aboutUs= useRef(null);
  const goToLogin=()=>{
    navigate("/login");
  }
  const goToNotes = ()=>{
    navigate("/notes")
  }
  return (
    <div className='bg-gray-200 h-87vh'>

    <div className="flex h-eigthVH items-center  ">
    <div className="  m-2 ">
        <h1 className='text-3xl font-font1 animator ml-2'>Don't forget, take a note.</h1>
        <p className='text-xl ml-2'>We are here to provide you, X-Platform notes taking facility so that you can take notes on the go....</p>
        <div className='mt-4 ml-2  '>
          <button className='bg-blue-500 hover:bg-blue-700 text-white p-2 border border-1 rounded-lg outline-none' onClick={goToLogin}>Get Started</button>
          <button className=' ml-2 bg-blue-500 hover:bg-blue-700 text-white p-2 px-6 border border-1 rounded-lg outline-none ' onClick={goToNotes}>Notes</button>
        </div>
    </div>

    
    <div className="w-1/2 sm:hidden xl:block">
    <img src={cover} alt="cover notes image " className='absolute right-0 bottom-24 ' />
    </div>

    </div>
    </div>
  )
}


export default LandingPage