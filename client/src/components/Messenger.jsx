//Library import
import React, { useEffect } from "react";
import { AppBar, Toolbar, styled, useAutocomplete } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/loginSlice";
import {io} from 'socket.io-client'
import { setActiveUsers } from '../redux/activeUsersSlice';

//components import
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

//override mui with style
const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Messenger = () => {
  const user = useSelector((state) => state.loginInfo);

  const dispatch = useDispatch();

  const socketConn = io('ws://localhost:9000');

  useEffect(()=>{
    socketConn.emit('addUsers', user);
        socketConn.on('getUsers', (users)=>{
            dispatch(setActiveUsers(users));
        })
  },[user]);

  return (
    <div>
        {/* <>
          <Header>
            <Toolbar />
          </Header>
          <ChatDialog />
        </> */}
      {user.email_verified ? (
        <>
          <Header>
            <Toolbar />
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <Header>
            <Toolbar />
          </Header>
          <LoginDialog />
        </>
      )}
    </div>
  );
};

export default Messenger;
