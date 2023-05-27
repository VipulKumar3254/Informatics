import React, { useState, useRef } from 'react'
// import stickyNotes from "./assets/cover.png"   //this code was changed this can throw eror please fix if throw some kind of error
import stickyNotes from "../assets/cover.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


// configuration of firebase 
import { firebaseApp } from '../firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig'
function Signup() {
  const [form, setform] = useState({})
  const navigate = useNavigate();
  const mainModal = useRef(null)
  const mainModal2 = useRef(null)


  const inputHandler = (event) => {
    var obj = { ...form, [event.target.name]: event.target.value }
    setform({ ...obj })
  }

  const submitHanlder = async (event) => {
    event.preventDefault();
    if (event.target.email.value == "" || event.target.password.value == "") {
      alert("Please enter email and password")

    }
    const auth = getAuth();
    const result = await signInWithEmailAndPassword(auth, event.target.email.value, event.target.password.value).then((user) => {

      if (!user.user.emailVerified) {
        let element = mainModal2.current;
        element.classList.remove("hidden");
        return;
      }
      navigate("/notes");
    })
      .catch((err) => {
        console.log(err.message);
        let element = mainModal.current;
        element.classList.remove("hidden");

      })




  }

  const dismissModal = () => {
    let element = mainModal.current;
    element.classList.add("hidden");
  }

  const dismissModal2 = () => {
    let element = mainModal2.current;
    element.classList.add("hidden");
  }


  return (
    <>


      <div className=" min-h-9vh bg-slate-400 w-full flex items-start xl:pt-20 sm:flex-col xl:flex-row">
        <div className="xl:w-1/2 sm:w-full flex items-center justify-center">
          <div className="">
            {/* <img src={stickyNotes} alt=""  className='7-xl '/> */}
            {/* <p className='relative top-0  left-0'>we are here to dope the youtube.</p> */}
          </div>
        </div>
        <div className="xl:w-1/2 flex justify-center items-center sm:w-full">
          <form onSubmit={submitHanlder} className=' border-2 p-2 pb-10 rounded   border-spacing-12 bg-white  sm:mt-12'>
            <div className="flex items-center justify-center">

              <h1 className=' text-black font-semibold my-4 tracking-wide'>Login</h1>
            </div>

            <input type="email" required id="email" name='email' onChange={inputHandler} value={form.email} placeholder=' Email' className=" my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />



            <input type="password" required id="password" name='password' onChange={inputHandler} value={form.password} placeholder='Enter Password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <input type="submit" value="Login" className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full cursor-pointer" />

            <p className='text-xs text-center mt-1'>Wants to create account? <Link to="/signup" className='text-blue-600 inline'>Signup</Link></p>
            <div className='flex justify-center items-center mt-4 mb-4'>
              <div className='border border-1 h-0 w-1/2' ></div>
              <p className='text-xs mr-2 ml-2 '>or</p>
              <div className='border border-1 h-0 w-1/2'></div>
            </div>
            <Link to="/signup" className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full block text-center">
              Sign Up
            </Link>


          </form>

        </div>

      </div>

      {/* CODE to show div when user enter wrong email and password  */}
      <div ref={mainModal} className='flex w-full justify-center items-center absolute top-0 hidden'>

        <div className='  relative left-0 top-12 bg-zinc-300 p-6 border-none rounded-lg'>
          <div className=''>
            <h1>Please enter valid email and password</h1>
            <button onClick={dismissModal} className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>Ok</button>
          </div>
        </div>
      </div>
      {/* CODE to show div when email is not verified of user. and try to login app.  */}
      <div ref={mainModal2} className='flex w-full justify-center items-center absolute top-0 hidden'>

        <div className='  relative left-0 top-12 bg-zinc-300 p-6 border-none rounded-lg'>
          <div className=''>
            <h1>Please verify email from sent email </h1>
            <button onClick={dismissModal2} className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>Ok</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup