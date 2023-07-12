import React from 'react'
import { setSelectedUser } from '../../redux/selectedUserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setConversation } from '../../service/api'


const Chats = ({user}) => {
    const dispatch = useDispatch();

    const loggedInUser = useSelector((state)=>state.loginInfo);

    const selectedUser = async ()=>{
        dispatch(setSelectedUser(user));
        await setConversation({senderEmail: loggedInUser.email, receiverEmail: user.email});
    }

  return (
    // <div className='flex h-11 py-3 cursor-pointer'>
    <div onClick={selectedUser} className='flex gap-3 py-3 border-b shadow-sm cursor-pointer'>
        <div>
            <img src={user.picture} alt="" className='rounded-full h-10 ml-3'/>
        </div>

        <div>
            <div>
                <p>{user.name}</p>
            </div>
        </div>
    </div>
  )
}

export default Chats