import React from 'react'
import Fade from 'react-reveal/Fade';


import H4 from '@material-tailwind/react/Heading4';

import LeadText from '@material-tailwind/react/LeadText';

const IntroContent = () => {
  return (

          <section className="pb-20 bg-slate-200 md:-mt-40 -mt-96 ">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap items-center mt-32">
                <div className="w-full lg:w-5/12 md:w-3/5 md:pb-10 px-4 mx-auto flex justify-center mt-24 md:mt-0">
                    <Fade duration={2500}>

                    <img className = "border-8 border-white  "src="https://lightroom.adobe.com/v2c/spaces/2bc123ae64f14c09b39fd69e7358f2b3/assets/776dd70cd3c14115b7660272d260070a/revisions/8e5811e5d3f44b9587567a137d748c92/renditions/13e723882d46b12c81570c67bba3a90c"></img>
                  </Fade>
                    </div>

                    <div className="w-full lg:w-5/12 px-4 mx-auto pt-10 md:pt-0">
                    <Fade bottom duration={2500}>
                        <H4 color="gray">TAKING TEESSIDE BY STORM.</H4>
                        <LeadText color="blueGray">
                        We're a new pizzeria which derived from a passion of home-made pizzamaking. 
                        </LeadText>
                        <LeadText color="blueGray">
                        During lockdown, we got our first pizza oven and since then we've been addicted to making the freshest
                        pizzas you'll ever taste & the only place you can try a Detroit Pizza in Teesside. 

                        </LeadText>
                        <LeadText color="blueGray">
                        We now operate as a Pizzeria in M’Boro Centre & Norton offering sit in & take away pizza with weekly specials. 
                        
                        </LeadText>

                      
                        <LeadText color="blueGray">

                        Want your party/event/wedding catered for? We do that too!
                        </LeadText>
                         </Fade>
                        
                        <Fade bottom duration={2500}> <div className="text-center pt-10">
                      <a href="/catering">  <button type="button" className="focus:outline-none w-1/3 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 
                      focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">  CATERING </button> </a> 
                       <a href="/menu">  <button type="button" className="text-white w-1/3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 
                      dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">  MENU </button> </a> 
                    
                   
                    </div>  </Fade>
                    </div>

                   
                </div>
            </div>
        </section>
 
  )
}

export default IntroContent