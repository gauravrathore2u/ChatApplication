import React from "react";
import Drawer from "@mui/material/Drawer";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import {BsPencil} from 'react-icons/bs';

const drawerStyle = {
  left: "35px",
  top: "20px",
  height: "94%",
  width: "29%",
  boxShadow: "none",
};

const InfoDrawer = ({ open, setOpen }) => {
  const user = useSelector((state) => state.loginInfo);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <div className="bg-[#008069] h-[107px] text-[#FFFFFF] flex gap-5 items-end p-3">
        <BiArrowBack
          onClick={() => setOpen(false)}
          className="text-2xl cursor-pointer"
        />
        <p className="text-xl font-bold">Profile</p>
      </div>

      <div className="">
        <div className="flex justify-center items-center h-52 bg-slate-100">
          <img src={user.picture} alt="" className="rounded-full h-40" />
        </div>

        <div className="px-4 py-2 h-20 ">
            <p className="text-green-600">Your Name</p>
            <div className="flex items-center justify-between my-4">
                <p>{user.name}</p>
                <BsPencil className="text-xl text-slate-400 cursor-pointer"/>
            </div>
        </div>

        <div className="bg-slate-100 h-16">
           <p className="text-sm px-5 py-2 text-slate-500"> This is not your username or pin. This name will be visible to your whatsapp contacts.</p>
        </div>

        <div className="px-4 py-2 h-20">
        <p className="text-green-600">About</p>
            <div className="flex items-center justify-between my-4">
                <p>No call only Whatsapp</p>
                <BsPencil className="text-xl text-slate-400 cursor-pointer"/>
            </div>
        </div>
        
        <div className="px-4 py-2 h-40 bg-slate-100"></div>
      </div>
    </Drawer>
  );
};

export default InfoDrawer;
