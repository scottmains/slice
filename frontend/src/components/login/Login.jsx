import React from 'react';
import './login.css'
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

class Login extends React.Component {

render() {
  return (
    <div className="slice__login section__padding">

    <div className="slice__login-box">
           <div>
           <div className="slice__header-img">
           <img src={sliceheaderimg} alt="slice logo"/>
           </div>
           <div className="slice__header-buttons">
             <h1> LOGIN </h1>
           <div>
      <div className="">
       <input
       className=""
         type='text' 
         placeholder='Email'
         value={this.props.email}
         onChange={this.props.handleEmail}
       />
       </div>
       <div>
       <input
       className=""
         type='password' 
         placeholder='Password'
         value={this.props.password}
         onChange={this.props.handlePassword}
       />
       </div>
      <button className="" onClick={this.props.handleLoginClick}>Log in</button>
    </div>
    <div className="slice__create-account">
    <NavLink to ="/sign-up"> 
    <p> Create Account </p> 
    </NavLink>
    </div>
          </div>
     
          </div>
          </div>
      
    </div>
  );
}
}

export default Login;