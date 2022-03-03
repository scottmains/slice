import { Footer} from '../../containers'
import { Navbar, SignUp } from '../../components'
import React from "react";

class SliceSignUp extends React.Component {


    constructor(props) {
        super(props);
        this.state = { 
            authenticated: false, 
            email: "", 
            password: "",
            fullname: "",
            phonenumber: "",
            token:null,
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
    }

    componentWillDidUpdate(props){ // you will receive props here
        this.setState(props.formState);
      }

    handlePassword = (e) => {
        this.setState({password:e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }

    handleName = (e) => {
        this.setState({fullname:e.target.value})
    }

    handlePhoneNumber = (e) => {
        this.setState({phonenumber:e.target.value})
    }



    handleSignUpClick = () => {
        let url = "http://localhost/kv6003/backend/api/register"
        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('phonenumber', this.state.phonenumber);
        formData.append('fullname', this.state.fullname);
        fetch(url, {   method: 'POST',
            headers : new Headers(),
            body:formData})
            .then( (response) => { 
                if ((response.status === 200) || (response.status === 204)) {
                    console.log("niceone")
                } else {
                    throw Error(response.statusText);
                }
            })
            .catch ((err) => { 
                console.log("something went wrong ", err) 
            });
        }
    
    
  
    render() {
        console.log("phonenumber is:", this.state.phonenumber);
        console.log("fullname is", this.state.fullname);
        console.log("email is:", this.state.email);
        console.log("password is", this.state.password);
        return (

           
            <div className="gradient__bg">
                 <Navbar/>
                <SignUp handleEmail={this.handleEmail} 
                        handlePassword={this.handlePassword}
                        handleSignUpClick={this.handleSignUpClick}  />
                <Footer />
            </div>
        )
    }
}
  
  export default SliceSignUp
  