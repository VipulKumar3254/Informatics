import add from "../assets/add.png"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db, firebaseApp } from '../firebaseConfig'
import { collection, addDoc, query, QuerySnapshot } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import NotesDisplay from './NotesDisplay';

function Notes() {
  const [notes, setnotes] = useState([])
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();

  useEffect(() => {
    
    onAuthStateChanged(auth, user => {
     
      if (user) {

        
        
        if(!user.auth.currentUser.emailVerified)
        {
          navigate("/login")
        }

        const getFirestoreData = async () => {
          const querySnapshot = await getDocs(collection(db, "notes", user.uid, "myNotes"));
          // const querySnapshot = await getDocs(collection(db, "notes", user.uid, "myNotes"));
          querySnapshot.forEach((doc) => {
            var obj = doc.data();
            obj.id= doc.id;
            setnotes( data => [ ...data ,obj] )
            
            
            
          }); 
        }
        
        getFirestoreData();
        
        
      } else {
        navigate("/login");
      }
    })
  }, [])

  useEffect(() => {
  
  }, [notes])

  const goToCreateNote=()=>{
    navigate("/createNote")
  }

  return (
    <>

      {/* {
        notes.map((element) => <li>{element.title} <br /> {element.content}</li>)
      } */}
      {/* <NotesDisplay value={notes} />   */}
    <div className="min-h-9vh bg-slate-300">

    <div className='  grid xl:grid-cols-3 grider bg-slate-300 sm:grid-cols-2 '>
    {
      notes.map( ( element)=><NotesDisplay value={element}/>)
    }
    </div>
    </div>

    <div>
    <img src={add} alt="add note" className="w-12 h-12 fixed xl:right-12 xl:bottom-12 sm:bottom-6 sm:right-6 cursor-pointer " onClick={goToCreateNote} />
    </div>
{/*     
    <button onClick={ ()=>{
      console.log(notes)
    }}> clicker </button> */}

    </>
  )
}

export default Notes