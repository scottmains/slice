import React, { useState, useRef, useEffect} from 'react';


import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { GrGroup} from 'react-icons/gr'; 
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'; 
import {MdOutlinePersonOutline} from 'react-icons/md'
import H4 from '@material-tailwind/react/Heading4';
import H3 from '@material-tailwind/react/Heading3';
import H5 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import LeadText from '@material-tailwind/react/LeadText';
import axios from 'axios';
import Navbar from '../Navbar';
import { Footer } from '../../containers';
import { UserContext } from "../../App";
import { isWithinInterval } from "date-fns";
import { differenceInCalendarDays } from 'date-fns';
var moment = require('moment'); 

const UserBookingForm = () => {

const [stageOne, setStageOne] = useState(true);
const [stageTwo, setStageTwo ]= useState(false);
const [stageThree, setStageThree ]= useState(false);
const [showTime, setShowTime] = useState(false);
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

const [value, onChange] = useState(new Date());

const [partySize, setPartySize ]= useState("1");
const [date, setDate ]= useState(null);

const [timeSlot, setTimeSlot] = useState("17:00");
const [name, setName] = useState(null);
const [email, setEmail] = useState(null);
const [phoneNumber, setPhoneNumber] = useState(null);
const [userDetails, setUserDetails] = useState('');

const [openingTime, setOpeningTime] = useState("")
const [closingTime, setClosingTime] = useState("")
const [maxOccupancy, setMaxOccupancy] = useState("")
const [timeInterval, setTimeInterval] = useState("")
const [dateShow, setDateShow] = useState(null);
const [allTimeSlots, setAllTimeSlots] = useState("")
const [restaurantInfo, setRestaurantInfo] = useState("");
const userId = React.useContext(UserContext);  
const [selected, setSelected] = React.useState([]);

const errRef = useRef();



   const getUser = async () => {
     
            const fd = new FormData();
            fd.append('userid', userId);
               const response = await axios.post('http://localhost/kv6003/backend/api/finduser',
                   fd);
           setUserDetails(JSON.stringify(response.data.results))
           var outObjA = userDetails;
   
            var outObjA = JSON.parse(outObjA);
            for (var i = 0; i < outObjA.length; i++) {
            var jsonData = outObjA[i];
            console.log(jsonData);
            setName(jsonData.name)
            setEmail(jsonData.email)
            setPhoneNumber(jsonData.phonenumber)
            
            }
         }
 
         const onDayPress = (value) => {

            let datevalueshow =  moment(value).format("DD/MM/YYYY");
            let datevalue = moment(value).format("YYYY/MM/DD");
             setDate(datevalue);
             setDateShow(datevalueshow);
             setShowTime(true); 
         
             let formData = new FormData();
             formData.append('bookingDate', datevalue);
             formData.append('maxoccupancy', maxOccupancy);
            axios.post('http://localhost/kv6003/backend/api/checktimeslots', formData)
            .then(resp => {
               if (resp.data.results) {
               setAllTimeSlots(resp.data.results[0].bookingStart)
               } else {
                  setAllTimeSlots(null);
               }
          });
           }
           const checkRestaurant =  () => {
            axios.get('http://localhost/kv6003/backend/api/checkrestaurant')
            .then(resp => {
              setRestaurantInfo(resp.data.results[0]);
              setOpeningTime(resp.data.results[0].hours_open)
              setClosingTime(resp.data.results[0].hours_closed)
              setMaxOccupancy(resp.data.results[0].max_occupancy)
              setTimeInterval(resp.data.results[0].timeInterval)
          });
          }

          
 useEffect(() => {
   const fetchData = async() => await checkRestaurant();
   fetchData();

}, []);


 

const handleSubmit = async (e) => {  
 
let url = "http://localhost/kv6003/backend/api/userreservation"
let formData = new FormData();
formData.append('userid', userId)
formData.append('partysize', partySize);
formData.append('bookingstart', timeSlot);
formData.append('bookingdate', date);

fetch(url, {   method: 'POST',
    headers : new Headers(),
    body:formData})
    .then( (response) => { 
       console.log(response)
        if ((response.status === 200) || (response.status === 204)) {
          console.log("Booking Success")
          setSuccess(true);
          setStageThree(false);
        } else {
            setErrMsg("Booking exists under this user");
            throw Error(response.statusText);
            
        }
    })
    .catch ((err) => { 
        console.log("something went wrong ", err) 
    });
  }

  const Buttons =  (e) => {  

   const toMinutes = str => str.split(":").reduce((h, m) => h * 60 + +m);
   function timeToMins(time) {
      var b = time.split(':');
      return b[0]*60 + +b[1];
    }
    let newTimeInterval = timeToMins(timeInterval);
   
   const toString = min => (Math.floor(min / 60) + ":" + (min % 60))
                          .replace(/\b\d\b/, "0$&");
   
   function slots(startStr, endStr=closingTime) {
            let start = toMinutes(startStr); 
            let end = toMinutes(endStr);
            return Array.from({length: Math.floor((end - start) / newTimeInterval) + 1}, (_, i) =>
            toString(start + i * newTimeInterval)
                           );
   }    
   
   let newTimeSlots = slots(openingTime)
   if (allTimeSlots) {
   const index = newTimeSlots.indexOf(allTimeSlots);
   if (index > -1) {
     newTimeSlots.splice(index, 1); // 2nd parameter means remove one item only
   }
   console.log(allTimeSlots)
   }
   return ( 
      newTimeSlots.map(item => (
         <button
             key={item}
             onClick={(e) => {setSelected(item); setTimeSlot(item); }}
             className= {item === selected ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-full" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" }
             value={item}
         >
             {item}
         </button>
     ))
   )
}


  return (
  <> 
  <Navbar/> 
    <div className="pt-20 pb-20 text-center h-2/3 flex h-100 " >
       {/* DISPLAYS FIRST SECTION OF BOOKING FORM  */}
    <div className="card w-full md:w-1/3 bg-gray-100 shadow-xl m-auto " >
    <div className="card-body " style= {{ display: stageOne ? "block" : "none"  }}>
       <H4 className="card-title">Party Size</H4>
       <LeadText> Please select how many people will be attending: </LeadText>
       <div className="flex justify-center flex-col mx-auto">
          <div className="mb-3 xl:w-96 mx-auto">
             <select className="form-select appearance-none
                block
                w-full
               
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={e =>
                {
                setPartySize(e.target.value);
                }}>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
             </select>
          </div>
          <div className="card-actions justify-end ">
             <button onClick={() => {setStageTwo(true); setStageOne(false); getUser()} }className="group relative w-1/3 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm 
             font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">Continue</button>
          </div>
       </div>
    </div>


 {/* DISPLAYS SECOND SECTION OF BOOKING FORM  */}

 <div className="card-body text-center" style= {{ display: stageTwo ? "block" : "none"  }} >
    <H4 className="card-title">Date</H4>
    <LeadText> Please select the date you woud like to attend: </LeadText>
   
    <Calendar 
    className="mx-auto"
    onChange={onChange}
    value={value}
    onClickDay={onDayPress}
    minDate={new Date()}/> 
    <div className="flex justify-center">
       <div className="mb-3 pt-5 xl:w-96">
         <Buttons/>
       </div>
    </div>
    <div className="flex">
       <div className="card-actions justify-start mx-auto ">
          <button onClick={() => {setStageTwo(false); setStageOne(true)}} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
          font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Back</button>
       </div>
       <div className="card-actions justify-end content-end mx-auto ">
          <button disabled={date === null} onClick={() => {setStageThree(true); setStageTwo(false); getUser()}} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
          font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"> Continue </button>
       </div>
    </div>
 </div>


 {/* DISPLAYS THIRD SECTION OF BOOKING FORM  */}

 <div className="card-body mx-auto text-center" style= {{ display: stageThree ? "block" : "none"  }}>
                   
    <H3 color="gray"> Current Booking details: </H3>
    <div className="text-center flex pt-5 pb-10 ">
       <div className="flex-col mx-auto">
   
         <div><GrGroup className="mx-auto inline-block text-2xl"/> </div> 
          <div className="text-xl">
             {partySize} 
             </div>
       </div>
       <div className="flex-col mx-auto">
     <div><AiOutlineCalendar className="mx-auto inline-block text-3xl"/></div>
     <div  className="text-xl">
     {date}  
    </div>
       </div>
       <div className="flex-col mx-auto ">
       <div> 
          <AiOutlineClockCircle className="mx-auto inline-block text-3xl"/> 
      </div>
      <div  className="text-xl">
      {timeSlot} 
      </div>
       </div>
    </div>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen" } aria-live="assertive">{errMsg}</p>
      <div className='card-body bg-white rounded-xl shadow-sm'> 
    <div className="flex items-center text-xl">
                <div className="pr-3 text-2xl"> <MdOutlinePersonOutline/> </div>
                <div>
            <p className="postCredit">
            {name}
            </p>  
            </div>
            </div>

            <div className="flex items-center pt-4 text-xl">
                <div className="pr-3 text-2xl"> <AiOutlineMail/>  </div>
                <div>
            <p className="postCredit">
            {email}
            </p>  
            </div>
            </div>
            <div className="flex items-center pt-4 text-xl">
                <div className="pr-3 text-2xl"> <AiOutlinePhone/> </div>
                <div>
            <p className="postCredit">
            {phoneNumber}
            </p>  
            </div>
            </div>
            <div>
            <p className="text-sm pt-4"> Wrong details? Change them <a className="text-blue-600" href="/user-dashboard"> here </a></p>
            </div>
            </div>

            
       <div className="flex pt-10">
          <div className="card-actions justify-start mx-auto">
             <button onClick={() => [setStageTwo(true), setStageThree(false)]} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
          font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Back</button>
          </div>
          <div className="justify-end mx-auto">
             <button onClick={(e) => handleSubmit()} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
                font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" >
             <span className="absolute left-0 inset-y-0 flex items-center pl-3">
             </span> Complete Booking </button> 
          </div>
       </div>
  
 </div>


 {/* DISPLAYS SUCCESS SECTION OF BOOKING FORM */}

 <div className="card-body mx-auto text-center" style= {{ display: success ? "block" : "none"  }}>
 <H3 color="gray"> Success!</H3>
    <div className="text-center">
    <Paragraph color="black"> You have successfully booked into our restaurant! </Paragraph>
   <Paragraph color="black"> You have been sent an e-mail with the booking details. You can also see 
                           your upcoming booking on your Account page.</Paragraph>
       </div>
    </div>
</div>
</div>
<Footer/>
</>
  )
}

export default UserBookingForm

 


  