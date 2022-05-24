import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink} from "react-router-dom";
import axios from 'axios';
import React from 'react';
import './signup.css'

const USER_REGEX = /^[a-zA-Z ,.'-]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const PHONENUMBER_REGEX = /^(\+\d{1,3}[- ]?)?\d{10}$/

const SignUp = () => {
    const [showModal, setShowModal] = React.useState(false);
    const userRef = useRef(); 
    const errRef = useRef();

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phonenumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [PhoneNumberFocus, setPhoneNumberFocus] = useState(false);

    const [password, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [signUpContent, setSignUpContent] = useState(true);

    const [forgotPasswordContent, setForgotPasswordContent] = useState(false);
    const [successForgotPassword, setSuccessForgotPassword] = useState(false);
   

    useEffect(() => {
        setValidName(USER_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [name, password, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const v1 = USER_REGEX.test(name);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
          const fd = new FormData();
          fd.append('name', name);
          fd.append('phonenumber', phonenumber);
          fd.append('email', email);
          fd.append('password', password);
            const response = await axios.post('http://localhost/kv6003/backend/api/register', fd );
            setSuccess(true);
            setSignUpContent(false);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setName('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 418) {
                setErrMsg('Student ID already in use');
            } else if (err.response?.status === 419) {
                setErrMsg('Email Address already in use');
            }
                else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    const submitForgotPassword = async (e) => {

      e.preventDefault();
      try {
        const fd = new FormData();
        fd.append('email', email);
          const response = await axios.post('http://localhost/kv6003/backend/api/forgotpassword', fd );
          setSuccessForgotPassword(true);
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          }
              else {
              setErrMsg('Registration Failed')
          }
          errRef.current.focus();
      }

    }

    const handleForgotPassword= async (e) => {
      setForgotPasswordContent(true);
      setSignUpContent(false);
    }

    let successContent;

    if (success) {
      successContent = (
     
        <div className="text-center">
          <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Success!</h3>
       <p className="pt-4">  A confirmation email has just been sent to you! </p>
        </div>
    
      )
    }

    let forgotPassword;

    if (forgotPasswordContent) {
      forgotPassword = (
        <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen" } aria-live="assertive">{errMsg}</p>
          <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Please enter your email below: </h3>
          <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 
              rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 
              focus:z-10 sm:text-sm" type="text" id="email" ref={userRef} autoComplete="off" onChange={(e)=> setEmail(e.target.value)} value={email} required
               aria-invalid={validEmail ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} />
        </div>
      
      </div>
        <button onClick={submitForgotPassword} className="group relative w-1/3 m-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2
         focus:ring-rose-500" disabled={!validEmail ? true : false}>
        <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span> Submit </button>
        </>
      )
    }

    let successForgotPasswordContent;

    if (successForgotPassword) {

      let successForgotPasswordContent = (
        <div>
          <p> Password Reset link has been emailed to you</p>
        </div>
      )
    }


    let signUp;

    if (signUpContent) {
      signUp = (

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen" } aria-live="assertive">{errMsg}</p>
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">SIGN UP</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <label htmlFor="username"> Full Name:
                <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide" } />
                <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid" } />
              </label>
              <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
              focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm" type="text" id="name" ref={userRef} autoComplete="off"
               onChange={(e)=> setName(e.target.value)} value={name} required aria-invalid={validName ? "false" : "true"} aria-describedby="uidnote" onFocus={() => 
               setNameFocus(true)} onBlur={() => setNameFocus(false)} /> <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters. <br /> Must begin with a letter. <br /> Letters, numbers, underscores, hyphens allowed.
              </p>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <label htmlFor="email"> Email:
                <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide" } />
                <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid" } />
              </label>
              <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 
              rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 
              focus:z-10 sm:text-sm" type="text" id="email" ref={userRef} autoComplete="off" onChange={(e)=> setEmail(e.target.value)} value={email} required
               aria-invalid={validEmail ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} /> 
               <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle} /> Must be a valid email <br />
              </p>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <label htmlFor="phoneNumber"> Phone Number:
              
              </label>
              <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm"
               type="text" id="phonenumber" ref={userRef} autoComplete="off" onChange={(e)=> setPhoneNumber(e.target.value)} value={phonenumber}/>
              
             
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <label htmlFor="password"> Password:
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide" } />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid" } />
              </label>
              <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm" type="password" id="password" onChange={(e)=> setPwd(e.target.value)} value={password} required aria-invalid={validPwd ? "false" : "true"} aria-describedby="pwdnote" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)} /> <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle} /> 8 to 24 characters. <br /> Must include uppercase and lowercase letters, a number and a special character. <br /> Allowed special characters: <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
              </p>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <label htmlFor="confirm_pwd"> Confirm Password:
                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide" } />
                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid" } />
              </label>
              <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm" type="password" id="confirm_pwd" onChange={(e)=> setMatchPwd(e.target.value)} value={matchPwd} required aria-invalid={validMatch ? "false" : "true"} aria-describedby="confirmnote" onFocus={() => setMatchFocus(true)} onBlur={() => setMatchFocus(false)} /> <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle} /> Must match the first password input field.
              </p>
            </div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" disabled={!validName || !validPwd || !validMatch ? true : false}>
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span> Sign Up </button>
          </form>
        </div>
      </div>
      )
    }




    return (
      <>
   
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setShowModal(true)}
      > 
      Sign Up
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
            {signUp}
            {successContent}
            {forgotPassword}
            {successForgotPasswordContent}
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

export default SignUp;