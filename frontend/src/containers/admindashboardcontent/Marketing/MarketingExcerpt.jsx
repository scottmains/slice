import React from "react";
import {AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'; 
import {RiMoneyCnyCircleLine} from 'react-icons/ri'
import {FaRegCommentAlt} from 'react-icons/fa'

const CustomerExcerpt = ({customer, setArray, array}) => {
 
    const [checked, setChecked] = React.useState(true);

    const email = customer.email

    const handleEmails =  () => {
        setChecked(!checked) 
        if (checked ) { 
        setArray((oldArray) => oldArray.concat(email))
        }
      
        if(!checked) {
            setArray("")
        }
      
      }

    return (
        <article className="mx-auto p-6 sm:w-1/3 text-black bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800  mt-10 mb-10">
            <h3 className="font-mono  text-3xl"> {customer.name} </h3>
           
            <div className="flex items-center text-xl pt-5">
                <div className="pr-3 text-2xl"> <AiOutlineMail/> </div>
                <div>
            <p id="customeremail" className="postCredit">
            {customer.email} 
            </p>  
           
            </div>
            <div className ="pl-4 items-center"> 
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm 
            bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 
            align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked"
             onChange={handleEmails}></input>
             </div>
            </div>

      
        </article>
    )
}
export default CustomerExcerpt