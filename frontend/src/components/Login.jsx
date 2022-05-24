import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid'
import H4 from '@material-tailwind/react/Heading4';
import axios from 'axios';



/**
 * Web Component that displays the form
 * for the log in page before the user
 * is authenticated. It also takes the login
 * logic from the ReadingList components
 * 
 * @author Scott Mains
 */

const Login = () => {
  const [showModal, setShowModal] = React.useState(false);
  let navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [userId, setUserId] = useState('');



useEffect(() => {
    setErrMsg('');
}, [email, password])

const handleSubmitLogin = async (e) => {
  e.preventDefault();
  try {
    const fd = new FormData();
    fd.append('email', email);
    fd.append('password', password);
      const response = await axios.post('http://localhost/kv6003/backend/api/authenticate', fd) 
      .then((res)=> {
      localStorage.setItem("sliceLogin", res.data.results.token);
      console.log(res.data.results)
      window.location.reload(false);
      
      });
      
    }
  catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
          setErrMsg('Missing Student ID or Password');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg('Login Failed');
      }
      errRef.current.focus();
  }
}

  return (
    <>
   
      <button
        className="btn btn-primary ml-3"
        type="button"
        onClick={() => setShowModal(true)}
      > 
       LOGIN
      </button> 
      {showModal ? (
        <>
<div
   className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
   >
   <div className="relative w-11/12 md:w-2/4 my-6 mx-auto ">
      <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
         <div className="flex items-start justify-between md:p-5 rounded-t ">
            <button
               className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
               onClick={() => setShowModal(false)}
            >
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none ">
            </span>
            </button>
         </div>
         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
               <div className="text-center">
                  <H4 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">LOGIN</H4>
               </div>
               <p ref={errRef} className={errMsg ? "errmsg" : "offscreen" } aria-live="assertive">{errMsg}</p>
               <form className="mt-8 space-y-6" onSubmit={handleSubmitLogin}>
                  <div className="rounded-md shadow-sm -space-y-px">
                     <label htmlFor="email">Email:</label>
                     <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm" 
                        type="text" id="email" ref={userRef} autoComplete="off" onChange={(e)=> setEmail(e.target.value)} value={email} required />
                  </div>
                  <div className="rounded-md shadow-sm -space-y-px">
                     <label htmlFor="password">Password:</label>
                     <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm"
                        type="password" id="password" onChange={(e)=> setPassword(e.target.value)} value={password} required />
                  </div>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-rose-300 focus:ring-rose-500 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                     </div>
                     <div className="text-sm">
                        <a href="#" className="font-medium text-rose-600 hover:text-rose-500"> Forgot your password? </a>
                     </div>
                  </div>
                  <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 
                     hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                     <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-rose-200 group-hover:text-rose-400" aria-hidden="true" />
                     </span>
                     Sign in 
                  </button>
               </form>
               
            </div>
         </div>
         {/*footer*/}
         <div className="flex items-center justify-end p-6  rounded-b">
            <button
               className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
               type="button"
               onClick={() => setShowModal(false)}
            >
            Close
            </button>
         </div>
      </div>
   </div>
</div>
<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
) : null}
</>
  )
}

export default Login
