import React, { useState } from 'react'
import {FiMoreVertical} from 'react-icons/fi'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {styled} from '@mui/material'


const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4a4a4a;
`

const HeaderMoreMenu = ({setOpenDrawer}) => {
    const [open, setOpen] = useState(null);

    const handleClose = ()=>{
        setOpen(null)
    }

    const handleClick = (e)=>{
        setOpen(e.currentTarget);
    }

    const handleProfileDrawer = ()=>{
        setOpenDrawer(true);
        setOpen(null);
    }

  return (
    <div>
        <FiMoreVertical onClick={handleClick} className='text-2xl mr-2 cursor-pointer'/>
        <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1 = {null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
       >
        <MenuOption onClick={handleProfileDrawer}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </div>
  )
}

export default HeaderMoreMenu