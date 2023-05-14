import React ,{useState} from 'react'
import add from "../assets/add.png"
import { getAuth } from 'firebase/auth';
import { addDoc, doc, setDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

function CreateNote() {
    const [form, setform] = useState({})
    const navigate = useNavigate();
    const formHandler= ( e)=>{
        const obj = { ...form, [e.target.name]: e.target.value};
        setform(obj);
    }

    const createNote=async ()=>{
        const auth = getAuth();
        await addDoc(collection(db,`notes/${auth.currentUser.uid}/myNotes`,),{ 
            title:form.title,
            content:form.content
        }).
        then( ( doc)=>{
            navigate("/notes");
        }).
        catch( ( err)=>{
            alert("please try again after some time.")
        })
        
    }

  return (
    <div className="bg-slate-300 xl:pt-2">

    <div className="flex  flex-col xl:p-2 ">
        <textarea type="text" name="title" id="title" value={form.title} className='bg-slate-300 min-h-[100px] p-2  font-bai text-xl border  border-black rounded m-1'  onChange={formHandler}  placeholder='Enter Title'></textarea>
        <textarea type="text" name="content" id="content" value={form.content} className='bg-slate-300 min-h-7vh border border-black mt-2 rounded m-1 p-2 text-lg   font-sans' onChange={formHandler} placeholder='Enter Content ' ></textarea>
        
    </div>
    <img src={add} alt="add note" className='h-12 w-12 fixed xl:right-14 xl:bottom-14 sm:bottom-10 sm:right-10 cursor-pointer' onClick={createNote} />
    </div>
  )
}

export default CreateNote