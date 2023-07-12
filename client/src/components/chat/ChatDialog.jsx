import React from 'react'
import { Dialog } from '@mui/material'


import ChatMenu from './ChatMenu'
import EmptyChat from './EmptyChat'
import ChatBox from './ChatBox'
import { useSelector } from 'react-redux'


const dialogStyle = {
  height: '95%',
  width: '95%',
  marginTop: '15%',
  marginBottom: '15%',
  maxHeight: '100%',
  maxWidth: '100%',
  boxShadow: 'none',
  overflow: 'none'

}

const ChatDialog = () => {

  const selectedUser = useSelector((state)=>state.selectedUser);

  return (
    <div>
        <Dialog open={true} PaperProps={{sx:dialogStyle}}>
        {/* <Dialog open={true} className='h-[95%] w-[95%] bg-red-400 m-auto max-h-full max-w-full shadow-none overflow-hidden'> */}
  
          <div className='flex gap-2'>
            <div className='w-1/3'>
                <ChatMenu />
            </div>
            <div className='bg-slate-100 w-3/4'>
              {selectedUser.name !== "" ? <ChatBox/> : <EmptyChat />}
            </div>
          </div>
        </Dialog>
    </div>
  )
}

export default ChatDialog