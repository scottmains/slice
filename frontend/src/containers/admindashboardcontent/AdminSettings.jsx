import React from 'react'
import {AdminSidebar} from '../../components'
import { UserContext } from '../../App';
import {  useNavigate } from 'react-router-dom';
const AdminCustomers = () => {


  const isAdmin = React.useContext(UserContext); 
  let navigate = useNavigate();


  if (isAdmin === "0") {
    navigate("/", { replace: true });
  }

  return (
    <div className="h-screen text-black"> 
    <AdminSidebar />
    </div>

  )
}

export default AdminCustomers