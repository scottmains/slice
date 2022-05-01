import { Footer} from '../containers'
import { Navbar} from '../components'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-day-picker/lib/style.css';
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';

const SliceBooking = () => {
  let navigate = useNavigate();

  const [guestBook, setGuestBook] = useState(false);
  const [userBook, setUserBook] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("sliceLogin");
    if (token) {
        setAuthenticated(true);
    }
  
  }, [authenticated])
  

let page = (
  <> 
  <Navbar/> 
<div className="pt-20 pb-20  min-h-screen  ">
        <div class="card md:w-2/6 w-full bg-gray-100 shadow-xl m-auto">
            <div class="card-body">
            <H4 class="card-title">Slice Booking</H4>
           <LeadText> Welcome! please know that you can only book into our Middlesbrough restaurant at this time.</LeadText>
           <LeadText> Would you like to continue as a guest? Or log in and collect loyalty points for discounts on future meals! </LeadText>
            <div class="card-actions justify-end">
              <button onClick={() => navigate("/guest-book", { replace: true })} class="btn btn-primary">Continue as Guest</button>
            </div>
        
          </div>
        </div>
        </div>
        <Footer/>
        </>
)


if (authenticated) {
  page = (
    <> 
    <Navbar/> 

    <div className="flex pt-20 pb-20 ">
        <div class="card w-full md:w-2/6 bg-gray-100 shadow-xl m-auto ">
            <div class="card-body">
            <H4 class="card-title">Slice Booking</H4>
           <LeadText> Welcome! please know that you can only book into our Middlesbrough restaurant at this time.</LeadText>
           <LeadText> You are currently logged in. We have your details saved from when you previously signed up,
             if they are wrong please change them in account settings. </LeadText>
            <div class="card-actions justify-end">
              <button onClick={() => navigate("/user-book", { replace: true })} class="btn btn-primary">Continue</button>
            </div>
        
          </div>
        </div>
        </div>
        <Footer/>
        </>

  )
}

    return  (
    <>
     
      {page} 
        <div className="bg-gray-700"> 
       </div>
    </>
    )
    }
  
  export default SliceBooking;
  