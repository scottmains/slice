import React, { useState } from "react";
import { Navbar, ContactForm} from '../components'
import { Footer} from '../containers'
import { useEffect } from "react";
import Fade from 'react-reveal/Fade';
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';





const SliceContact = () => {


  return (


<>
<Navbar />
<section className="pb-20 bg-slate-200 pt-40 h-5/6">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap items-center ">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                 
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
                   
                    </div>
                    <div className="w-full md:w-5/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                    <ContactForm/>
                    </div>
                   
                </div>
            </div>
        </section>
        <Footer/>
    </>
  );
};

export default SliceContact