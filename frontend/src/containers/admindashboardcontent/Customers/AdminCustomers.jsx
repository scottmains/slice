import React from 'react'
import {AdminSidebar} from '../../../components'
import { useState, useEffect} from 'react';
import axios from 'axios';
import CustomerExcerpt from './AdminCustomersExcerpt';
import { UserContext } from '../../../App';
import {  useNavigate } from 'react-router-dom';


var moment = require('moment'); 

const AdminCustomers = (userId) => {

  const [allCustomers, setAllCustomers] = useState([]);
  const [search, setSearch] = useState([]);
  let navigate = useNavigate();


  const isAdmin = React.useContext(UserContext); 

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
  }, []);
  
  const filterSearch = (s) => {
    
    let datevalue = moment(s.bookingDate).format("DD/MM/YYYY");
    return s.name.toLowerCase().includes(search)
   || s.email.toLowerCase().includes(search)
}



let filteredResults = allCustomers;

if ((filteredResults.length > 0) && (search !== undefined)) {
  filteredResults = filteredResults.filter(filterSearch) 
}



  let content;
 
  content = filteredResults.map(customer => <CustomerExcerpt userId={userId.userId} key={customer.userid} customer={customer} />)


  return (
    <div className="text-black"> 
    <AdminSidebar />
    <div className="min-h-screen">
    <div className="relative md:pt-16 md:pb-32 flex content-center items-center justify-center ">
    <div className="bg-landing-background bg-cover bg-center absolute  top-0 w-full h-3/6 md:h-4/5   " />
    <div className="container relative mx-auto ">
        <div className="pb-44 md:pb-10 ">
          <div className="mt-3 text-white text-center "> 
                <h3 className="md:text-6xl text-3xl tracking-widest">Customers</h3> 
                <p className="pt-4"> Manage all customers that have signed up.</p>
                </div>
                </div>    
    </div>
    </div>
    <div className="md:pt-2 mb-3 w-4/5 mx-auto ">
                <div className=" md:w-1/3  mx-auto"> 
                <input className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border 
                border-slate-300 outline-none focus:outline-none focus:ring w-full " type='text' placeholder='Search bookings' 
                value={search} onChange={(e)=> setSearch(e.target.value.toLowerCase())} />
              </div>   
            </div>
  
   {content}
  </div>

    </div>

  )
}

export default AdminCustomers