import React, {Fragment, useState, useEffect} from 'react'
import {AdminSidebar} from '../../../components'

import {  useNavigate } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import OccupancyModal from './OccupancyModal';
import OpeningTimeModal from './OpeningTimeModal';
import ClosingTimeModal from './ClosingTimeModal';
import axios from 'axios';
import { AdminContext, TokenContext } from "../../../App";

const AdminCustomers = () => {


  const isAdmin = React.useContext(AdminContext); 
  let navigate = useNavigate();
  const [openingTime, setOpeningTime] = useState("")
const [closingTime, setClosingTime] = useState("")
const [maxOccupancy, setMaxOccupancy] = useState("")
const [currentTimeInterval, setCurrentTimeInterval] = useState("")
const [showModalOccupancyUpdate, setShowModalOccupancyUpdate] = React.useState(false);
const [showModalOpeningTimeUpdate, setShowModalOpeningTimeUpdate] = React.useState(false);
const [showModalClosingTimeUpdate, setShowModalClosingTimeUpdate] = React.useState(false);


  if (isAdmin === "0") {
    navigate("/", { replace: true });
  }

  const timeIntervals = [
    { id: 1, name: '15 minutes', value:'00:15:00.000', unavailable: false },
    { id: 2,  name: '30 minutes', value:'00:30:00.000',  unavailable: false },
    { id: 3,  name: '45 minutes', value:'00:45:00.000',  unavailable: false },
    { id: 4,  name: '1 hour', value:'01:00:00.000',  unavailable: true },
  ]

    const [selectedInterval, setSelectedInterval] = useState(timeIntervals[0])

    const checkRestaurant =  () => {
      axios.get('http://localhost/kv6003/backend/api/checkrestaurant')
      .then(resp => {
        setOpeningTime(resp.data.results[0].hours_open)
        setClosingTime(resp.data.results[0].hours_closed)
        setMaxOccupancy(resp.data.results[0].max_occupancy)
        setCurrentTimeInterval(resp.data.results[0].timeInterval)
    });
    }
   
    useEffect(() => {

      const fetchData = async() => await checkRestaurant();
      fetchData();
   
   }, []);

   const jwtToken = React.useContext(TokenContext); 

   console.log(jwtToken)

   let modalContent;

    if (showModalOccupancyUpdate) {
        modalContent = (
          <OccupancyModal setShowModalOccupancyUpdate={setShowModalOccupancyUpdate} />
          )
      }

      if (showModalOpeningTimeUpdate) {
        modalContent = (
          <OpeningTimeModal setShowModalOpeningTimeUpdate={setShowModalOpeningTimeUpdate} />
          )
      }
    if (showModalClosingTimeUpdate) {
        modalContent = (
          <ClosingTimeModal setShowModalClosingTimeUpdate={setShowModalClosingTimeUpdate} />
          )
    }


    const changeInterval= async (e) => {

      const fd = new FormData();
      fd.append('timeInterval', selectedInterval.value);
      fd.append('token', jwtToken);
      const response = await axios.post('http://localhost/kv6003/backend/api/adminsettings', fd)
      .then((res)=> {
        window.location.reload(false);
      });
  }


  
  return (
    <div className="min-h-screen text-black pb-10"> 
    <AdminSidebar />
    <div className="relative md:pt-16 md:pb-32 flex content-center items-center justify-center ">
    <div className="bg-landing-background bg-cover bg-center absolute  top-0 w-full h-3/6 md:h-4/5   " />
    <div className="container relative mx-auto ">
        <div className="pb-44 md:pb-10 ">
          <div className="mt-3 text-white text-center "> 
                <h3 className="md:text-6xl text-3xl tracking-widest">Settings</h3> 
                <p className="pt-4"> </p>
                </div>
                </div>          
    </div>
    </div>
    <div className="md:flex place-content-center"> 
    <div href="#" class="block p-6  md:mr-5 max-w-md bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Booking Interval </h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Determines how many booking slots you have show up. If you have your booking interval at 60 minutes then there will be a slot for 12:00 and 13:00. Normally venues use 15 minutes</p>
<div className="pt-5"> 
<p> Current Time Interval: {currentTimeInterval} </p>
</div>
<div className="pt-5">
<Listbox  value={selectedInterval.value} onChange={setSelectedInterval}>
        <div className="relative mt-1">
          <Listbox.Button className="focus:outline-none relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedInterval.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
              {timeIntervals.map((interval, intervalIdx) => (
                <Listbox.Option
                  key={intervalIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={interval}
                >
                  {({ selectedInterval }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selectedInterval ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {interval.name}
                      </span>
                      {selectedInterval ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-3/5 mt-4" onClick={changeInterval}  >Change Interval</button>
</div >
<div href="#" class="block  p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Set Max Occupancy</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Set the total amount of people that you can occupy in your restaurant at any given time slot.</p>
<div className="pt-5 flex">
<div> 
  <p>  Current Max: {maxOccupancy} </p>
  </div>
  <div className="pl-4 text-md"> 
            <button className="text-red-500 " onClick={() => setShowModalOccupancyUpdate(true)}>Update</button>
            </div>
   </div>
</div>
</div>

<div href="#" className="block mx-auto p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md mt-4 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Set Opening & Closing Hours</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Set your standard opening and closing times. The closing time will be the final time people will be allowed to book.</p>
<div className="pt-5 flex">
<div> 
  <p>  Opening Hour: {openingTime} </p>
  </div>
  <div className="pl-4 text-md"> 
            <button className="text-red-500 " onClick={() => setShowModalOpeningTimeUpdate(true)}>Update</button>
            </div>
   </div>
   <div className="pt-5 flex">
<div> 
  <p>  Closing Hour: {closingTime} </p>
  </div>
  <div className="pl-4 text-md"> 
            <button className="text-red-500 " onClick={() => setShowModalClosingTimeUpdate(true)}>Update</button>
            </div>
   </div>
 
 
</div>
{modalContent}
    </div>
   

  )
}

export default AdminCustomers