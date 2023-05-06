import { getAuth } from 'firebase/auth';
import { deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';

function NotesDisplay({ value }) {
  const element = useRef()
  const navigate = useNavigate();

  // console.log(value);
  // const color=[ "bg-[#fb923c]", "bg-[#4ade80]", "bg-[#8b5cf6]", "bg-[#38bdf8]", "bg-[#e879f9]", "bg-[#a21caf]"," bg-[#6ee7b7]", "bg-[#fde047]", "bg-[#92400e]"]
  const color = ["bg-green-500", "bg-yellow-500", "bg-lime-500", "bg-emerald-500",]
  const random = Math.floor(Math.random() * color.length)
  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }
  function raj() {
    element.current.children[2].style.opacity = 1;

  }

  function invisible() {
    element.current.children[2].style.opacity = 0;

  }

  const fullView = () => {
    navigate("/ViewNote", { state: value })

  }
  return (
    <div ref={element} onClick={fullView} onMouseOver={raj} onMouseLeave={invisible} className={`${color[random]}  mx-px  my-px  border-none rounded hover:scale-105 box-border p-1 flex  flex-col xl:h-56 text-ellipsis cursor-pointer sm:h-56`}>
      <div className=' text-xl'>

        {value.title}

      </div>
      <div className=' text-md overflow-hidden  '>
        {/* {value.content} */}
        <NewlineText className=" " text={value.content} />
      </div>
      <div className='flex  justify-center items-center ml-2 mt-auto opacity-0 sm:flex-col sm:absolute sm:top-12 sm:right-1/4 md:flex-row'>


        <button onClick={() => {
          navigate("/editNote", { state: value })
        }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-0'>Edit</button>

        <button onClick={async () => {
          const auth = getAuth();
          const ref = await deleteDoc(doc(db, `notes/${auth.currentUser.uid}/myNotes`, value.id))
            .then(() => {
              navigate("/notes")
              window.location.reload(true);
              navigate("/notes");
            }).catch((err) => {
            })
        }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 ' >Delete</button>


        <button to='#' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1' onClick={fullView} >View</button>
      </div>


    </div>
  )
}

export default NotesDisplay