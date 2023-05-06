import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import edit from "../assets/edit.png"
function ViewNote() {
    const data = useLocation();
    const navigate = useNavigate();

    function NewlineText(props) {
        const text = props.text;
        return text.split('\n').map(str => <p>{str}</p>);
      }

      const goToEdit=()=>{
        navigate("/editNote",{state:data.state})

      }

  return (

    <div className=' min-h-10vh h-auto p-2 bg-slate-100'>

    <div className='  '>
        <div className='text-2xl  min-h-1vh text-black font-bold font-castora xl:px-6 xl:mt-6  sm:px-2 sm:text-center xl:text-left'>
        <NewlineText className="" text={data.state.title} />
        </div>
        <div className='text-xl xl:px-6 min-h-8vh   mt-2 font-font2 '>
        <NewlineText className="" text={data.state.content} />
        </div>
    </div>

<div className='  w-full '>


    <img src={edit} alt="edit image" className='h-12  w-12 border border-red-50 outline-none rounded-2xl fixed  xl:bottom-12 xl:right-12 sm:bottom-6 sm:right-6 cursor-pointer'  onClick={goToEdit} />
</div>
    </div>

  )
}

export default ViewNote