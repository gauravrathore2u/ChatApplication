import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ChatMenuSearch = ({setSearchText}) => {
  return (
    <div className="h-12 bg-slate-100 flex items-center justify-center border-b-[1px] shadow-sm">
      <div className="flex gap-1 items-center h-9 bg-white m-[4px] rounded-md w-full">
        <AiOutlineSearch className="text-2xl ml-2 text-slate-500" />
        <input type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder="search or start new chat" className="border-none bg-transparent outline-none"></input>
      </div>
    </div>
  );
};

export default ChatMenuSearch;
