import React from 'react';
import { SliceHome,SliceMenu, SliceStory, NotFound} from './pages'
import './App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
  
} from "react-router-dom";



const App = () => {

  return (
    <Router>
      <div>
      <Routes>
        <Route  path='/' index element={<SliceHome/>}/>
        <Route path='our-story' element={<SliceStory/>}/>
        <Route  path='menu' element={<SliceMenu/>}/>
        <Route path='*' element={<p><NotFound/></p>}/>
      </Routes>
      </div>
     </Router>
   
  )
};

export default App;
