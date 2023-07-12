import React, { useEffect, useState } from 'react'
import { getUsers } from '../../service/api'

import Chats from './Chats';
import { useSelector } from 'react-redux';



const ChatConversation = ({searchText}) => {

    const [users, setUsers] = useState([]);

    const loggedInUser = useSelector((state)=>state.loginInfo);

    useEffect(()=>{
        const fetchData = async ()=>{
            let response = await getUsers(); 
            const filterUser = response.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));
            setUsers(filterUser);
        }
        fetchData();
    },[searchText]);

  return (
    <div className=' h-[81vh] overflow-scroll'>
        {
            users.map((user)=>(
                loggedInUser.email !== user.email && <Chats key={user.email} user={user} /> 
            ))
        }
    </div>
  )
}

export default ChatConversation