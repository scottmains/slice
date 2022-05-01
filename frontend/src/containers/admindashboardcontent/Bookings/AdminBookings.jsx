import Heading4 from '@material-tailwind/react/Heading4'
import React from 'react'
import {AdminSidebar} from '../../../components'
import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react';
import AdminBookingExcerpt from './AdminBookingExcerpt';
import { UserContext } from '../../../App';
import {  useNavigate } from 'react-router-dom';


var _ = require('lodash');
var moment = require('moment'); 


const AdminBookings = () => {

  const [allBookings, setAllBookings] = useState([]);
  const [search, setSearch] = useState([]);
  let navigate = useNavigate();

  const isAdmin = React.useContext(UserContext); 

  if (isAdmin === "0") {
    navigate("/", { replace: true });
  }


  const getBookings =  () => {
    axios.get('http://localhost/kv6003/backend/api/adminbookings')
    .then(resp => {
      setAllBookings(resp.data.results);
  });
  }

  useEffect(() => {
     const fetchData = async() => await getBookings();
     fetchData();
  
  }, []);


  const filterSearch = (s) => {
    
    let datevalue = moment(s.bookingDate).format("DD/MM/YYYY");
    return s.name.toLowerCase().includes(search)
   || datevalue.toLowerCase().includes(search)
   || s.bookingStart.toLowerCase().includes(search)
}

let filteredResults = allBookings;

if (allBookings) { 
if ((filteredResults.length > 0) && (search !== undefined)) {
  filteredResults = filteredResults.filter(filterSearch) 
}
}

let content;
 
if (filteredResults) {
content = filteredResults.map(booking => <AdminBookingExcerpt key={booking.bookingid} booking={booking} />)
}


  return (
 
    <div className="text-black"> 
    <AdminSidebar />
    <div className="min-h-screen">
    <div className="relative md:pt-16 md:pb-32 flex content-center items-center justify-center ">
    <div className="bg-landing-background bg-cover bg-center absolute  top-0 w-full h-3/6 md:h-4/5   " />
    <div className="container relative mx-auto ">
        <div className="pb-44 md:pb-10 ">
          <div className="mt-3 text-white text-center "> 
                <h3 className="md:text-6xl text-3xl tracking-widest">Bookings</h3> 
                <p className="pt-4"> Manage upcoming bookings.</p>
                </div>
                </div>    
    </div>
    </div>
    <div className="pt-2 mb-3 w-4/5 mx-auto ">
                <div className=" md:w-1/3  mx-auto"> 
                <input className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border 
                border-slate-300 outline-none focus:outline-none focus:ring w-full " type='text' placeholder='Search bookings' 
                value={search} onChange={(e)=> setSearch(e.target.value.toLowerCase())} />
              </div>   
            </div>
  
   {content}
  </div>

    </div>

  )
}

export default AdminBookings