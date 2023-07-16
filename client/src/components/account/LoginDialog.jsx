import React, { useState} from 'react'
import { Dialog } from '@mui/material'
import {CiMenuKebab} from 'react-icons/ci'
import {FiSettings} from 'react-icons/fi'
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../redux/loginSlice'



//component import
import {qrCodeImage} from '../../constants/data'
import { addUser } from '../../service/api'


const dialogStyle = {
    height: '80%',
    width: '60%',
    marginTop: '15%',
    marginBottom: '15%',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'none'

}

const LoginDialog = () => {
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({});
    const loginInfo = useSelector((state)=>state.login);
    const activeUsers = useSelector((state)=>state.activeUsers);
    
    
    const onLoginSuccess = async (resp)=>{
        const decoded = jwt_decode(resp.credential);
        dispatch(login(decoded));
        setUserInfo(loginInfo);
        await addUser(decoded);

        
    }
    console.log(userInfo);
    console.log(activeUsers);

    const onLoginError = (err) =>{
        console.log("login failed", err);
    }

  return (
    <div>
        <Dialog open={true} PaperProps={{sx:dialogStyle}}>
                <div className='md:flex text-slate-600'>
                    <div className=' w-3/5 p-5 m-4'>
                        <p className='text-3xl'>Use WhatsApp on your computer</p>
                        <ol className='mt-4 text-lg'>
                            <li className='my-2'>1. Open WhatsApp on your phone</li>
                            <li className='flex my-2'>2. Tap <strong>&nbsp;Menu </strong> <CiMenuKebab className='content-center text-center mt-1 mx-1'/> <p> or <strong>&nbsp;settings</strong></p> <FiSettings className='content-center text-center mt-1 mx-2'/> and select <strong>&nbsp;Linked Device</strong> </li>
                            <li className='my-2'>3. Tap on <strong>Link a Device</strong> </li>
                            <li className='my-2'>4. Point your phone to this screen to capture the QR code</li>
                        </ol>
                    </div>
                    <div className='my-7 mx-auto relative '>
                        <img src={qrCodeImage} alt="qr code" className='h-[200px]'/>
                        <div className='absolute top-20 left-0'>
                            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
                        </div>
                    </div>
                </div>

        </Dialog>
    </div>
  )
}

export default LoginDialog