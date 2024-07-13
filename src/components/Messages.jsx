import React from 'react'
import Message from './Message'

function Messages() {
  return (
    <>
     <div className=' h-[35rem] overflow-y-scroll'>
        <Message/>
        <Message/>
        <Message/>
      </div>
    </>
  )
}

export default Messages
