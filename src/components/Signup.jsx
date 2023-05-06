import React, { useState, useEffect, useRef} from 'react'
import stickyNotes from "../assets/coverPic.png"
import { Link,useNavigate } from 'react-router-dom'


// imporing firebase configuration

import { firebaseApp } from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const Signup = () => {
  const [form, setform] = useState({})
  const mailModal = useRef()
  const navigate = useNavigate();


  const handler = (event) => {
    var obj = { ...form, [event.target.name]: event.target.value };
    setform({ ...obj })

  }



  const submitHanlder = async (event) => {
    event.preventDefault();
    console.log(event.target.password.value);
    console.log(event.target.cpassword.value);
    if(event.target.password.value!=event.target.cpassword.value)
    { 
      alert("passwords should be matching")
    }
    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(auth, event.target.email.value, event.target.password.value).then((user) => {
      console.log(auth.currentUser);
      sendEmailVerification(auth.currentUser)
        .then(() => {
          // console.log(mailModal.current.style.diplay="block")
          let element = mailModal.current;
          console.log(element);
          element.classList.remove("hidden");


        })
        .catch((errr) => {
          console.log("mail  can't be sent because   " + errr);
          alert(errr)
        })
    }).catch((err) => { alert(err.message) })



  }

  const dismissModal=()=>{
    let element = mailModal.current;
    element.classList.add("hidden");
  }


  return (
    <>


      <div className=" min-h-9vh bg-slate-400 w-screen flex items-start pt-20 xl:flex-row sm:flex-col">
        <div className="xl:w-1/2 sm:w-full flex items-center justify-center">
          <div className="">
            {/* <img src={stickyNotes} alt="" className='7-xl -mt-12' /> */}
            {/* <p className='relative top-0  left-0'>we are here to dope the youtube.</p> */}
          </div>
        </div>
        <div className="xl:w-1/2 flex justify-center items-center sm:w-full ">
          <form onSubmit={submitHanlder} className=' border-2 p-2 pb-10 rounded   border-spacing-12 bg-white'>
            <div className="flex items-center justify-center">

              <h1 className=' text-black font-semibold my-4 tracking-wide'>Signup</h1>
            </div>

            <input type="email" name='email' id="email" onChange={handler} value={form.email} placeholder=' Email' required className=" my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


            <input type="password" name='password' id="password" onChange={handler} value={form.password} required placeholder='Create Password' className=" my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

            <input type="password" name='cpassword' id="c-password" onChange={handler} value={form.cpassword}  required placeholder='Confirm Password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <input type="submit" value="Submit" className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full cursor-pointer' />
            {/* <buton type='submit' className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ">
<Link tot="/signup" className='inline'>Sign Up</Link>
</button> */}

            <p className='text-xs text-center mt-1'>Already have an account? <Link to="/login" className='text-blue-600 inline'>Login</Link></p>
            <div className='flex justify-center items-center mt-4 mb-4'>
              <div className='border border-1 h-0 w-1/2' ></div>
              <p className='text-xs mr-2 ml-2 '>or</p>
              <div className='border border-1 h-0 w-1/2'></div>
            </div>
            <Link to="/login" className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full block text-center">Login</Link>



          </form>

        </div>

     
      </div>

      {/* CODE RELATED TO MODAL OF CSS TO SHOW DURING SIGNUP PROCESS. */}
      <div  ref={mailModal} className='flex w-screen justify-center items-center absolute top-0 hidden'>

      <div className='  relative left-0 top-12 bg-zinc-300 p-6 border-none rounded-lg'>
        <div className=''>
          <h1>Verification mail has been sent on Email id </h1>
          <button  onClick={dismissModal} className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>Ok</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Signup