import React from 'react'
// import {Reactjs} from '../assets'

function Contact() {
  return (
    <div className="relative w-[100%] dark:bg-slate-600 min-h-[100vh] flex justify-center items-center p-5">
      <div className=" bg-slate-400 dark:bg-white w-[30rem] h-[20rem] p-[50px] flex flex-col justify-center items-center  rounded-xl">
      <form className="flex flex-col gap-2" >
        <div>
          <label htmlFor="" className="dark:text-black text-white">Name:</label><br />
          <input type="text" placeholder='John Doe' 
          className="w-[300px] p-1 dark:border-solid border-2 border-none rounded-md focus:outline-none" />
        </div>
        <div>
          <label htmlFor="" className="dark:text-black text-white">Email:</label><br />
          <input type="text" placeholder='john@abc.com' 
          className="w-[300px] p-1 dark:border-solid border-2 border-none rounded-md focus:outline-none"  />
        </div>
        <div>
          <label htmlFor="" className="dark:text-black text-white">Message:</label><br />
          <textarea   className=' text-black rounded-md focus:outline-none w-[300px] p-1 dark:border-solid border-2 border-none' placeholder='Type here...'>
                
          </textarea>
        </div>
        <button className='bg-blue-500 w-[100px] rounded-md p-1 text-white cursor-pointer hover:bg-blue-800 ml-[100px]'>Send</button>
        </form>
        
        
      </div>
    </div>
  )
}

export default Contact