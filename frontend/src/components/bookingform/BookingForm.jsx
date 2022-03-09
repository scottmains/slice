import { Footer} from '../../containers'
import { Navbar} from '../../components'
import React, { useState } from 'react';
import { BookingForm, BookingConfirm } from '../../components';
import './bookingform.css'
import Calendar from 'react-calendar'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import sliceheaderimg from '../../assets/sliceheaderimg.svg'
import { GrGroup} from 'react-icons/gr'; 
import { AiOutlineCalendar } from 'react-icons/ai'; 
import { AiOutlineClockCircle } from 'react-icons/ai'; 


class SliceBooking extends React.Component {
constructor(props) {
  super(props);
  this.state={
  authenticated: false, 
  showResults: true,
  showConfirm: false,
  partysize: "",
  bookingdate: "",
  bgColor: "",
  bookingstart: "",
  bgColor: "#f87b05",
  fullname: "",
  phonenumber: "",
  showPartySize: true,
  showCalendar: false,
  showConfirmDetails: false,
  selected: false,
  date: new Date(),
  setValue: new Date(),
  timeshow: false,
  phonenumber:"",
  fullname: ""

  };

  this.onDayPress = this.onDayPress.bind(this);
  this.onPartySizeClick= this.onPartySizeClick.bind(this);
  this.onTimeClick = this.onTimeClick.bind(this);

}

componentDidMount() {
  if(localStorage.getItem('myReadingListToken')) {
      this.setState(
          {authenticated:true,
           token: localStorage.getItem('myReadingListToken')
          });
  }
}

onDayPress = (date) => {
  const datevalue = JSON.stringify(date.toDateString());
  datevalue.replace(/\"/g, "");
  JSON.parse(datevalue);
  this.setState({bookingdate: datevalue,
                  timeshow: true}); 
  
}

onChange = date => this.setState({ date })

onPartySizeClick  = (e) => {
  const value = e.target.getAttribute("value");
  this.setState({partysize: value,
              showPartySize: false,
              showCalendar: true})
};

onTimeClick  = (e) => {
  const value = e.target.getAttribute("timevalue");
  this.setState({bookingstart: value,
                  bgColor: "#6d44b8",
                  showConfirmDetails: true,
                  showCalendar: false})
};

handleGuestPhoneNumber = (e) => {
  this.setState({phonenumber:e.target.value})
}
handleGuestName= (e) => {
  this.setState({fullname:e.target.value})
}
submitBooking  = (e) => {  let url = "http://localhost/kv6003/backend/api/reservation"
let formData = new FormData();
formData.append('partysize', this.state.partysize);
formData.append('bookingstart', this.state.bookingstart);
formData.append('bookingdate', this.state.bookingdate);
formData.append('phonenumber', this.state.phonenumber);
formData.append('fullname', this.state.fullname);
fetch(url, {   method: 'POST',
    headers : new Headers(),
    body:formData})
    .then( (response) => { 
        if ((response.status === 200) || (response.status === 204)) {
            console.log("niceone")
        } else {
            throw Error(response.statusText);
        }
    })
    .catch ((err) => { 
        console.log("something went wrong ", err) 
    });
}

render() {

  console.log("party size is" + this.state.partysize)
  console.log("booking start is" + this.state.bookingstart)
  console.log("booking date is " + this.state.bookingdate)
  console.log("full name " + this.state.fullname)
  console.log("phone number" + this.state.phonenumber)
  console.log(this.state.authenticated)

    return  (
        <div className="slice__booking-content">
        <div className="slice__header-img">
           <img src={sliceheaderimg} alt="slice logo"/>
           </div>
        <div className="slice__booking-partysize" style={{ display: this.state.showPartySize ? "block" : "none" }}>
      <h2> What's your party size? </h2>
         <div className="slice__booking-partysize-row">
      <div value = "1" onClick={this.onPartySizeClick} className="slice__partysize-choice" > 1 </div>
      <div value = "2" onClick={this.onPartySizeClick} className="slice__partysize-choice" > 2 </div>
      <div value = "3" onClick={this.onPartySizeClick} className="slice__partysize-choice" > 3 </div>
      <div value = "4" onClick={this.onPartySizeClick} className="slice__partysize-choice" > 4 </div>
      <div value = "5" onClick={this.onPartySizeClick} className="slice__partysize-choice" > 5 </div>
      <div value = "6" onClick={this.onPartySizeClick} className="slice__partysize-choice" > 6 </div>
      <div value = "7" onClick={this.onPartySizeClick} className="slice__partysize-choice" > 7 </div>
      <div value = "8" onClick={this.onPartySizeClick} className="slice__partysize-choice" > 8 </div>
      </div>
        </div>
        
        <div className="slice__booking-calendar" style={{ display: this.state.showCalendar ? "block" : "none" }}> 
      <h2> What date? </h2>
      <Calendar 
              onChange={this.onChange}
              value={this.state.date}
               onClickDay={this.onDayPress} 
               minDate={new Date()}
      />

      <div className="slice__booking-times" style={{ display: this.state.timeshow ? "block" : "none" } }>
      <h2> Available times: </h2>
      <div  className="slice__booking-timeslot-row">
      <div timevalue="17:00" onClick={this.onTimeClick} className="slice__booking-timeslot"> 17:00 </div>
      <div timevalue="17:30" onClick={this.onTimeClick} className="slice__booking-timeslot"> 17:30 </div>
      <div timevalue="18:00" onClick={this.onTimeClick} className="slice__booking-timeslot"> 18:00 </div>
      <div timevalue="18:30" onClick={this.onTimeClick} className="slice__booking-timeslot"> 18:30 </div>
      </div>
      <div className="slice__booking-timeslot-row">
      <div timevalue="19:00" onClick={this.onTimeClick} className="slice__booking-timeslot"> 19:00 </div>
      <div timevalue="19:30" onClick={this.onTimeClick} className="slice__booking-timeslot"> 19:30 </div>
      <div timevalue="20:00" onClick={this.onTimeClick} className="slice__booking-timeslot"> 20:00 </div>
      <div timevalue="20:30" onClick={this.onTimeClick} className="slice__booking-timeslot"> 20:30 </div>
      </div>
      <div className="slice__booking-timeslot-row">
      <div timevalue="21:00" onClick={this.onTimeClick} className="slice__booking-timeslot"> 21:00 </div>
      <div timevalue="21:30" onClick={this.onTimeClick} className="slice__booking-timeslot"> 21:30 </div>
      </div>
      </div>

      
      </div>
      
        <div className="slice__bookingform-confirm" style={{ display: this.state.showConfirmDetails ? "block" : "none" }}>
          <h2> Current Booking details: </h2>
          <div className="slice__bookingdetails">
            <div className="slice__bookingdetails-item">
            <p> <GrGroup/> {this.state.partysize}</p>
            </div>
            <div className="slice__bookingdetails-item">
            <p> <AiOutlineCalendar/> {this.state.bookingdate}</p>
            </div>
            <div className="slice__bookingdetails-item">
            <p> <AiOutlineClockCircle/> {this.state.bookingstart}</p>
            </div>
            
            </div>

            <div className="slice__bookingconfirm-form">
        <input
       className=""
         type='text' 
         placeholder='Full Name'
         value={this.state.fullname}
         onChange={this.handleGuestName}
        
       />
       <input
       className=""
         type='text' 
         placeholder='Phone Number'
         value={this.state.phonenumber}
         onChange={this.handleGuestPhoneNumber}
       />
</div>

          <button className="slice__booking-button" onClick={this.submitBooking}> 
          Confirm
          </button>
        
          </div>
        </div>
      
   
    )
    
    }
  }
  
  export default SliceBooking;
  