import React, {Component} from 'react';
import './ser.css';
import { Button } from './Button';

class Ser extends Component{
  constructor(props){
    super(props)
    this.state = {
      blood: "",
      month: "",
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  bloodhandler = (event) => {
  this.setState({
      blood: event.target.value
  })
}
    
  monthhandler = (event) => {
    this.setState({
        month: event.target.value
    })
  }
handleSubmit = (event) => {
  var cars = new Array("Saab", "Volvo", "BMW");
    alert(Math.floor(Math.random() * 100) + 1 + ' units will be required.' + cars[0]+ 
    '4 Yukti Jain Female 2' + 
'8 Samarth Singh Male 6')
    console.log(this.state);
    this.setState({
        blood: "",
        month: "",
    })
 event.preventDefault()
    
}

render() {
    return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <h1>User Registration</h1>
                <label>BloodGroup :</label><select onChange={this.bloodhandler} defaultValue="Select Blood Group">
                    <option defaultValue>Select Blood Group</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select><br />
                <label>Month :</label><select onChange={this.monthhandler} defaultValue="Select Month">
                    <option defaultValue>Select Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select><br />
                  <input type="submit" value="Submit" />
                
            </form>

        </div>
        
    )
}
}
export default Ser;
//Till line 121 is the proper frontend code, from here onwards i am trying something new maybe works
//hope for the best god will help

