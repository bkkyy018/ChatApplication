import React from 'react'

function Input() {
  return (
    <>
    <div className=' w-[100%] h-[3em] bg-white flex items-center justify-between'>
      <input className=' outline-none shadow-2xl w-[70%] placeholder: ml-7' type="text" placeholder='type something.....' />
      <div className=' flex items-center justify-end gap-4 mr-2'>
        <img className=' cursor-pointer' src="src/assets/attach.png" alt="" height="30px" width="30px" />
        <input className=' hidden' type="file" name="" id=""/>
        <label className=' cursor-pointer' htmlFor="file">
          <img src="src/assets/img.png" alt="" height="30px" width="30px" />
        </label>
        <button className=' bg-sky-600 rounded-lg p-1 hover:bg-sky-800'>send</button>
      </div>
    </div>
    </>
   
  )
}

export default Input
