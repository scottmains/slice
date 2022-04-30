import React from 'react';
import LocationModal from '../../components/LocationModal'
import Fade from 'react-reveal/Fade';

import LeadText from '@material-tailwind/react/LeadText';


const HomeContent = () => {
  return  (

    <div className="relative md:pt-16 md:pb-32 flex content-center items-center justify-center min-h-screen">
    <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-4/6 md:h-4/5 " />
    <div className="container max-w-8xl relative mx-auto">
        <div className="flex flex-wrap pb-64 md:pb-10 ">
            <div className="w-full lg:w-6/12 px-4 text-left md:ml-64">
            <Fade left duration={2500}>
                <h1 className="text-6xl tracking-widest text-white">SLICE•BORO</h1>  </Fade>
                <div className="text-gray-200 md:w-80">
                <Fade left duration={2500}> 
                    <LeadText color="gray-200">
                    Detroit & Neapolitan Style Pizzas in Teesside
                    </LeadText> </Fade>
                    <div className="md:p-2">
                    <LocationModal/>
                    </div><Fade bottom duration={2500}> 
                    <div className="md:p-2">
                    <a href="/book">  <button type="button" className="text-white w-2/3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 
                      dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">  BOOK A TABLE </button> </a> 
                    </div> </Fade>
                </div>
               
            </div>
        </div>
    </div>
</div>
  )
  
}

export default HomeContent;
