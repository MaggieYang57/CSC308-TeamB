import React from 'react';
import { Link } from "react-router-dom";
import '../css/HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
        <div className="home">
            <div className= "top-banner">
                <div className = "banner-info">
                    <img src = "https://www.margarita-adventures.com/wp-content/uploads/2017/02/Cerro_San_Luis.jpg" height="270" />
                    <div>
                        <h1>Want to get out and explore?</h1>
                        <p>This body of text should give a little info on our site and what users can do here. Explain breifly how we can help them, why they want to stay and use our site, maybe a little bit about what our mission is. But not too much text, need to keep it light. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales, diam eget tristique ultrices, orci massa consequat sapien, nec egestas sem tellus et nisi. </p>
                        <Link to="/hikeFinder"><button href="hikefinder">FIND A HIKE NOW</button></Link>
                    </div>
                </div>
            </div>
            <div className = "featured-hikes">
                <h1 id="featured-title">Most Popular Hikes</h1>
                <div className = "row">
                    <div id = "column1">
                        <img src = "https://www.margarita-adventures.com/wp-content/uploads/2017/02/Cerro_San_Luis.jpg" height="120" />
                        <div className = "info">
                            <h1>Hike Title</h1>
                            <h2>Location</h2>
                            <p>Short description here</p>
                        </div>
                    </div>
                    <div id = "column2">
                    <img src = "https://www.margarita-adventures.com/wp-content/uploads/2017/02/Cerro_San_Luis.jpg" height="120" />
                        <div className = "info">
                            <h1>Hike Title</h1>
                            <h2>Location</h2>
                            <p>Short description here</p>
                        </div>
                    </div>
                    <div id = "column3">
                    <img src = "https://www.margarita-adventures.com/wp-content/uploads/2017/02/Cerro_San_Luis.jpg" height="120" />
                        <div className = "info">
                            <h1>Hike Title</h1>
                            <h2>Location</h2>
                            <p>Short description here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default HomePage;