import React, { useState, useRef, useEffect } from 'react';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { GrGroup} from 'react-icons/gr'; 
import { AiOutlineCalendar, AiOutlineClockCircle  } from 'react-icons/ai'; 
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';
import Navbar from '../Navbar';
import { Footer } from '../../containers';
import Paragraph from '@material-tailwind/react/Paragraph';
import axios from 'axios';


const GuestBookingForm = () => {

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
const [dateShow, setDateShow] = useState(null);
const [restaurantInfo, setRestaurantInfo] = useState("");

const [openingTime, setOpeningTime] = useState("")
const [closingTime, setClosingTime] = useState("")
const [maxOccupancy, setMaxOccupancy] = useState("")
const [timeInterval, setTimeInterval] = useState("")

const [allTimeSlots, setAllTimeSlots] = useState("")
const [buttonClicked, setButtonClicked] = useState(false)
const [selected, setSelected] = React.useState([]);

const userRef = useRef();
const errRef = useRef();
var moment = require('moment'); 

useEffect(() => {
  userRef.current.focus();
}, [])

useEffect(() => {
  setErrMsg('');
}, [name, email, phoneNumber])


const onDayPress = (value) => {

   let datevalueshow =  moment(value).format("DD/MM/YYYY");
   let datevalue = moment(value).format("YYYY/MM/DD");
    setDate(datevalue);
    setDateShow(datevalueshow);
    setShowTime(true); 

    let formData = new FormData();
    formData.append('bookingDate', datevalue);
    formData.append('maxoccupancy', maxOccupancy);
   axios.post('https://sliceboro.herokuapp.com/backend/api/checktimeslots', formData)
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
  e.preventDefault();
let url = "http://localhost/kv6003/backend/api/guestreservation"
let formData = new FormData();
formData.append('partysize', partySize);
formData.append('bookingstart', timeSlot);
formData.append('bookingdate', date);
formData.append('phonenumber', phoneNumber);
formData.append('name', name);
formData.append('email', email);
fetch(url, {   method: 'POST',
    headers : new Headers(),
    body:formData})
    .then( (response) => { 
        if ((response.status === 200) || (response.status === 204)) {
          console.log("nice one")
          setSuccess(true)
          setStageThree(false)
        } else {
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

    <div className="pt-20 pb-20 text-center " >
       {/* DISPLAYS FIRST SECTION OF BOOKING FORM  */}
    <div className="card md:w-1/3 bg-gray-100 shadow-xl mx-auto" >
    <div className="card-body" style= {{ display: stageOne ? "block" : "none"  }}>
       <H4 className="card-title">Party Size</H4>
       <LeadText> Please select how many people will be attending: </LeadText>
       <div className="flex justify-center flex-col mx-auto">
          <div className="mb-3 xl:w-96 mx-auto">
             <select className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
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
             <button onClick={() => [setStageTwo(true), setStageOne(false)]} className="group relative w-1/3 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm 
             font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">Continue</button>
          </div>
       </div>
    </div>
 {/* DISPLAYS SECOND SECTION OF BOOKING FORM  */}
 <div className="card-body text-center " style= {{ display: stageTwo ? "block" : "none"  }} >
    <H4 className="card-title">Date</H4>
    <LeadText> Please select the date you woud like to attend: </LeadText>
    <Calendar 
    className="mx-auto"
    onChange={onChange}
    value={value}
    onClickDay={onDayPress} 
    minDate={new Date()}/> 
    <div className="flex justify-center">
       <div className="w-60 pt-4 ">
      <Buttons/>
      </div>
    </div>
    <div className="flex pt-5">
       <div className="card-actions justify-start mx-auto ">
          <button onClick={() => [setStageTwo(false), setStageOne(true)]} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
          font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Back</button>
       </div>
       <div className="card-actions justify-end content-end mx-auto ">
          <button disabled={date === null}  onClick={() => [setStageThree(true), setStageTwo(false)]} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
          font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">Continue</button>
       </div>
    </div>
 </div>
 {/* DISPLAYS THIRD SECTION OF BOOKING FORM  */}
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

 <div className="card-body mx-auto text-center" style= {{ display: success ? "block" : "none"  }}>

 <H4> SUCCESS! </H4>
 <LeadText> You have booked a slot at our restaurant for:  </LeadText>

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
    <LeadText> If you would like to cancel, please give us a message on our Instagram. </LeadText>

</div>
 </div>
 </div>

<Footer/>
 </>
  )
}

export default GuestBookingForm

 


  