import React from 'react';
import './bookingcontent.css'
import Fade from 'react-reveal/Fade';
import { BookingForm } from '../../components';

const BookingContent = () => {
  return  (
    
    
  <div className="slice__booking-content section__padding">
      <h1> What's your party size? </h1>
      <BookingForm/>
    </div>
  )
}

export default BookingContent;
