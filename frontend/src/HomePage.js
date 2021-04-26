/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "./css/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage(props) {
  return (
    <div className="home">
      <div className="top-banner">
        <div className="banner-info">
          <img
            src="https://www.margarita-adventures.com/wp-content/uploads/2017/02/Cerro_San_Luis.jpg"
            height="270"
          />
          <div>
            <b
              className="text text-center "
              style={{ fontSize: 35, color: "#2C6674", marginLeft: "2vw" }}
            >
              Want to get out and explore?
            </b>
            <p style={{ marginTop: "1vw" }}>
              There are so many great hikes to go on in SLO county and the city
              of San Luis Obispo itself. With SLO HIKES, the perfect hike for
              you is only a few clicks away. Here you will find relevant reviews
              and useful filtering functionality to make your experience a
              breeze. Help us improve the hiking community in SLO County and
              make some more memories in the beautiful outdoors!
            </p>
            <Link to="/hikeFinder">
              <button href="hikefinder">FIND A HIKE NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="featured-hikes">
        <div id="featured-title">
          <b
            className="text text-left"
            style={{ fontSize: 35, color: "#2C6674", marginLeft: "7vw" }}
          >
            Most Popular Hikes
            <hr />
          </b>
        </div>
        <div
          className="card-deck"
          style={{ marginLeft: "1.5vw", marginRight: "1.5vw" }}
        >
          <Col>
            <Row className="mb-5" style={{ margin: 20 }}>
              {props.hikeList.slice(0, 1).map((hike) => (
                <Col>
                  <Card.Body>
                    <Card.Title>
                      <Card.Img
                        variant="top"
                        src={hike.imagesrc}
                        fluid="true"
                      />
                      <Link to={"/hike/" + hike._id}>
                        <p
                          className=" h5 card-text text-left text-primary font-weight-bold"
                          style={{ marginTop: "2vw" }}
                        >
                          {hike.title}
                        </p>
                      </Link>
                    </Card.Title>
                    <Card.Text>
                      <p
                        className="card-text text-left"
                        style={{ fontWeight: "bold" }}
                      >
                        {hike.location}
                      </p>
                    </Card.Text>

                    <Card.Text>
                      <p className="card-text text-left">
                        {hike.description.substring(0, 150) + "..."}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Col>
              ))}
              {props.hikeList.slice(1, 2).map((hike) => (
                <Col>
                  <Card.Body>
                    <Card.Title>
                      <Card.Img
                        variant="top"
                        src={hike.imagesrc}
                        fluid="true"
                      />
                      <Link to={"/hike/" + hike._id}>
                        <p
                          className=" h5 card-text text-left text-primary font-weight-bold"
                          style={{ marginTop: "2vw" }}
                        >
                          {hike.title}
                        </p>
                      </Link>
                    </Card.Title>
                    <Card.Text>
                      <p
                        className="card-text text-left"
                        style={{ fontWeight: "bold" }}
                      >
                        {hike.location}
                      </p>
                    </Card.Text>

                    <Card.Text>
                      <p className="card-text text-left">
                        {hike.description.substring(0, 150) + "..."}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Col>
              ))}
              {props.hikeList.slice(2, 3).map((hike) => (
                <Col>
                  <Card.Body>
                    <Card.Title>
                      <Card.Img
                        variant="top"
                        src={hike.imagesrc}
                        fluid="true"
                      />
                      <Link to={"/hike/" + hike._id}>
                        <p
                          className=" h5 card-text text-left text-primary font-weight-bold"
                          style={{ marginTop: "2vw" }}
                        >
                          {hike.title}
                        </p>
                      </Link>
                    </Card.Title>
                    <Card.Text>
                      <p
                        className="card-text text-left"
                        style={{ fontWeight: "bold" }}
                      >
                        {hike.location}
                      </p>
                    </Card.Text>

                    <Card.Text>
                      <p className="card-text text-left">
                        {hike.description.substring(0, 150) + "..."}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Col>
              ))}
            </Row>
          </Col>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  hikeList: PropTypes.object,
};
export default HomePage;
