import { signOut } from 'firebase/auth';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVTAR } from '../utils/constants';

const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }

  useEffect(() => {
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
     const {uid,email,displayName}=user
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      navigate("/browse")
      } else {
       dispatch(removeUser())
       navigate("/")
      }
    }); 
    // Unsubscribe when component unmounts 
    return () => unsubscribe()
  }, [])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-48" src={LOGO} alt="nteflix-logo"/>
      { user &&( <div className='flex p-3 gap-4'>
          <img alt='user_icon' src={USER_AVTAR} className='w-12 h-12'/>
          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
        )}

    </div>
  )
}

export default Header