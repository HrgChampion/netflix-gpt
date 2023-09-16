import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="nteflix-logo"/>
      { user &&( <div className='flex p-3 gap-4'>
          <img alt='user_icon' src='https://www.wackybuttons.com/designcodes/0/110/1108492.png' className='w-12 h-12'/>
          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
        )}

    </div>
  )
}

export default Header