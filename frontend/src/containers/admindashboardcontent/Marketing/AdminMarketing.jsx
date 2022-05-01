import React from 'react'
import {AdminSidebar} from '../../../components'
import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react';
import { AdminContext } from '../../../App';
import {  useNavigate } from 'react-router-dom';
import MarketingExcerpt from './MarketingExcerpt';
import emailjs from 'emailjs-com';

const AdminMarketing= () => {


  const [allCustomers, setAllCustomers] = useState([]);
  const [array, setArray] = useState([])

  const isAdmin = React.useContext(AdminContext); 
  const form = useRef();
  let navigate = useNavigate();


  if (isAdmin === "0") {
    navigate("/", { replace: true });
  }


  const getCustomers =  () => {
    axios.get('http://localhost/kv6003/backend/api/admincustomers')
    .then(resp => {
  
      setAllCustomers(resp.data.results);
    
  });
  }

    
  useEffect(() => {
    const fetchData = async() => await getCustomers();
    fetchData();
    console.log(allCustomers)
 }, []);

 
 function sendEmail(e) {
  e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

  emailjs.sendForm('service_ytmor6y', 'template_4yfqmkb', form.current, 'n0hNc6QVCiskcoJ3Q')
    .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
        console.log(error.text);
    });
}


 
 let content;
 
 content = allCustomers.map(customer => <MarketingExcerpt array={array} setArray={setArray} key={customer.userid} customer={customer} />)


  return (
    <div className= "min-h-screen text-black"> 
    <AdminSidebar />
    <div className="relative md:pt-16 md:pb-32 flex content-center items-center justify-center ">
    <div className="bg-landing-background bg-cover bg-center absolute  top-0 w-full h-3/6 md:h-4/5   " />
    <div className="container relative mx-auto ">
        <div className="pb-44 md:pb-10 ">
          <div className="mt-3 text-white text-center "> 
                <h3 className="md:text-6xl text-3xl tracking-widest">Marketing</h3> 
                <p className="pt-4"> Send targeted emails to your customers and get more bookings!</p>
                </div>
                </div>   
<div> 
              
    </div>
    </div>
    </div>
    <div className="pt-2 mb-3 w-4/5 mx-auto ">
                <div className=" md:w-1/3  mx-auto"> 
                <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <textarea className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={array} name="user_email" />
      <label>Message</label>
      <textarea className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"name="message" />
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
       font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
       dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Send" > Submit </button>
    </form>
              </div>   
            </div>
    {content}

    </div>

  )
}

export default AdminMarketing