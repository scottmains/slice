import React from "react";
import {AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'; 
import {RiMoneyCnyCircleLine} from 'react-icons/ri'
import UpdateLoyaltyModal from './UpdateLoyaltyModal'
import UpdateCommentModal from './UpdateCommentModal'
import useAuthContext from "../../../context/useAuth";
import react, { useContext } from 'react';
import {FaRegCommentAlt} from 'react-icons/fa'

const CustomerExcerpt = ({customer, userId }) => {


    const [showModalLoyaltyUpdate, setShowModalLoyaltyUpdate] = React.useState(false);
    const [showModalCommentUpdate, setShowModalCommentUpdate] = React.useState(false);

    let modalContent;

    if (showModalLoyaltyUpdate) {
        modalContent = (
          <UpdateLoyaltyModal setShowModalLoyaltyUpdate={setShowModalLoyaltyUpdate} userId={customer.userid}/>
          )
      }

      if (showModalCommentUpdate) {
        modalContent = (
          <UpdateCommentModal setShowModalCommentUpdate={setShowModalCommentUpdate} userId={customer.userid}/>
          )
      }

      let comment = (customer.comment)

      if (comment === "") {
          comment = <p>No comment</p>
      }
      
console.log(customer.comment)

    return (
        <article className="mx-auto p-6 sm:w-1/3 text-black bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800  mt-10 mb-10">
            <h3 className="font-mono  text-3xl"> {customer.name} </h3>
           
            <div className="flex items-center text-xl pt-5">
                <div className="pr-3 text-2xl"> <AiOutlineMail/> </div>
                <div>
            <p className="postCredit">
            {customer.email}
            </p>  
            </div>
            </div>

            <div className="flex items-center pt-4 text-xl">
                <div className="pr-3 text-2xl"> <AiOutlinePhone/> </div>
                <div>
            <p className="postCredit">
            {customer.phonenumber}
            </p>  
            </div>
            </div>

            <div className="flex items-center pt-4 text-xl">
                <div className="pr-3 text-2xl"> <RiMoneyCnyCircleLine/> </div>
                <div className="flex">
                    <div> 
            <p className="postCredit">
            {customer.loyaltyPoints}
            </p> 
            </div>
            <div className="pl-4 text-md"> 
            <button className="text-red-500 " onClick={() => setShowModalLoyaltyUpdate(true)}>Update</button>
            </div>
            </div>
            </div>
            <div className="flex items-center pt-4 text-xl">
                <div className="pr-3 text-2xl"> <FaRegCommentAlt/> </div>
                <div className="flex">
                    <div> 
            <p className="postCredit">
            {comment}
            </p> 
            </div>
            <div className="pl-4 text-md"> 
            <button className="text-red-500 " onClick={() => setShowModalCommentUpdate(true)}>Update</button>
            </div>
            </div>
            </div>
          
        {modalContent}
        </article>
    )
}
export default CustomerExcerpt