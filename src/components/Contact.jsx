import React from 'react'

function Contact() {
  return (
    <>
    <div>
        <div className=' w-[100%] h-[9%] bg-sky-800 hover:bg-sky-900 rounded-md flex items-center gap-3  border-b-[1px] border-gray-500'>
         <img className=' w-[11%] h-[80%] rounded-full' src="src/assets/contact.bmp" alt="contact" />
         <div className='flex items-center flex-col'>
             <h2 className=' font-semibold text-white '>Ashleyyy</h2>
             <span>Hello</span>
         </div>
        </div>
        <div className=' w-[100%] h-[9%] bg-sky-800 hover:bg-sky-900 rounded-md flex items-center gap-3  border-b-[1px] border-gray-500 '>
         <img className=' w-[11%] h-[80%] rounded-full' src="src/assets/contact.bmp" alt="" />
         <div className=' flex items-center flex-col'>
             <h2 className=' font-semibold text-white '>Ashleyyy</h2>
             <span>Hello</span>
         </div>
        </div>
    </div>
   
    </>
    
  )
}

export default Contact
