import React from "react";
import Fade from 'react-reveal/Fade';


export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    <Fade bottom duration={2500}> 
      <button
        className="text-white w-2/3 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 
        font-medium rounded-full text-sm px-5 py-2.5  mr-2 mb-2 dark:focus:ring-yellow-900 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
       GET DIRECTIONS
      </button> </Fade>
      {showModal ? (
        <>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-11/12 md:w-2/4 my-6 mx-auto ">
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                <div className="flex items-start justify-between md:p-5 rounded-t ">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none ">
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex md:flex-row flex-col text-center text-black">
                    <div className="md:border-r-2 md:w-1/2"> 
                    <h2 className="text-3xl "> MIDDLESBROUGH</h2>
                  <p className=" text-slate-500 text-lg leading-relaxed">
                  25 Bedford St, Middlesbrough TS1 2LL 
                  </p>
                  <a href="https://goo.gl/maps/WgH6VSiaaARB8SjP7">
                  <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 
                  font-medium rounded-full text-sm px-5 py-2.5 mt-4 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Directions</button> </a>
                  </div> 
                  <div className = "md:w-1/2 pt-10 md:pt-0">
                  <h2 className="text-3xl" > NORTON </h2> 
                  <p className=" text-slate-500 text-lg leading-relaxed" >
                  7 Leven Rd, Norton, Stockton-on-Tees TS20 1BQ
                  </p><a href="https://goo.gl/maps/yV9U9BDAPqXmYqmv9">
                  <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 
                  font-medium rounded-full text-sm px-5 py-2.5 mt-4 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Directions</button></a>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}