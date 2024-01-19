import React from 'react'


function Work() {
  return (
    <div className="relative dark:bg-slate-600 min-h-[100vh]">
      <div className=" p-5">
        <h1 className="text-[30px] font-bold ml-[650px] mb-[20px]">My works</h1>
            <div className="flex flex-col lg:flex-row gap-10 flex-wrap">
            <div className="w-[100%] h-[300px] lg:w-[300px] lg:h-[300px] bg-slate-400 dark:bg-slate-50 rounded-md p-3 flex items-center flex-col hover:scale-105 transition duration-150">
                <img src="https://i.pinimg.com/originals/1a/29/04/1a29046bb1bea902f9f3b4cd2dc2e727.png" alt="" className="h-[180px] w-[250px]"/>
                <h3 className="text-white dark:text-black mt-3">Food Application</h3>
                <button className='bg-blue-500 w-[100px] rounded-md p-1 text-white cursor-pointer hover:bg-blue-800 m-1'>Preview</button>
            </div>
            <div className="w-[100%] h-[300px] lg:w-[300px] lg:h-[300px] bg-slate-400 dark:bg-slate-50 rounded-md p-3 flex items-center flex-col hover:scale-105 transition duration-150">
                <img src="https://uideck.com/wp-content/uploads/edd/2021/06/fitness.jpg" alt="" className="h-[180px] w-[250px]"/>
                <h3 className="text-white dark:text-black mt-3">Gym Website</h3>
                <button className='bg-blue-500 w-[100px] rounded-md p-1 text-white cursor-pointer hover:bg-blue-800 m-1'>Preview</button>
            </div>
            <div className="w-[100%] h-[300px] lg:w-[300px] lg:h-[300px] bg-slate-400 dark:bg-slate-50 rounded-md p-3 flex items-center flex-col hover:scale-105 transition duration-150">
                <img src="https://w3layouts.com/wp-content/uploads/2021/06/dogs-care-website-template-1-scaled.jpg" alt="" className="h-[180px] w-[250px]"/>
                <h3 className="text-white dark:text-black mt-3">Pet Store</h3>
                <button className='bg-blue-500 w-[100px] rounded-md p-1 text-white cursor-pointer hover:bg-blue-800 m-1'>Preview</button>
            </div>
            <div className="w-[100%] h-[300px] lg:w-[300px] lg:h-[300px] bg-slate-400 dark:bg-slate-50 rounded-md p-3 flex items-center flex-col hover:scale-105 transition duration-150">
                <img src="https://xdfile.com/wp-content/uploads/2021/08/Online-Train-Ticket-Booking-Service-XD-Website-Template-758x559.jpg" alt="" className="h-[180px] w-[250px]"/>
                <h3 className="text-white dark:text-black mt-3">Ticket Booking App</h3>
                <button className='bg-blue-500 w-[100px] rounded-md p-1 text-white cursor-pointer hover:bg-blue-800 m-1'>Preview</button>
            </div>
            <div className="w-[100%] h-[300px] lg:w-[300px] lg:h-[300px] bg-slate-400 dark:bg-slate-50 rounded-md p-3 flex items-center flex-col hover:scale-105 transition duration-150">
                <img src="https://themewagon.com/wp-content/uploads/2018/10/radisson-1.jpg" alt="" className="h-[180px] w-[250px]"/>
                <h3 className="text-white dark:text-black mt-3">Resort Booking App</h3>
                <button className='bg-blue-500 w-[100px] rounded-md p-1 text-white cursor-pointer hover:bg-blue-800 m-1'>Preview</button>
            </div>
            
            

            </div>
      </div>
    </div>
  )
}

export default Work