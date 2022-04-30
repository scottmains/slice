import React from 'react';
import Fade from 'react-reveal/Fade';
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';
import SliceVenue from '../../assets/venue-image1.jpg'



const ContactContent = () => {

  return  (
    
    <section className="pb-20 bg-slate-200 -mt-20 md:-mt-0">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                    <Fade bottom duration={2500}>
                        <H4 color="gray">WE'RE FOR HIRE! </H4>
                        <LeadText color="blueGray">
                        Want to rent out our restaurant for a special occassion?
                        </LeadText>
                        <LeadText color="blueGray">
                        Have a pizza party at our place and we can provide you with a night you won't forget!
                        </LeadText>
                        <LeadText color="blueGray">
                        Use our enquiry form with details below and we will get back to you as soon as we can!
                        </LeadText>
                        
                         </Fade>
                        
                        <Fade bottom duration={2500}> <div className="flex flew-row">
                      <a href="/contact-us">  <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 
                      dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">  CONTACT US</button> </a> 
                    
                   
                    </div>  </Fade>
                    </div>
                    <div className="w-full md:w-5/12 px-4 mx-auto flex justify-center md:mt-24 mt-10 lg:mt-0">
                    <Fade duration={2500}>

                    <img className = "border-8 border-white  "src={SliceVenue}></img>
                  </Fade>
                    </div>
                   
                </div>
            </div>
        </section>
  
  )
  
 
}

export default ContactContent;
