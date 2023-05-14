import { getAuth } from 'firebase/auth';
import { deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function NotesDisplay({ value }) {
  const element = useRef()
  const navigate = useNavigate();
  const mainModal = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const actions = useRef();

  // console.log(value);
  // const color=[ "bg-[#fb923c]", "bg-[#4ade80]", "bg-[#8b5cf6]", "bg-[#38bdf8]", "bg-[#e879f9]", "bg-[#a21caf]"," bg-[#6ee7b7]", "bg-[#fde047]", "bg-[#92400e]"]
  const color = ["bg-green-500", "bg-yellow-500", "bg-lime-500", "bg-emerald-500",]
  const random = Math.floor(Math.random() * color.length)
  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }
  function raj() {
    actions.current.style.opacity = 1;
  }

  function invisible() {
    actions.current.style.opacity = 0;
  }

  const fullView = () => {

    navigate("/ViewNote", { state: value })

  }
  const positionFixer = () => {


    mainModal.current.classList.remove("right-100vh")
    mainModal.current.classList.add("right-0")

  }

  useEffect(() => {

  
    setIsOpen(false);  // to not to show modal when we open the page
    document.addEventListener("mousedown", (element) => {

      if(!mainModal.current.contains(element.target))
      {
        mainModal.current.classList.add("right-100vh")
      }
    })

    return () => {

    }
  }, [])

  const dismissModal = () => {
    let element = mainModal.current;
    element.classList.add("hidden");
  }


  return (
    <div ref={element} id='max' onMouseOver={raj} onMouseLeave={invisible} className={`${color[random]} relative  mx-px  my-px  border-none rounded md:hover:scale-105 box-border p-1 flex  flex-col xl:h-56 text-ellipsis cursor-pointer sm:h-56`}>
      {/* dynamic modal code of dom.  */}
       <div ref={mainModal} id='modal' className='flex w-1/2 justify-center items-center absolute     border  sm:flex-col top-0 right-100vh bg-white outline-none'>
        <button onClick={() => {
          navigate("/editNote", { state: value })
        }} className=' bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 m-px px-4 rounded m-0 w-full '>Edit</button>


        <button onClick={async () => {
          const auth = getAuth();
          const ref = await deleteDoc(doc(db, `notes/${auth.currentUser.uid}/myNotes`, value.id))
            .then(() => {
              navigate("/notes")
              window.location.reload(true);
              navigate("/notes");
            }).catch((err) => {
            })
        }} className='bg-gray-500 hover:bg-gray-600 w-full py-1 text-white font-bold px-4 rounded m-px  ' >Delete</button>


        <button to='#' className='bg-gray-500 hover:bg-gray-600 py-1  w-full text-white font-bold  px-4 rounded m-px' onClick={fullView} >View</button>
      </div>
      <div className=' absolute right-0 top-2 md:hidden'>

        <MoreVertIcon onClick={positionFixer} />

      </div>
      <div className=' text-xl'>

        {value.title}

      </div>
      <div className=' text-md overflow-hidden  '>
        {/* {value.content} */}
        <NewlineText className=" " text={value.content} />
      </div>
      <div ref={actions} className='flex  justify-center items-center ml-2 mt-auto opacity-0 sm:flex-col sm:absolute sm:right-100vh sm:right-1/4 md:flex-row md:static '>


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