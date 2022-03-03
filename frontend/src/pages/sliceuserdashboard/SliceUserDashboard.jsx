import React from "react";
import { UserDashboardContent} from '../../containers'
import {Footer} from '../../containers';
import { Navbar} from '../../components'
import {Login} from '../../components'

/**
 * Parent component that takes the children
 * and presents its data for the Reading list page
 * 
 *  Used to gauge whether the user is authenticated and
 * attaches the Readinglisttoken to their local storage
 * so that they can access the reading list page.
 * 
 * @author Scott Mains
 */

class SliceUserDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            authenticated: false, 
            email: "", 
            password: "",
            search:"",
            token:null,
            
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('myReadingListToken')) {
            this.setState(
                {authenticated:true,
                 token: localStorage.getItem('myReadingListToken')
                });
        }
    }

    
    
    handlePassword = (e) => {
        this.setState({password:e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }

    handleLogoutClick = () => {
        this.setState({
            authenticated:false,
            token: null
        })
        localStorage.removeItem('myReadingListToken');  
    }
    
    handleLoginClick = () => {
        let url = "http://localhost/kv6003/backend/api/authenticate" 
        // Send the email and password as 'Form Data'.
        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        // A fetch request with 'POST' method specified
        fetch(url, { method: 'POST',
                     headers : new Headers(),
                     body:formData
                   })
        .then( (response) => {
            // Successful authentication will return
            // a 200 status code.
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText)
            }
        })
        .then( (data) => {
            // If results include a token, change state
            // to authenticated
            if ("token" in data.results) {
                this.setState({ 
                    authenticated: true,
                    token: data.results.token
                     })
                localStorage.setItem('myReadingListToken', data.results.token);  

            }
        })
        .catch ((err) => {
            console.log("something went wrong ", err)
            }
        );
    }

    render() {
        let page = (
            <Login handleEmail={this.handleEmail} 
            handlePassword={this.handlePassword}
            handleLoginClick={this.handleLoginClick}  />
            
        )
        
        if (this.state.authenticated) {
            page = (
                <div className="">
                <UserDashboardContent/>
                <button className="slice__collect-button" onClick={this.handleLogoutClick}>Log Out</button>
                </div>
            )
        }
        return (
             
            <div className="gradient__bg">
                 <Navbar/>
                 
                {page}
                <Footer />
            </div>
        )
    }
}

export default SliceUserDashboard;