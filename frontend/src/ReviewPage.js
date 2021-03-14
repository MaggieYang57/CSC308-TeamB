import React, { Component } from 'react';
import './css/Review.css';
import './css/SinglePage.css';
import FilterBar from './components/FilterBar';
import env from "react-dotenv";
import { Route, Redirect, Link, withRouter } from 'react-router-dom';

const averageRatings = (ratings) => {
   let sum = 0
   for (const i in ratings)
      sum += +(ratings[i])
   return (sum / ratings.length).toFixed(1)
}

class Review extends React.Component {

   constructor(props) {
      super(props);
      this.state = {};
   }

   componentDidMount() {
      const { match: { params } } = this.props;

      fetch('http://localhost:3001/hike/')
         .then(res => res.json())
         .then(data => {
            const hikeID = this.props.match.params.id;
            for (var i = 0; i < data.length; i++) {
               if (data[i]._id == hikeID) {
                  console.log('found', data[i]);
                  this.setState({ ...data[i] });
               }
            }
         });
   }

   // updates personal data
   // handleChange = (event) => {
   //    let personalData = this.state.personalData;
   //    personalData[event.target.id] = event.target.value;

   //    this.setState({ personalData: personalData });
   // }


   // validatePassword = (event) => {
   //    const confirmPassword = event.target.value;
   //    const password = this.state.personalData["password"];
   //    if (password !== confirmPassword) {
   //       this.setState({ passwordValidated: false });
   //    }
   //    else {
   //       this.setState({ passwordValidated: true });
   //    }
   // }

   signup = (e) => {
      console.log("haha");
      // e.preventDefault()
      // if (this.state.passwordValidated === true) {
      //    let userType = this.state.userType;
      //    if (userType === "admin" || userType === "user") {
      //       //this.firebase_signup(this.state.email, this.state.password);
      //    }
      //    else {
      //       this.setState({ emptyUser: true });
      //    }
      // }
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

   // signUp = () => {
   //    if (this.state.passwordValidated === true) {
   //       if (this.state.userType === "admin") {
   //          this.addAdmin(this.state.personalData);
   //       }
   //       else if (this.state.userType === "user") {
   //          this.addUser(this.state.personalData);
   //       }
   //       else {
   //          this.setState({ emptyUser: true })
   //       }
   //    }
   // }

   // addUser = (personalData) => {
   //    const newUser = {
   //       firstName: personalData["firstName"],
   //       lastName: personalData["lastName"],
   //       email: personalData["email"],
   //       password: personalData["password"],
   //       isAuthenticated: this.state.isAuthenticated,
   //       user: "user"
   //    }

   //    //this.mongo_signup(newUser)
   // }

   // mongo_signup = (user) => {
   //    let _this = this
   //    fetch(env.backendURL + 'signup', {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json'
   //       },
   //       body: JSON.stringify(user)
   //    })
   //       .then((res) => {
   //          if (res.status === 404) {
   //             _this.setState({ error: true })
   //          }
   //          else {
   //             _this.props.history.push("/email-verification");
   //          }
   //       })
   // }

   render() {
      return (
         <div className="signup-form">
            <h1 id="title">Review for:</h1>
            <p id="hike-title">{this.state.title}</p>
            <p> - {this.state.location}</p>
            <form onSubmit={this.signup}>
               <p id="input">Enter your name:</p>
               <input type="text" className="account-info" id="email" size="50" style={{ width: '500px' }} required />

               <div className="rating">
                  <label htmlFor="difficulty-rating"><p id='input'>Difficulty: </p></label>
                  <select id="difficulty-rating" length="20">
                     <option value="5">5 ★</option>
                     <option value="4">4 ★</option>
                     <option value="3">3 ★</option>
                     <option value="2">2 ★</option>
                     <option value="1">1 ★</option>
                  </select>
                  <label htmlFor="accessibility-rating"><p id='input'>Accessibility: </p></label>
                  <select id="accessibility-rating" length="20">
                     <option value="5">5 ★</option>
                     <option value="4">4 ★</option>
                     <option value="3">3 ★</option>
                     <option value="2">2 ★</option>
                     <option value="1">1 ★</option>
                  </select>

               </div>

               <div>
                  <p id="input">Activities permitted:</p>
                  <label>
                     <span>dog-friendly</span>
                     <input type="checkbox" value="1" />

                  </label>
                  <label>
                     <span>horse-friendly</span>
                     <input type="checkbox" value="1" />

                  </label>
                  <label>
                     <span>bike-friendly</span>
                     <input type="checkbox" value="1" />

                  </label>
                  <label>
                     <span>free-parking</span>
                     <input type="checkbox" value="1" />

                  </label>
               </div>

               <p id="input">Review:</p>
               <textarea placeholder="Enter your review here..." name="review-body" id="review-body" className="review-body" wrap="hard" style={{ width: '500px', height: '200px' }} required>
               </textarea>


               <input id="signup-button" type="submit" value="SUBMIT A REVIEW" />
               <a href="javascript:history.back()">Go Back to the Hike Page</a>
            </form>
         </div>
      );
   }
}

export default withRouter(Review);
