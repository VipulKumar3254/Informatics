import React,{useRef} from 'react'
import mobileView from "../assets/mobileView.png"
import webView from "../assets/webview.png"

function AboutUs() {
    const aboutUs= useRef(null);
    return (
        <div ref={aboutUs} id='aboutussection' className="min-h-7vh bg-stone-400 xl:pt-12 pt-6 ">

            <h1 className='text-2xl   font-semibold font-sans text-cyan-900 text-center'>We are here to provide X-platform notes taking facility with minimal efforts.</h1>
            <div className=" flex xl:mt-12 xl:flex-row  xl:p-5 sm:p-2 flex-col">

                <div className='xl:w-1/2 flex   sm:justify-center sm:items-center xl:justify-start xl:items-start  flex-col xl:ml-24 p-4 w-full'> 


                    <p className='text-lg xl:mt-4  text-sky-950 sm:text-justify ' >We are here to make a difference in the market of study materials. We are taking this service as steping stone in changing the way how a student can learn and how a student can take notes. In upcoming some time we will improve this service to provide much more services to end user so that we can build a one stop solution to all of the needs of a student or working professional.</p>
                    <p className='text-lg mt-4  text-sky-950  sm:hidden xl:block'> We provide our service through web and mobile application. <br /> You can download our android application from playstore. <br /> And you  can also  access our web service on informatics.com</p>

                </div>
                <div className=" xl:w-1/2  pb-2">
                    <img src={mobileView} alt=""  className="xl:h-72 border outline-none xl:rounded-3xl m-auto h-96 rounded-4xl "/>
                </div>

            </div>
        </div>
    )
}

export default AboutUs  