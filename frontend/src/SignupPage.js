import React, { Component } from 'react';
import './css/Signup.css';
import env from "react-dotenv";
import { Route, Redirect, Link, withRouter } from 'react-router-dom';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            userType: "",
            passwordValidated: true,
            isAuthenticated: false,
            personalData: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            },
            emptyUser: false
         };
    }

    // updates personal data
    handleChange = (event) => {
        let personalData = this.state.personalData;
        personalData[event.target.id] = event.target.value;

        this.setState({personalData: personalData});
    }

    changeUserType = (event) => {
        this.setState({userType: event.target.value, emptyUser: false});
    }

    validatePassword = (event) => {
        const confirmPassword = event.target.value;
        const password = this.state.personalData["password"];
        if (password !== confirmPassword) {
            this.setState({passwordValidated: false});
        }
        else {
            this.setState({passwordValidated: true});
        }
    }

    signup = (e) => {
        e.preventDefault()
        if (this.state.passwordValidated === true) {
            let userType = this.state.userType;
            if (userType === "admin" || userType === "user"){
                //this.firebase_signup(this.state.email, this.state.password);
            }
            else {
                this.setState({emptyUser: true});
            }
        }
    }

    /* firebase_signup = () => {
        let {email, password} = this.state.personalData
        // console.log(email + " " + password)
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // Send verification email
            this.firebase_sendVerification(user);
            // Add user to MongoDB
            this.signUp();

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/email-already-in-use') {
                alert('That email is taken. Try another.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
        });
    }

    firebase_sendVerification = (user) => {

        user.sendEmailVerification().then(function() {
            // Email sent.
        }).catch(function(error) {
            // An error happened.
            var errorMessage = error.message;
            alert(errorMessage);
            console.log(error);
        });
    } */

    signUp = () => {
        if (this.state.passwordValidated === true) {
            if (this.state.userType === "admin") {
                this.addAdmin(this.state.personalData);
            }
            else if (this.state.userType === "user") {
                this.addUser(this.state.personalData);
            }
            else {
                this.setState({emptyUser: true})
            }
        }
    }

    addAdmin = (personalData) => {
        const newAdmin = {
            firstName: personalData["firstName"],
            lastName: personalData["lastName"],
            email: personalData["email"],
            password: personalData["password"],
            isAuthenticated: this.state.isAuthenticated,
            user: "admin"
        }

        //this.mongo_signup(newAdmin)
    }

    addUser = (personalData) => {
        const newUser = {
            firstName: personalData["firstName"],
            lastName: personalData["lastName"],
            email: personalData["email"],
            password: personalData["password"],
            isAuthenticated: this.state.isAuthenticated,
            user: "user"
        }

        //this.mongo_signup(newUser)
    }
    
    mongo_signup = (user) => {
        let _this = this
        fetch(env.backendURL + 'signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((res) => {
            if (res.status === 404) {
                _this.setState({error: true})
            }
            else {
                _this.props.history.push("/email-verification");
            }
        })
    }

    render() {
        return (
            <div className="signup-form">
                <div id="title-signup">
                    <b class="text text-center " style={{fontSize: 50, color: "#2C6674"}}>Sign Up</b>
                </div>
                <form onSubmit={this.signup}>
                <div id="cta-type">
                    <div id="admin">
                        <input type="radio" id="admin" name="cta" value="admin" onChange={this.changeUserType} checked={null}/>
                        <label for="admin">Admin</label>
                    </div>
                    <div id="user">
                        <input type="radio" id="user" name="cta" value="user" onChange={this.changeUserType} checked={null}/>
                        <label for="user">User</label>
                    </div>
                </div>

                <div className= "input-name">
                    <p id="first-name">First Name</p>
                    <p id="last-name">Last Name</p>
                </div>
                <div id="cta-type" style={{marginBottom: "0px"}}>
                    <input type="text" id="firstName" className="user-name" style={{width: '245px'}} onChange={this.handleChange} size="25" required/>
                    <input type="text" id="lastName"  className="user-name" style={{width: '245px'}} onChange={this.handleChange} size="25" required/>
                </div>
                <p id = "input">Email</p>
                <input type="email" className="account-info" id="email" size="50" style={{width: '500px'}} onChange={this.handleChange} required/>
                <p id = "input">Password</p>
                <input type="password" className="account-info" id="password" style={{width: '500px'}} onChange={this.handleChange} 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one number, one uppercase, and one lowercase letter, and at least 6 or more characters long"
                    size="50" required/>
                <br/>
                <label id="pass-label" for="password">(Must contain at least one number, one uppercase, and one lowercase <br/>letter, and at least 6 or more characters long)</label>
                <p id = "input">Confirm Password</p>
                <input type="password" className="account-info" id="password-confirm" size="50" style={{width: '500px'}} onChange={this.validatePassword}  required/>
                <br/>
                <section>
                    {this.state.passwordValidated === false &&
                        <div>
                            <p id="confirm-error">Confirmation password does not match password!</p>
                        </div>
                    }
                </section>
                {this.state.emptyUser && <div className="signup-error">Select the type of user</div>}
                {this.state.error && <div className="signup-error">Email taken</div>}
                <input id = "signup-button" type="submit" value="CREATE ACCOUNT"/>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
                </form>
            </div>
        );
    }
}

export default withRouter(Signup);
