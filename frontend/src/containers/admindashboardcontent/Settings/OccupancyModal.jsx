import axios from 'axios';
import React, { useState} from 'react';
import { AdminContext } from '../../../App';
const UpdateOccupancyModal = ({setShowModalOccupancyUpdate}) => {

  const [occupancyUpdate, setOccupancyUpdate] = useState(null);
  const jwtToken = React.useContext(AdminContext); 
  const updateOccupancy = async (e) => {

    const fd = new FormData();
    fd.append('max_occupancy', occupancyUpdate);
    fd.append('token', jwtToken);
    const response = await axios.post('http://localhost/kv6003/backend/api/adminsettings', fd)
    .then((res)=> {
      window.location.reload(false);
    });
}

    return (
        <>
        <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start text-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
               Update Max Occupancy
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModalOccupancyUpdate(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
            <input className="appearance-none rounded-none relative block w-full  px-3 py-2 border border-gray-300 
      placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500
       focus:z-10 sm:text-sm" 
      type="text" id="comment" onChange={(e)=> setOccupancyUpdate(e.target.value)} value={occupancyUpdate} required />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModalOccupancyUpdate(false)}
              >
                Close
              </button>
              <button
                className="bg-red-500 mx-auto text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={updateOccupancy}
              >
              Change 
              </button>
            
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
}


export default UpdateOccupancyModal;