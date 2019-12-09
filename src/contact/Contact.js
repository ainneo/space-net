import React, { Component } from 'react';
import "./contact.css"


class Form extends Component{
  constructor(){
    super()
    this.state = {
      fields:{},//storing user details
      errors:{},//storing error messages
    };
    this.handleChange = this.handleChange.bind(this);
    // function stores user details in state (i.e: fields: {}).
    this.submitForm = this.submitForm.bind(this);
    //function validate user details by calling  validateForm()
    //function and clear the user form details when user form details is valid.
  }

  handleChange(e) {
    let fields = this.state.fields;//setting prevStates in function
    fields[e.target.name] = e.target.value;
    this.setState({fields});
  }
  submitForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          this.setState({fields:fields});
          alert("Thank you! One of our agents will contact you shortly");
      }
     }
 validateForm() {
   let fields = this.state.fields;
   let errors = {};
   let formIsValid = true;

   if (!fields["username"]) {
     formIsValid = false;
     errors["username"] = "*Please enter your username.";
   }
   if (typeof fields["username"] !== "undefined") {
     if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
       formIsValid = false;
       errors["username"] = "*Please enter alphabet characters only.";
     }
   }
   if (!fields["emailid"]) {
     formIsValid = false;
     errors["emailid"] = "*Please enter your email-ID.";
   }
   if (typeof fields["emailid"] !== "undefined") {
     //regular expression for email validation
     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
     if (!pattern.test(fields["emailid"])) {
       formIsValid = false;
       errors["emailid"] = "*Please enter valid email-ID.";
     }
   }

   this.setState({
     errors: errors
   });
   return formIsValid;
}

  render(){
    return(
      <div id="contact" className="contact-wrapper">
        <h2>CONTACT US</h2>
        <p>Want more information?</p>
        <div className="contact-container">
          <form method="post"  name="userRegistrationForm"  onSubmit= {this.submitForm} >
                <label>First and last name</label>
                <input type="text" name="username"
                       value={this.state.fields.username}
                       onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.username}</div>
                <label>Email ID:</label>
                <input type="text"
                       name="emailid"
                       placeholder="format: xxxx@xxxx.com"
                       required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                       value={this.state.fields.emailid} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.emailid}</div>
                <div className = "button">
                <input type="submit" value="submit"/>
                </div>
            </form>
         </div>
      </div>
    )
  }
}

export default Form
