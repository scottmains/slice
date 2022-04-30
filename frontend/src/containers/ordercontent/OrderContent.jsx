import React from 'react';
import './ordercontent.css'
import Fade from 'react-reveal/Fade';
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';




const OrderContent = () => {
  
  return  (
    
    <section className=" bg-gray-700 md:p-20 pt-10 pb-10">
    <div className="container max-w-7xl mx-auto ">
        <div className="flex flex-wrap items-center">
            <div className="w-full text-center md:w-5/12 mx-auto">
              <div className="w-64 mx-auto text-center"> 
            <Fade bottom duration={2500}>
                <H4 color="white">WANT A SLICE?</H4>
                <LeadText color="white">
                We're now available on both Uber Eats and Snapps!
                </LeadText>
                 </Fade>
                 </div>
                <Fade bottom duration={2500}> <div className="text-center pt-10 ">
              <a href="http://slice-boro.snapps.co.uk">  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 
              focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
              dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"> COLLECT </button> </a> 
            <a href="https://www.ubereats.com/gb/store/slice-boro/7uGrAMUDWNqrF_2t-x90yw?utm_source=google&utm_medium=organic&utm_campaign=place-action-link">
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 
            focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 
            dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"> DELIVERY </button> </a>
            </div>  </Fade>
            </div>

           
        </div>
    </div>
</section>
  )
}

export default OrderContent;
