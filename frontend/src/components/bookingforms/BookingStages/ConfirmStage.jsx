import { GrGroup} from 'react-icons/gr'; 
import { AiOutlineCalendar, AiOutlineClockCircle  } from 'react-icons/ai'; 
import H4 from '@material-tailwind/react/Heading4';
import Paragraph from '@material-tailwind/react/Paragraph';
import React, { useState, useRef, useEffect } from 'react';


const ConfirmStage = (stageThree, partySize, timeSlot, handleSubmit, setName, setEmail, setPhoneNumber,
                       email, phoneNumber, setStageThree, setStageTwo, dateShow, name ) => {

useEffect(() => {
userRef.current.focus();
        }, [])
                          
useEffect(() => {
setErrMsg('');
    }, [name, email, phoneNumber])

                          
const userRef = useRef();
const errRef = useRef();
const [errMsg, setErrMsg] = useState('');

    return (

<div className="card-body mx-auto text-center w-full" style= {{ display: stageThree ? "block" : "none"  }}>
    <H4> Current Booking details: </H4>
    <div className="text-center flex pt-5 ">
       <div className="flex-col mx-auto">
       <Paragraph color="blueGray">
         <div><GrGroup className="mx-auto inline-block text-2xl"/> </div> 
          <div>{partySize} </div>
         </Paragraph>
       </div>
       <div className="flex-col mx-auto">
       <Paragraph color="black">
     <div><AiOutlineCalendar className="mx-auto inline-block text-3xl"/></div>
     {dateShow}  
      </Paragraph>
       </div>
       <div className="flex-col mx-auto">
      <Paragraph color="black"> 
       <div> 
          <AiOutlineClockCircle className="mx-auto inline-block text-3xl"/> 
      </div>
      <div>
      {timeSlot} 
      </div>
      </Paragraph>
       </div>
    </div>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen" } aria-live="assertive">{errMsg}</p>
    <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
  
    
          <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200"> 
          <input className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
            placeholder='Full Name'
             type="text" id="name" ref={userRef} autoComplete="off" onChange={(e)=> setName(e.target.value)} value={name} required />
             </div> 
             <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
        
          <input className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" type="text" id="email"
           placeholder='Email'
           onChange={(e)=> setEmail(e.target.value)} value={email} required />
             </div>
       <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 ">
          <input className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" type="text" id="phoneNumber" 
           placeholder='Phone Number' onChange={(e)=> setPhoneNumber(e.target.value)} value={phoneNumber} required />
       </div>
     
       <div className="flex ">
          <div className="card-actions justify-start mx-auto">
             <button onClick={() => [setStageTwo(true), setStageThree(false)]} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
          font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Back</button>
          </div>
          <div className="justify-end mx-auto">
             <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
                font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" >
             <span className="absolute left-0 inset-y-0 flex items-center pl-3">
             </span> Complete Booking </button> 
          </div>
       </div>
    </form>
 </div>

    )

}

export default ConfirmStage