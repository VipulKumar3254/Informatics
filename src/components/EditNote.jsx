import React,{useState,useEffect} from 'react'
import {useNavigate, useLocation } from 'react-router-dom'
import update from "../assets/update.png"
//  link of stackoverflow to update the document in friebase. 
// https://stackoverflow.com/questions/49682327/how-to-update-a-single-firebase-firestore-document     

// importing firebase related tools and things 
import {firebaseApp} from "../firebaseConfig"
import { getAuth } from 'firebase/auth';
import { collection, updateDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';


import { db } from '../firebaseConfig';

function EditNote() {
  const data = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({})


  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }

  const goToNotes=async ()=>{
    const auth = getAuth();

  const ref =  await  updateDoc(doc(db,`notes/${auth.currentUser.uid}/myNotes`,data.state.id),{
    "title":form.title,
    "content":form.content
  }).then( ()=>{
  navigate("/notes");  

  }).catch( ( err)=>{
    console.log(err);
  })


  }

  const handleInput=(e)=>{
    const obj = { ...form, [e.target.name]:e.target.value};
    setForm(obj)
  }

  useEffect(() => {
  setForm({...data.state})

    return () => {
    }
  }, [])
  
  return (
        
    <div className='h-auto p-2 bg-slate-100'>

<div className='  '>
    <div className='text-2xl  min-h-1vh text-black font-bold font-castora xl:px-6 xl:mt-6  sm:px-2 sm:text-center xl:text-left'>
    {/* <NewlineText className="" text={data.state.title} /> */ }
    <textarea name="title" id="title" value={form.title} onChange={handleInput}  className="w-full" ></textarea>
    </div> 
    <div className='text-xl xl:px-6 min-h-8vh   mt-2 font-font2 '>
    <textarea name="content" id="content"  value={form.content}  onChange={handleInput} className='w-full min-h-8vh'></textarea>
    </div>
</div>

<div className='  w-full '>


<img src={update} alt="edit image" className='h-12  w-12 border border-red-50 outline-none rounded-2xl fixed  xl:bottom-12 xl:right-12 sm:bottom-6 sm:right-6 cursor-pointer'  onClick={goToNotes} />
</div>


</div>
  )
}

export default EditNote