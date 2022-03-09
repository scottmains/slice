import React from 'react';
import { useState, useEffect } from 'react';
import { SliceHome,SliceMenu, SliceStory, NotFound, SliceBooking, SliceUserDashboard, SliceSignUp, SliceBookingConfirm} from './pages'
import './App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ScrollToTop} from './components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
  
} from "react-router-dom";


const App = () => {

 

  return (


    <Router>
     <ScrollToTop/>
      <div>
        
      <Routes>
        <Route exact path='/' index element={<SliceHome/>}/>
        <Route path='/our-story' element={<SliceStory/>}/>
        <Route  path='/menu' element={<SliceMenu/>}/>
        <Route  path='/book' element={<SliceBooking/>}/>
        <Route  path='/user-dashboard' element={<SliceUserDashboard/>}/>
        <Route  path='/sign-up' element={<SliceSignUp/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      </div>
     
     </Router>
     
    
  )
};

export default App;
