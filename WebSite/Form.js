import React, {Component} from 'react';
import './Form.css';
import { Button } from './Button';

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      firstName:"",
      lastName:"",
      age:"",
      gender:"",
      bloodgroup:"",
      time:"",
      ID:""
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  lasthandler = (event) => {
    this.setState({
        lastName: event.target.value
    })
}
agehandler = (event) => {
    this.setState({
        age: event.target.value
    })
}

genderhandler = (event) => {
  this.setState({
      gender: event.target.value
  })
}


bloodgrouphandler = (event) => {
  this.setState({
      bloodgroup: event.target.value
  })
}

timehandler = (event) => {
  this.setState({
      time: event.target.value
  })
}


IDhandler = (event) => {
  this.setState({
      ID: event.target.value
  })
}
handleSubmit = (event) => {
    alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
    console.log(this.state);
    this.setState({
        firstName: "",
        lastName: "",
        age: '',
        gender: "",
        bloodgroup: "",
        time: "",
        ID: "",
    })
 event.preventDefault()
    
}




render() {
    return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <h1>User Registration</h1>
                <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                <label>Age :</label> <input type="text" value={this.state.age} onChange={this.agehandler} placeholder="Age..." /><br />
                <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                    <option defaultValue>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br />
                <label>BloodGroup :</label><select onChange={this.bloodgrouphandler} defaultValue="Select Blood Group">
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
                <label>Time :</label><select onChange={this.timehandler} defaultValue="Select Time">
                    <option defaultValue>Select Last time you donated blood</option>
                    <option value="1">1-3 months</option>
                    <option value="2">4-6 months</option>
                    <option value="3">more than 6 months</option>
                </select><br />
                <label>Verification ID :</label> <input type="text" value={this.state.ID} onChange={this.IDhandler} placeholder="ID..." /><br />

                <input type="submit" value="Submit" />
                
            </form>

        </div>
        
    )
}
}
export default Form;