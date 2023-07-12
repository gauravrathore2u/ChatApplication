import React, { useState } from 'react';
import ChatMenuHeader from './ChatMenuHeader';
import ChatMenuSearch from './ChatMenuSearch';
import ChatConversation from './ChatConversation';


const ChatMenu = () => {
  
  const [searchText, setSearchText] = useState("");

  return (
    <div>
        <ChatMenuHeader/>
        <ChatMenuSearch setSearchText={setSearchText}/>
        <ChatConversation searchText={searchText}/>
    </div>
  )
}

export default ChatMenu