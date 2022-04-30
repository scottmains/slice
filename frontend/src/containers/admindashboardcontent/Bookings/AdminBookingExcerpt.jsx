
import axios from 'axios';
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'; 
import { GrGroup} from 'react-icons/gr'; 
import {BiPhone} from 'react-icons/bi'

const BookingExcerpt = ({ booking }) => {

    var moment = require('moment'); 


    const removeBooking = async () => {
        const fd = new FormData();
            fd.append('bookingid', booking.bookingid);
               const response = await axios.post('http://localhost/kv6003/backend/api/adminbookings',
                   fd);
        
      }
      


    let datevalue = moment(booking.bookingDate).format("DD/MM/YYYY");
    return (
        <article className="mx-auto p-6 sm:w-1/3 text-black bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800  mt-10">
          <div className="flex items-center" >
              <div className="grow"> 
              <h3 className="font-mono  text-3xl">Booking on {datevalue} </h3>
              </div> 
              <div className="flex items-center"> 
              <div className="items-center pr-2"> 
              <AiOutlineClockCircle /> 
              </div>
                  <div> 
           <p className="text-xl"> {booking.bookingStart} </p> 
           </div>
               </div>
              </div>  
              <p className="font-mono text-xl pt-5">{booking.name} </p>
                <div className="pt-6 flex items-center text-xl">
                    <div className="pr-3" > 
                        <GrGroup/> 
                    </div> 
                    <div>
               <p className=""> {booking.partysize} </p>
               </div>
               </div>
            <div className="flex items-center pt-4 text-xl">
                <div className="pr-3 text-2xl"> <AiOutlinePhone/> </div>
                <div>
            <p className="postCredit">
              {booking.phonenumber} 
            </p>  
            </div>
            </div>

            <div className="flex items-center pt-4 text-xl">
                <div className="pr-3 text-2xl"> <AiOutlineMail/> </div>
                <div>
            <p className="postCredit">
              {booking.email} 
            </p>  
            </div>
            </div>

          
            <div className="pt-4 pb-4"> 
            <button className="float-right text-red-600" onClick={removeBooking}> DELETE BOOKING </button>
            </div>
        </article>
    )
}
export default BookingExcerpt