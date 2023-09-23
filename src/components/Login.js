import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth } from '../utils/firebase'
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSigninForm, setisSigninForm] = useState(true);
  const [errorMessage,setErrorMessage] =useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const toggleSignInForm = () => {
    setisSigninForm(!isSigninForm);
  };

  const handleButtonClick=()=>{
    // Validate form data
   const message= checkValidData(email.current.value,password.current.value)
   setErrorMessage(message)
  if(message) return ;

  if(!isSigninForm){
//Signup Logic
createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
    // ..
  });
  }else{
//Signin Logic
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
  });

  }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="background"
        />
      </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 m-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        { !isSigninForm?<input
          type="text"
          placeholder="Full Name"
          className="p-4 m-4 w-full bg-gray-700"
        />:null}
        <input
        ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 m-4 w-full bg-gray-700"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-700"
        />
        <p className="text-red-500 mx-4">{errorMessage}</p>
        <button className="p-4 m-6 mx-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
        {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
         { isSigninForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
