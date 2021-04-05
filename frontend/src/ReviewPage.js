import React, { Component } from 'react';
import './css/Review.css';
import './css/SinglePage.css';
import { withRouter } from 'react-router-dom';
import SinglePage from './SinglePage';


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

      fetch('http://localhost:3001/hike/' + this.props.match.params.id)
         .then(res => res.json())
         .then(data => {
            console.log('data', data);
            this.setState({ ...data[0] });
         });
   }

   submitReview = () => {
      const userName = document.getElementById('email').value
      const reviewBody = document.getElementById('review-body').value
      const review = {
         user_id: userName,
         reviewBody: reviewBody,
         hike_id: this.state._id
      }

      fetch('http://localhost:3001/hike/' + this.state._id + '/review', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(review)
      })
         .then(() => {
            this.state.reviews.push(review)
         })

      setTimeout(function () { alert("Hello"); }, 50000000);
   }

   render() {
      return (
         <div className="signup-form">
            <div className="title">
               <b class="text text-center " style={{ fontSize: 50, color: "#2C6674" }}>Review for:</b>
            </div>
            <p id="hike-title">{this.state.title}</p>
            <p> - {this.state.location}</p>
            <form onSubmit={this.submitReview}>
               <p id="input" style={{ marginLeft: '45px' }}>Enter your name:</p>
               <input type="text" className="account-info" id="email" size="50" style={{ width: '500px' }} required />

               <div className="rating" >
                  <label htmlFor="difficulty-rating"><p id='input' style={{ marginLeft: '-10px' }}>Difficulty: </p></label>
                  <select id="difficulty-rating" >
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
                  <p id="input" style={{ marginLeft: '45px' }}>Activities permitted:</p>
                  <label>
                     <span style={{ marginLeft: '45px' }}>dog-friendly</span>
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

               <p id="input" style={{ marginLeft: '45px' }}>Review:</p>
               <textarea placeholder="Enter your review here..." name="review-body" id="review-body" className="review-body" wrap="hard" style={{ width: '500px', height: '200px' }} required>
               </textarea>


               <input id="signup-button" type="submit" value="SUBMIT A REVIEW" style={{ marginLeft: '45px' }} />
               <a href="javascript:history.back()">Go Back to the Hike Page</a>
            </form>
         </div>
      );
   }
}

export default withRouter(Review);
