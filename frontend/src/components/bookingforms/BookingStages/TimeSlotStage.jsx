
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TimeSlotStage = (stageTwo, setStageOne, setStageTwo, setStageThree,setTimeSlot,
                        onChange, onDayPress, date, value) => {

    const [selected, setSelected] = React.useState([]);
    var moment = require('moment'); 

    const [openingTime, setOpeningTime] = useState("")
const [closingTime, setClosingTime] = useState("")
const [maxOccupancy, setMaxOccupancy] = useState("")
const [timeInterval, setTimeInterval] = useState("")
const [restaurantInfo, setRestaurantInfo] = useState("");


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
 
    let time1 = addTimes(openingTime, timeInterval)
    let time2 = addTimes(time1, timeInterval)
    let time3 = addTimes(time2, timeInterval)
    let time4 = addTimes(time3, timeInterval)
    let time5= addTimes(time4, timeInterval)
    let time6 = addTimes(time5, timeInterval)
    let time7 = addTimes(time6, timeInterval)
    let time8 = addTimes(time7, timeInterval)
    let time9 = addTimes(time8, timeInterval)

    function timeToMins(time) {
      var b = time.split(':');
      return b[0]*60 + +b[1];
    }
    
    // Convert minutes to a time in format hh:mm
    // Returned value is in range 00  to 24 hrs
    function timeFromMins(mins) {
      function z(n){return (n<10? '0':'') + n;}
      var h = (mins/60 |0) % 24;
      var m = mins % 60;
      return z(h) + ':' + z(m);
    }
    
    // Add two times in hh:mm format
    function addTimes(t0, t1) {
      return timeFromMins(timeToMins(t0) + timeToMins(t1));
    }
    

    const Buttons =  (setTimeSlot) => {  
        const allTimes = [openingTime,time1,time2,time3,time4,time5,time6,time7,time8,time9]
        
     return ( 
        allTimes.map(item => (
          <span className=""> 
           <button
               key={item}
               onClick={(e) => {setSelected(item); setTimeSlot(item); }}
               className= {item === selected ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-full" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" }
               value={item}
           >
               {item}
           </button>
           </span>
       ))
     )
     }
  
    return (
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
       <div className="w-60">
      <Buttons/>
      </div>
    </div>
    <div className="flex">
       <div className="card-actions justify-start mx-auto ">
          <button onClick={() => [setStageTwo(false), setStageOne(true)]} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
          font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Back</button>
       </div>
       <div className="card-actions justify-end content-end mx-auto ">
          <button disabled={date === null} onClick={() => [setStageThree(true), setStageTwo(false)]} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
          font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">Continue</button>
       </div>
    </div>
 </div>

    )

}

export default TimeSlotStage