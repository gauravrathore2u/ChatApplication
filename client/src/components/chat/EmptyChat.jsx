import React from 'react';
import {emptyChatImage} from '../../constants/data'

const EmptyChat = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center text-center py-7'>
      <div className='flex flex-col items-center justify-center '>
       <img src={emptyChatImage} alt="" className='w-[400px]'/>
       <p className='m-5 text-3xl text-slate-500'>WhatsApp Web</p>
       <p className='text-slate-500'>Now send and receive messages without keeping your phone online.</p>
       <p className='text-slate-500'>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
      </div>
    </div>
  )
}

export default EmptyChat