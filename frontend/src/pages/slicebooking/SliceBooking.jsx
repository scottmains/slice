import { Footer} from '../../containers'
import { Navbar} from '../../components'
import React, { useState } from 'react';
import { BookingForm, BookingConfirm } from '../../components';
import './SliceBooking.css'
import Calendar from 'react-calendar'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import sliceheaderimg from '../../assets/sliceheaderimg.svg'


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
  JSON.parse(datevalue);
  this.setState({bookingdate: datevalue,
                  timeshow: true}); 
  
}

onChange = date => this.setState({ date })

handleBookingClick = (e) => {
 
  this.setState({
    showResults: false,
    showConfirm: true })
};
handleBookingBack = (e) => {
  this.setState({
    showPartySize: true,
    showCalendar: false})
}

handleBookingBack2 = (e) => {
  this.setState({
    showConfirmDetails: false,
    showCalendar: true})
}

onPartySizeClick  = (e) => {
  const value = e.target.getAttribute("value");
  this.setState({partysize: value})
};
handlePartySizeClick  = (e) => {
  this.setState({
    showPartySize: false,
    showCalendar: true})
}
onTimeClick  = (e) => {
  const value = e.target.getAttribute("timevalue");
  this.setState({bookingstart: value,
                  bgColor: "#6d44b8"})
};
handleTimeClick = (e) => {
  
  this.setState({
    showConfirmDetails: true,
    showCalendar: false})
}
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
      <div className="home">
        <div className="gradient__bg"> 
        <div className="slice__booking">
        <Navbar />
        <BookingForm />
        <Footer/>
    </div>
    </div>
    </div>
    )
    
    }
  }
  
  export default SliceBooking;
  