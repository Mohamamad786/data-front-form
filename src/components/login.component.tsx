import React, { Component } from "react";
import axios from 'axios';

// Adding two interfaces below that defines the props and states of sign in form
interface SignUpProps {
    name?: any;
    value?: any;
 }
interface SignUpState {
    email : string,
    password : string,
    errors : {
       email : string,
       password : string
    }
 }
export default class Login extends Component<SignUpProps, SignUpState>
{
   //handlesform submission, check for validation complete and then submit form data
    handleSubmit = (event : any) => {
        event.preventDefault();
        let validity = true;
        Object.values(this.state.errors).forEach(
          (val) => val.length > 0 && (validity = false)
        );
        if(validity == true){
           console.log("Registering can be done");
           const user = {
            email: this.state.email,
            password: this.state.password
          };
          axios.post(`localhost:8000/api/login`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        }else{
           alert("Sign In not successful");
        }
     }
    
    // Method to contol user input and give real time validation to user with errors 
    handleChange = (event : any) => {
       event.preventDefault();
       const { name, value } = event.target;
       const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
       let errors = this.state.errors;
       switch (name) {
         case 'email':
            errors.email = Regex.test(value)? '': 'Email is not valid!';
            break;
         case 'password':
            errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
            break;
         default:
           break;
       }
     this.setState(Object.assign(this.state, { errors,[name]: value }));
     console.log(this.state.errors);
     }
  constructor(props: SignUpProps) {
     super(props);
     const initialState = {
        username : '',
        email : '',
        password : '',
        errors : {
          username : '',
          email : '',
          password : ''
        } 
      }
      this.state = initialState;
      this.handleChange = this.handleChange.bind(this);
    }
    render() {    
        const {errors} = this.state           
        return (
            <form onSubmit={this.handleSubmit} noValidate >
                <h1>Sign In</h1>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name='email' onChange={this.handleChange}  />
                    {errors.email.length > 0 &&  <span className="danger-text">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name='password' onChange={this.handleChange} />
                    {errors.password.length > 0 &&  <span className="danger-text">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me?</label>
                    </div>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                </div>
                <p className="forgot-password text-center">
                    <a href="#">Forgot your password?</a>
                </p>
                <p className="signup-account text-center">
                    Don't have an account? <a href="/sign-up">Sign up</a>
                </p>
                <p className="resend-email text-center">
                    <a href="#">Resend email confirmation</a>
                </p>
            </form>
        );
    }   
}