
import './bookingform.css'
import React from 'react';


class BookingForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {value: '17:00'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {    this.setState({value: event.target.value});  }
      handleSubmit(event) {
        alert('You have chosen: ' + this.state.value);
        event.preventDefault();
      }

      render() {

    return (

      <div className="slice__booking-form">
  
    <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>            
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </label>
        <input type="submit" value="Lets go" /> 
      </form>
      </div>
    
     )
    }
}

  export default BookingForm;
