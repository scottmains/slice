import React, { useState } from "react";
import { Navbar, ContactForm} from '../components'
import { Footer} from '../containers'
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';





const SliceCatering = () => {


  return (


<>
<Navbar/>
<section className="pb-20 bg-slate-200 pt-40 h-5/6">
            <div className="container max-w-7xl mx-auto px-4 ">
                <div className="flex flex-wrap items-center ">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                 
                        <H4 color="gray">WE CAN CATER FOR YOU!</H4>
                        <LeadText color="blueGray">
                        Let us bring our pizzeria to you!
                        </LeadText>
                        <LeadText color="blueGray">
                      
                        We can hand stretch & cook our Neapolitan Style Pizzas in front of guests at any event, wedding, birthday party or market. 
                        </LeadText>
                        <LeadText color="blueGray">
                        Please fill in the form to find out more!
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

export default SliceCatering