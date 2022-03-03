import React from 'react';
import './signup.css'
import sliceheaderimg from '../../assets/sliceheaderimg.svg'
import { NavLink} from "react-router-dom";

/**
 * Web Component that displays the form
 * for the log in page before the user
 * is authenticated. It also takes the login
 * logic from the ReadingList components
 * 
 * @author Scott Mains
 */

class SignUp extends React.Component {

render() {
  return (
  
    <div className="slice__login-box">
           <div>
           <div className="slice__header-img">
           <img src={sliceheaderimg} alt="slice logo"/>
           </div>
           <div className="slice__header-buttons">
             <h1> SIGN UP </h1>

             <input
       className=""
         type='text' 
         placeholder='Email'
         value={this.props.email}
         onChange={this.props.handleEmail}
       />
       <input
       className=""
         type='text' 
         placeholder='Password'
         value={this.props.password}
         onChange={this.props.handlePassword}
       />
       <input
       className=""
         type='text' 
         placeholder='Full Name'
         value={this.props.fullname}
         onChange={this.props.handleName}
       />
       <input
       className=""
         type='text' 
         placeholder='Phone Number'
         value={this.props.phonenumber}
         onChange={this.props.handlePhoneNumber}
       />

<button className="" onClick={this.props.handleSignUpClick}>Sign Up</button>
             
<div className="slice__create-account">
    <NavLink to ="/user-dashboard"> 
    <p> Log In </p> 
    </NavLink>
    </div>
    </div>
          </div>
          </div>
     
        
  );
}
}

export default SignUp;