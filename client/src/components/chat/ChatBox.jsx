import React, { useEffect, useState, useRef } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiMoreVertical} from 'react-icons/fi'
import {BsEmojiSmile} from 'react-icons/bs'
import {GrAttachment} from 'react-icons/gr'
import {BsFillMicFill} from 'react-icons/bs'
import {io} from 'socket.io-client'


import { useSelector } from 'react-redux'
import { getConversation, getMessages, newMessage, uploadFile } from '../../service/api'
import Message from './Message'

const ChatBox = () => {
    const socketConn = io('ws://localhost:9000');
    const loggedInUser = useSelector((state)=>state.loginInfo);
    const selectedUser = useSelector((state)=>state.selectedUser);
    const activeUsers = useSelector((state)=>state.activeUsers.activeUsers);
    console.log(activeUsers);
    const [inputValue, setInputValue] = useState("");
    const [conversation, setConversation] = useState({});
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();
    const [imageUrl, setImageUrl] = useState("");
    const [incomingMessage, setIncomingMessage] = useState(null);
    const scrollRef = useRef();

    useEffect(()=>{
        const getConversationDetails = async ()=>{
            let data = await getConversation({senderEmail: loggedInUser.email, recieverEmail: selectedUser.email});
            console.log(data);
            setConversation(data);

            if(data._id){
                let messageData = await getMessages(data._id);
                setMessages(messageData);
            }

        }
        getConversationDetails();

    }, [selectedUser, newMessageFlag])


    const sendText = async (e)=>{
        const code = e.keyCode || e.which;
        if(code === 13 && inputValue !== "") {    //key code for Enter is 13
            let message = {};
            if(!file){
             message = {
                senderEmail: loggedInUser.email,
                recieverEmail: selectedUser.email,
                conversationId: conversation._id,
                type: "text",
                text: inputValue
            }

        }
        else{
             message = {
                senderEmail: loggedInUser.email,
                recieverEmail: selectedUser.email,
                conversationId: conversation._id,
                type: "file",
                text: imageUrl
            }
        }

            try{

                socketConn.emit('sendMessage', message);

                await newMessage(message);

                socketConn.on('getMessage', (data)=>{
                    console.log(data);
                    setIncomingMessage({
                        ...data,
                        createdAt: Date.now()
                    })
                })
                
                setInputValue("");
                setFile("");
                setImageUrl("");
                setNewMessageFlag((prev)=> !prev);
            }
            catch(err){
                console.log("something went wrong");
            }

        }
    }

    useEffect(()=>{
        socketConn.on('getMessage', (data)=>{
            console.log(data);
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    },[]);

    useEffect(()=>{
        incomingMessage && conversation?.members?.includes(incomingMessage.senderEmail) &&
            setMessages((prev)=>[...prev, incomingMessage]);
    },[incomingMessage, conversation])

    useEffect(()=>{
        const setImage = async ()=>{
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response = await uploadFile(data);
                setImageUrl(response.data);
            }
        }
        setImage();
    },[file])

    const onFileChange = (e)=>{
        console.log(e);
        setFile(e.target.files[0]);
        setInputValue(e.target.files[0].name);
    }
    

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({transition: 'smooth'})
    },[messages])

  return (
    <div className=''>
        {/* Chat Header */}
        <div className='bg-slate-200 h-12 flex justify-between items-center'>
            <div className='flex items-center gap-3 ml-3'>
                <img src={selectedUser.picture} alt="" className='h-9 w-9 rounded-full object-cover'/>
                <div>
                    <p>{selectedUser.name}</p>
                    <p className=' text-slate-500 text-xs'>{activeUsers.find((user)=> user.email === selectedUser.email) ? 'Online' : 'Offline'}</p>
                </div>
            </div>
            <div className='flex gap-3 mr-2'>
                <AiOutlineSearch className='text-2xl cursor-pointer'/>
                <FiMoreVertical className='text-2xl cursor-pointer'/>
            </div>

        </div>

        {/* Chat box */}
        <div className='h-[80vh] overflow-y-scroll bg-[url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")]'>
            Chat box
            {
                messages && messages.map((message)=>(
                    <div ref={scrollRef}>
                    <Message message = {message}/>
                    </div>
                ))
            }
        </div>

        {/* footer for typing text */}
        <div className='flex gap-3 items-center h-[60px] mx-4'>
            <BsEmojiSmile className='text-2xl text-slate-600 cursor-pointer'/>
            <label htmlFor="fileinput">
            <GrAttachment className='text-2xl text-slate-600 cursor-pointer'/>
            </label>
            <input type="file" id="fileinput" className='hidden' onChange={(e)=>onFileChange(e)} />
            <input type="text" 
                onChange={(e)=>setInputValue(e.target.value)} 
                onKeyDown={(e)=>sendText(e)}
                value={inputValue}
                className='h-9 w-full rounded-md border-none outline-none'/>
            <BsFillMicFill className='text-2xl text-slate-600 cursor-pointer'/>

        </div>
    </div>
  )
}

export default ChatBox