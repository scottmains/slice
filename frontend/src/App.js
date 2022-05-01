import React from 'react';
import "@material-tailwind/react/tailwind.css";
import { useState, useEffect } from 'react';
import { SliceHome,SliceMenu,NotFound, SliceBooking, SliceUserDashboard, SliceSignUp, SliceContact, SliceCatering} from './pages'
import './App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ScrollToTop} from './components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp';
import SliceAdminDashboard from './pages/SliceAdminDashboard';
import AdminCustomers from './containers/admindashboardcontent/Customers/AdminCustomers';
import AdminMarketing from './containers/admindashboardcontent/Marketing/AdminMarketing';
import AdminSettings from './containers/admindashboardcontent/Settings/AdminSettings';
import GuestBookingForm from './components/bookingforms/GuestBookingForm';
import UserBookingForm from './components/bookingforms/UserBookingForm';
import jwt_decode from "jwt-decode";
import useAuth from './context/useAuth'



export const UserContext = React.createContext();
export const AdminContext = React.createContext();

const App = () => {

 const [userId, setUserId] = useState("");
 const [isAdmin, setAdmin] = useState("0");
 const [jwtToken, setJwtToken] = useState("0");


  useEffect(() => {

    const token = localStorage.getItem("sliceLogin");
    setJwtToken(token)
    if (token) {
    const tokenExp = jwt_decode(token);
      setAdmin(tokenExp.isAdmin)
      setUserId(tokenExp.userid);  
    } 
  }, [])



  return (

    <Router>
     <ScrollToTop/>
      <>
      <UserContext.Provider value = {userId}>
      <Routes>
        <Route exact path='/' index element={<SliceHome/>}/>
        <Route  path='/menu' element={<SliceMenu/>}/>
        <Route  path='/book' element={<SliceBooking/>}/>
        <Route  path='/guest-book' element={<GuestBookingForm/>}/>
        <Route  path='/user-book' element={<UserBookingForm/>}/>
        <Route  path='/user-dashboard' element={<SliceUserDashboard/>}/>
        <Route  path='/contact-us' element={<SliceContact/>}/>
        <Route  path='/catering' element={<SliceCatering/>}/>
        </Routes>
      </UserContext.Provider>
      <AdminContext.Provider value ={jwtToken}> 
        <UserContext.Provider value = {isAdmin}  > 
        <Routes>
        <Route  path='/admin' element={<SliceAdminDashboard/>}/>
        <Route path='/admin-customers' element={<AdminCustomers />} />
        <Route path='/admin-marketing' element={<AdminMarketing/>} />
        <Route path='/admin-settings' element={<AdminSettings/>} />
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        </UserContext.Provider>
        </AdminContext.Provider>
      </>

     </Router>
   
    
  )
};

export default App;
