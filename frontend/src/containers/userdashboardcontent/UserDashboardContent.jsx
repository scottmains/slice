import React from "react";

import DeleteBookingModal from './modals/DeleteBookingModal';
import EmailModal from './modals/EmailModal'
import NameModal from './modals/NameModal'
import PhoneNumberModal from './modals/PhoneNumberModal'
import RewardModal from './modals/RewardModal'
import { useRef, useState, useEffect, useContext } from 'react';
import Paragraph from '@material-tailwind/react/Paragraph';
import axios from 'axios';
import { UserContext } from "../../App";

const UserDashboardContent = () => {

 
  const [bookingDetails, setBookingDetails] = useState('');
  const [userDetails, setUserDetails] = useState('');


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [loyaltyPoints, setLoyaltyPoints] = useState('');

const [partySize, setPartySize ]= useState(null);
const [date, setDate ]= useState(null);
const [timeSlot, setTimeSlot] = useState(null);

const [showModal, setShowModal] = React.useState(false);
const [showModalName, setShowModalName] = React.useState(false);
const [showModalNumber, setShowModalNumber] = React.useState(false);
const [showModalEmail, setShowModalEmail] = React.useState(false);
const [showModalRewards, setShowModalRewards] = React.useState(false);




let modalContent;

if (showModalName) {
  modalContent = (
   <NameModal setShowModalName={setShowModalName}  />
    )
}


if (showModal) {
  modalContent = (
  <DeleteBookingModal setShowModal={setShowModal} showModal={showModal} />
  )
}

if (showModalEmail) {
  modalContent = (
  <EmailModal setShowModalEmail={setShowModalEmail}/>
    )
}

if (showModalNumber) {
  modalContent = (
    <PhoneNumberModal setShowModalNumber={setShowModalNumber}  />
    )
}

if (showModalRewards) {
  modalContent = (
    <RewardModal setShowModalRewards={setShowModalRewards} />
    )
}


let bookingText;

if (partySize === null) {
  bookingText = (
    <div> <p> You don't have a booking at the moment </p></div>
  )
}

if (partySize) {
  bookingText = (
    <div className="text-center"> 
 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">You have a booking on {date} at {timeSlot} for {partySize}  </p>
 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-3/5 " onClick={() => setShowModal(true)}>Delete Booking</button>
  </div>
  )
}

const userId = React.useContext(UserContext);  

const [isBusy, setBusy] = useState(true)


   const getUser = async () => {
   
        const fd = new FormData();
        fd.append('userid', userId);
           const bookings = await axios.post('http://localhost/kv6003/backend/api/showuserbookings',
               fd);
           const userinfo = await axios.post('http://localhost/kv6003/backend/api/finduser',
               fd);
        setBookingDetails(JSON.stringify(bookings.data.results))
        setUserDetails(JSON.stringify(userinfo.data.results))
        if (userDetails) {
        setBusy(false)
        }
    }

useEffect(() => {
getUser(); 
}, [getUser]);

    useEffect(() => {
      if (isBusy === false) {
        if (bookingDetails) { 
      var outObjA = bookingDetails
      var outObjA = JSON.parse(outObjA);
      for (var i = 0; i < outObjA.length; i++) {
      var jsonData = outObjA[i];
      setDate(jsonData.bookingdate)
      setTimeSlot(jsonData.bookingstart)
      setPartySize(jsonData.partysize)
      }
      }
      }
    }, [getUser]);

    useEffect(() => {
      if (isBusy === false) {
      var outObjA = userDetails;
      var outObjA = JSON.parse(outObjA);
      for (var i = 0; i < outObjA.length; i++) {
      var jsonData = outObjA[i];
      setName(jsonData.name)
      setEmail(jsonData.email)
      setPhoneNumber(jsonData.phonenumber)
      setLoyaltyPoints(jsonData.loyaltyPoints)
      }
      }
    }, [getUser]);




        return (
          <>
          <div href="#" class="flex mx-auto flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl mt-20">
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Welcome, {name} </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Your current details are:</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{name} <button className="text-red-500" onClick={() => setShowModalName(true)}>Edit</button> </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{email} <button className="text-red-500" onClick={() => setShowModalEmail(true)}>Edit</button> </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{phoneNumber} <button className="text-red-500" onClick={() => setShowModalNumber(true)}>Edit</button></p>
          </div>
      </div>
      
      
       <div href="#" class="flex mx-auto flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl mt-4">
          <div class="flex flex-col justify-between p-4 leading-normal">
          {bookingText}
          
          </div>
          </div>
          {modalContent}
      
          <div href="#" class="flex mx-auto flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl mt-4 mb-10">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <Paragraph color="black"> You currently have {loyaltyPoints} loyalty points</Paragraph>
        <button
                            className="bg-green-500  text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none
                             focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModalRewards(true)}
                          >
                          See Rewards
                          </button>
       </div> 
       </div>


       </>
        );
      }
    


    export default UserDashboardContent;


