import React from "react";
import { useEffect, useState } from 'react';

import jwt_decode from "jwt-decode";
import AdminBookings from "../containers/admindashboardcontent/Bookings/AdminBookings";
import {  useNavigate } from 'react-router-dom';
import { AdminContext } from "../App";
/**
 * Parent component that takes the children
 * and presents its data for the Reading list page
 * 
 *  Used to gauge whether the user is authenticated and
 * attaches the Readinglisttoken to their local storage
 * so that they can access the reading list page.
 * 
 * @author Scott Mains
 */




const SliceAdminDashboard = () => {

  let navigate = useNavigate();


 const isAdmin = React.useContext(AdminContext);  
 console.log(isAdmin)

if (isAdmin === "0") {
  navigate("/", { replace: true });
}

  return (
    <>
      <AdminBookings/>
   </>
  )
}

export default SliceAdminDashboard