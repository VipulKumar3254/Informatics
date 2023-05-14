import React,{useEffect,useState} from 'react'
import icon from "../assets/icon.png"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';


// imports related to icons 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { doc } from 'firebase/firestore';

function Navbar(props) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false)
const auth =getAuth(firebaseApp)


  const goToLandingPage=()=>{
    navigate("/");
  }

  const logout = (e) => {
    if(!(e.target.innerText=="Logout"))
    {
      const element = document.getElementById("aboutussection");
      element.scrollIntoView({ behavior: 'smooth', block: 'start' } )
      return;
    }
    const auth = getAuth(firebaseApp);
    auth.signOut().then(() => {
      navigate("/login")
      dialog.classList.add("hidden")

    }).catch((errr) => {
      console.log(errr);
    })

  }
  const aboutUs=()=>{
    const element = document.getElementById("aboutussection");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' } )
  }
  const contactUs=()=>{
    const element = document.getElementById("contactussection");
    element.scrollIntoView({ behavior: 'smooth', block: 'start' } )

  }
  const openDialog=()=>{
    const dialog = document.getElementById("dialog")
    dialog.classList.remove("hidden")
  }


  useEffect(() => {

    const dialog = document.getElementById("dialog")
    document.addEventListener("scroll",()=>{
      dialog.classList.add("hidden")

    })
  
    const unsubscribe = onAuthStateChanged(auth,user=>{
      if(user){
        console.log(auth);
        console.log(user);
        setIsAuthenticated(true)


      }
      else{
        setIsAuthenticated(false);
      }
    })
    return () => {
      unsubscribe(); 
    }
  }, [])
  
  const closeDialog=()=>{
    const dialog = document.getElementById("dialog")
    dialog.classList.add("hidden")
  }
  return (

    <div className=" h-20 w-full bg-gray-400">


      <div className="flex  sm:justify-center xl:justify-between "  >
        <div className="flex  items-center justify-center h-20 ml-6">

          <img src={icon} alt="" className='h-12' />
          <h1 className='text-2xl cursor-pointer ' onClick={goToLandingPage}>INFORMATICS</h1>
        </div>

        <div className="  mr-6  flex xl:items-center  md:block xl:justify-center  ">
        <div className='flex '>
        
        { <button className='bg-gray-400  hover:bg-gray-500 text-black font-medium  px-5 rounded py-3 mt-4 sm:hidden md:block'><Link  target='_blank' to={"https://drive.google.com/file/d/1P2V5717Za8tRBZnH8sa7ygQN2nuxlaM5/view?usp=sharing"}>Download App</Link></button>} 
        {props.about ? <button className='bg-gray-400  hover:bg-gray-500 text-black font-medium  px-5 rounded py-3 mt-4 sm:hidden md:block' onClick={aboutUs}>{props.about}</button>:""} 
        {props.contact ? <button className='bg-gray-400  hover:bg-gray-500 text-black font-medium  px-5 rounded py-3 mt-4 sm:hidden md:block' onClick={contactUs}>{props.contact}</button>:""} 

         { isAuthenticated ?  <button className='bg-gray-400  hover:bg-gray-500 text-black font-medium  px-5 rounded py-3 mt-4 sm:hidden md:block' onClick={logout}>{props.right}</button> : ""}
        </div>
         <div className='inline absolute top-6 right-4 md:hidden'>
         <button onClick={openDialog}>

         <MenuIcon className="scale-150"  />
         {
         }
        
         </button>
         </div>

         {/* code responsible for openDialog function */}
         <div id='dialog' className='h-full  bg-gray-600 w-1/2 hidden z-50 absolute  top-0 right-0 flex flex-col p-2'>

         { isAuthenticated ?  <button className='bg-gray-400  hover:bg-gray-500 text-black font-medium  px-5 rounded py-3 mt-4 ' onClick={logout}>{props.right}</button> :""}
        {props.about ? <button className='bg-gray-400  hover:bg-gray-500 text-black font-medium  px-5 rounded py-3 mt-4 ' onClick={aboutUs}>{props.about}</button>:""} 
        {props.contact ? <button className='bg-gray-400  hover:bg-gray-500 text-black font-medium  px-5 rounded py-3 mt-4 ' onClick={contactUs}>{props.contact}</button>:""} 
        { <button className='bg-gray-400  hover:bg-gray-500 text-black font-medium  px-5 rounded py-3 mt-4 '><Link  target='_blank' to={"https://drive.google.com/file/d/1P2V5717Za8tRBZnH8sa7ygQN2nuxlaM5/view?usp=sharing"}>Download App</Link></button>} 

          <button className='absolute bottom-6 right-1/2 scale-150' onClick={closeDialog}>
            <CloseIcon/>
          </button>
         </div>

        </div>




      </div>
    </div>
    


  )
}

export default Navbar