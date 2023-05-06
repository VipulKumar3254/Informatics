import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import contactussectionimage from "../assets/contactussection.png"

import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { getAuth } from 'firebase/auth';
function ContactUs() {
  const [form, setform] = useState({})
  const handleInput = (event) => {
    let obj = { ...form, [event.target.name]: event.target.value }
    setform(obj);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    // Add a new document with a generated id.
    const auth =await  getAuth();
    if (!auth.currentUser) {

      const docRef = await addDoc(collection(db, `queries/generalQueries/queries`), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        description: form.desc,
      }).
        then((doc) => {
          alert("uploaded successfully.")
          console.log(doc);
        }).
        catch((err) => {
          console.log(err);
          alert("can't upload query")
        })

      return;
    }

    const docRef = await addDoc(collection(db, `queries/${auth.currentUser.uid}/queries`), {
      name: form.name,
      email: form.email,
      phone: form.phone,
      description: form.desc,
    }).
      then((doc) => {
        alert("uploaded successfully.")
        console.log(doc);
      }).
      catch((err) => {
        console.log(err);
        alert("can't upload query")
      })



  }
  return (
    <div className='flex bg-[#e9d5ff] xl:flex-col min-h-8vh sm:flex-col pb-12'>
      <div id='contactussection' className="xl:text-3xl sm:text-lg  sm:p-2  xl:w-full text-center xl:my-4 sm:w-screen ">
        <h1 className='text-sky-950 font-semibold text-xl'>Have any query?</h1>
        <p className='text-sky-950 hidden md:hidden sm:block'>Every user is valuable to us. Please feel free to raise query. Our support team is waiting for your query. We will try to fix problem as soon as possible.</p>
      </div>
      <div className="w-full mt-12 flex items-center justify-evenly sm:flex-col-reverse md:flex-row">
        <div className=''>

          <form className='flex flex-col ' onSubmit={handleSubmit}>
            <label className='text-center text-xl font-semibold' >Contact Us</label>
            <input className='p-2 m-1 border outline-none rounded-md font-semibold text-xl h-10 font-normal text-gray-500' required placeholder="name" value={form.name} onChange={handleInput} type="text" name="name" id="name1" />
            <input className='p-2 m-1 border outline-none rounded-md font-semibold text-xl h-10 font-normal text-gray-500' required placeholder='Email' value={form.email} onChange={handleInput} type="email" name="email" id="email1" />
            <input className='p-2 m-1 border outline-none rounded-md font-semibold text-xl h-10 font-normal text-gray-500' required placeholder='Phone' value={form.phone} onChange={handleInput} type="tel" name="phone" id="phone1" />
            <textarea className='p-2 m-1 border outline-none rounded-md font-semibold text-xl  font-normal text-gray-500' required value={form.desc} onChange={handleInput} name="desc" id="desc" cols="30" rows="10" placeholder='Details here..'></textarea>
            <input type="submit" value="Submit" className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md  cursor-pointer' />
          </form>
        </div>
        <div className=""></div>
        <img src={contactussectionimage} alt="contact us png " className='xl:h-[700px] sm:hidden md:block' />
      </div>
    </div>
  )
}

export default ContactUs