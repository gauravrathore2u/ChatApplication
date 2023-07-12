import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {BiLoaderCircle} from 'react-icons/bi'
import HeaderMoreMenu from './HeaderMoreMenu';
import InfoDrawer from '../drawer/InfoDrawer';

const ChatMenuHeader = () => {
    const pic = useSelector((state)=> state.loginInfo.picture);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = ()=>{
        setOpenDrawer(true);
    }

  return (
    <div>
    <div className='bg-slate-200 h-12 pl-2 flex items-center justify-between'>
        <img src={pic} alt="" onClick={toggleDrawer} className='w-8 h-8 rounded-full cursor-pointer'/>
        <div className='flex gap-3 items-center'>
            <BiLoaderCircle className='text-2xl mr-2 cursor-pointer'/>
            <BsFillChatLeftTextFill className='text-xl cursor-pointer'/>
            <HeaderMoreMenu setOpenDrawer={setOpenDrawer}/>
        </div>
    </div>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} /> 
    </div>
  )
}

export default ChatMenuHeader