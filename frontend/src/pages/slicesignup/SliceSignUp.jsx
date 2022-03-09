import { Footer} from '../../containers'
import { Navbar} from '../../components'
import React from "react";
import sliceheaderimg from '../../assets/sliceheaderimg.svg'
import { NavLink} from "react-router-dom";


class SliceSignUp extends React.Component {


    constructor(props) {
        super(props);
        this.state = { 
            authenticated: false, 
            token:null,
            submitted: "",
            fields: {},
            errors: {},
            existingemail: ""
        }
    }
    
    handleValidation (){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "Cannot be empty";
    }

    

    if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf("@");
        let lastDotPos = fields["email"].lastIndexOf(".");
        if (
            !(
                lastAtPos < lastDotPos &&
                lastAtPos > 0 && 
                fields["email"].indexOf("@@") == -1 &&
                lastDotPos > 2 &&
                fields["email"].length - lastDotPos > 2
            )
        ) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }
    }

    if (!fields["fullname"]) {
        formIsValid = false;
        errors["fullname"] = "Cannot be empty";
      }
      if (typeof fields["fullname"] !== "undefined") {
        if (!fields["fullname"].match(/^[a-z A-Z]+$/)) {
          formIsValid = false;
          errors["fullname"] = "Only letters";
        }
      }

    if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Cannot be empty";
    }
    

    if (typeof fields["password"] !== "undefined" && typeof fields["passwordconfirm"] !== "undefined") {
        if (fields["password"] != fields["passwordconfirm"]) {
            formIsValid = false;
            errors["passwordconfirm"] = "Passwords don't match.";
          }
        }

    if (!fields["phonenumber"]) {
            formIsValid = false;
            errors["phonenumber"] = "Cannot be empty";
        }


    this.setState({errors: errors});
    return formIsValid;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
      }
      signupSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
          console.log("SUCCESS")
        } else {
          console.log("Form has errors.");
        }
      }

    handleSignUpClick = () => {
        let url = "http://localhost/kv6003/backend/api/register"
        let formData = new FormData();
        formData.append('email', this.state.fields["email"]);
        formData.append('password', this.state.fields["password"]);
        formData.append('passwordconfirm', this.state.fields["passwordconfirm"]);
        formData.append('phonenumber', this.state.fields["phonenumber"]);
        formData.append('fullname', this.state.fields["fullname"]);

        fetch(url, {   method: 'POST',
            headers : new Headers(),
            body:formData})
            .then( (response) => { 
                if ((response.status === 200) || (response.status === 204)) {
                    console.log("SUCCESS")
                } else if (response.status === 400) {
                    this.setState({ 
                        existingemail: "Email is already taken"
                    })
                } else {
                    throw Error(response.statusText);
                }
            })
            .catch ((err) => { 
                console.log("something went wrong ", err) 
            });
        }

    render() {
        console.log("phonenumber is:", this.state.fields["phonenumber"]);
        console.log("fullname is", this.state.fields["fullname"]);
        console.log("email is:", this.state.fields["email"]);
        console.log("password is", this.state.fields["password"]);
        console.log("password confirm is", this.state.fields["passwordconfirm"]);
        console.log(this.state.existingemail);

        return (
            <div className="gradient__bg">
                 <Navbar/>
                 <div className="slice__login-box">
           <div>
           <div className="slice__header-img">
           <img src={sliceheaderimg} alt="slice logo"/>
           </div>
           <div className="slice__header-buttons">
           <div>
             <h1> SIGN UP </h1>
        <form
          name="signupform"
          className="slice__signup-form"
          onSubmit={this.signupSubmit.bind(this)}
        >
          <div>
            <fieldset>
              <input
                ref="name"
                type="text"
                size="30"
                placeholder="Full Name"
                onChange={this.handleChange.bind(this, "fullname")}
                value={this.state.fields["fullname"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["fullname"]}</span>
              <br />
              <input
                refs="email"
                type="text"
                size="30"
                placeholder="Email"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]} {this.state.existingemail} </span>
              <br />
              <input
                refs="password"
                type="password"
                size="15"
                placeholder="Password"
                onChange={this.handleChange.bind(this, "password")}
                value={this.state.fields["password"]}
              />
              <br />
              <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
              <input
                refs="passwordconfirm"
                type="password"
                size="15"
                placeholder="Password Confirm"
                onChange={this.handleChange.bind(this, "passwordconfirm")}
                value={this.state.fields["passwordconfirm"]}
              />
              <br />
              <span style={{ color: "red" }}>{this.state.errors["passwordconfirm"]}</span>
              <input
                refs="phone"
                type="text"
                size="30"
                placeholder="Phone Number"
                onChange={this.handleChange.bind(this, "phonenumber")}
                value={this.state.fields["phonenumber"]}
              />
              <br />
              <span style={{ color: "red" }}>{this.state.errors["phonenumber"]} </span>
              <fieldset>
              <button onClick={this.handleSignUpClick} id="submit" value="Submit">Sign Up</button>
            </fieldset>
            </fieldset>
          </div>
        </form>
      </div>

             
<div className="slice__create-account">
    <NavLink to ="/user-dashboard"> 
    <p> Log In </p> 
    </NavLink>
    </div>
    </div>
          </div>
          </div>
                <Footer />
            </div>
        )
    }
}
  
  export default SliceSignUp
  