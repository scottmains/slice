
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

import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import H4 from '@material-tailwind/react/Heading4';
import H3 from '@material-tailwind/react/Heading3';
import H5 from '@material-tailwind/react/Heading3';

import LeadText from '@material-tailwind/react/LeadText';
import { Navbar} from '../components'
import { Footer, UserDashboardContent} from '../containers'


const SliceUserDashboard = () => {

  

  return (
      <>
 <Navbar/>
 <UserDashboardContent/>
<Footer/>
    </>
  )
}

export default SliceUserDashboard