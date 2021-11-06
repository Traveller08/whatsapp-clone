import React from 'react'

function ChatMessage({senderName , recieverName , mesg , time , isSender}) {
  
    return (
       <>
       {
           isSender ?(
            <p className='chat__reciever chat__message'>
                <span className='chat__name'>
                    {senderName}
                </span>
                {mesg}
                <span className='chat__timestamp'>
                    {new Date(time).toUTCString()}
                </span>
            </p>
           ):(
            <p className='chat__message'>
                <span className='chat__name'>
                    {senderName}
                </span>
                {mesg}
                <span className='chat__timestamp'>
                    {new Date(time).toUTCString()}
                </span>
            </p>
           )
       }
       </>
    )
}

export default ChatMessage
