import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setisSigninForm] = useState(true);
  const toggleSignInForm = () => {
    setisSigninForm(!isSigninForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 m-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        { !isSigninForm?<input
          type="text"
          placeholder="Full Name"
          className="p-4 m-4 w-full bg-gray-700"
        />:null}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 m-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-700"
        />
        <button className="p-4 m-6 mx-4 bg-red-700 w-full rounded-lg">
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
