import React, { Component } from "react";
import "./Style.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      department: "",
      rating: "",
      employees: [],
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleDepartmentChange = (event) => {
    this.setState({
      department: event.target.value,
    });
  };
  handleRatingChange = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    const tempObj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };
    const tempar = this.state.employees;
    tempar.push(tempObj);
    this.setState({ employees: tempar });
  };

  render() {
    return (
      <div>
        <from acttion="">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <div>
            <label class="label">Name :</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            ></input>
          </div>
          <br />
          <div>
            <lable class="label">Department :</lable>
            <input
              type="text"
              value={this.state.department}
              onChange={this.handleDepartmentChange}
            ></input>
          </div>
          <br />
          <div>
            <lable class="label">Rating :</lable>
            <input
              type="text"
              value={this.state.rating}
              onChange={this.handleRatingChange}
            ></input>
          </div>
          <br />
          <br />
          <button type="submit" onClick={this.handleButtonClick}>
            Submit
          </button>
        </from>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          {this.state.employees.map((value, index) => {
            return (
              <div className="box">
                {index + 1}. Name : {value.name} | Department :{" "}
                {value.department} | Rating : {value.rating}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Form;