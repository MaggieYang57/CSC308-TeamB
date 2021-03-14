import React from 'react';
import { Link } from "react-router-dom";
import { Card, Badge, Button, Row, Col } from 'react-bootstrap';
import './css/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage(props){
    return (
        <div className="home">
            <div className= "top-banner">
                <div className = "banner-info">
                    <img src = "https://www.margarita-adventures.com/wp-content/uploads/2017/02/Cerro_San_Luis.jpg" height="270" />
                    <div>
                        <b class="text text-center " style={{fontSize: 35, color: "#2C6674", marginLeft: "2vw"}}>Want to get out and explore?</b>
                        <p style = {{marginTop: "1vw"}}>There are so many great hikes to go on in SLO county and the city of San Luis Obispo itself. 
                        With SLO HIKES, the perfect hike for you is only a few clicks away. Here you will find relevant reviews and useful filtering functionality to make your experience a breeze. 
                        Help us improve the hiking community in SLO County and make some more memories in the beautiful outdoors!</p>
                        <Link to="/hikeFinder"><button href="hikefinder">FIND A HIKE NOW</button></Link>
                    </div>
                </div>
            </div>
            <div className = "featured-hikes">
                <div id="featured-title">
                    <b class="text text-center " style={{fontSize: 35, color: "#2C6674", marginLeft: "7vw"}}>Most Popular Hikes</b>
                </div>
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
export default HomePage;