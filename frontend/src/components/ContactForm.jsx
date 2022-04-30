import React from 'react'
import { useState } from "react";
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/75934650-b049-11ec-9a11-4b415470ed97"; 

const ContactForm = () => {


const [submitted, setSubmitted] = useState(false);
const handleSubmit = () => {

  setTimeout(() => {
    setSubmitted(true);
  }, 100);
};
if (submitted) {
  return (
    <>
    <div className="w-64 mx-auto text-center"> 
                        <H4 color="gray">Thanks!</H4>
                        <LeadText color="blueGray">
                        We will be in touch as soon as we can!
                        </LeadText> </div>
    </>
  );
}
  return (
    <form
    action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST"
    target="_blank"
  >
      <div className="w-80 mx-auto"> 
    <div className="mb-3 pt-0">
      <input
        type="text"
        placeholder="Your name"
        name="name"
        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        required
      />
    </div>
    <div className="mb-3 pt-0">
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        required
      />
    </div>
    <div className="mb-3 pt-0">
      <textarea
        placeholder="Your message"
        name="message"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div className="mb-3 pt-0">
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="submit"
      >
        Send a message
      </button>
    </div>
    </div>
  </form>
  )
}

export default ContactForm