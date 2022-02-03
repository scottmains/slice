import React from 'react';
import { useState, useEffect } from 'react';
import { SliceHome,SliceMenu, SliceStory, NotFound} from './pages'
import './App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ScrollToTop} from './components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
  
} from "react-router-dom";

const App = () => {

  const  [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, []);

  return (

     
      

    <Router>
     <ScrollToTop/>
      <div>
        
      <Routes>
        <Route exact path='/' index element={<SliceHome/>}/>
        <Route path='/our-story' element={<SliceStory/>}/>
        <Route  path='/menu' element={<SliceMenu/>}/>
        <Route path='*' element={<p><NotFound/></p>}/>
     
      </Routes>
      </div>
     
     </Router>
     
    
  )
};

export default App;
