import React from "react";
import PropTypes from "prop-types";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Ratings } from "./Ratings";

function round(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const averageRatings = (ratings) => {
  let sum = 0;
  for (const i in ratings) sum += +ratings[i];
  return (sum / ratings.length).toFixed(1);
}

const averageDifficulty = (difficulty) => {
  let sum = 0;
  for (const i in difficulty) sum += +difficulty[i];
  return (sum / difficulty.length).toFixed(1);
};

export function HikeCardList({ hike }) {
  return (
    <Card
      style={{
        width: "45rem",
        height: "13rem",
        margin: "auto",
        border: "none",
      }}
    >
      <Row className="no-gutters">
        <Col md={5} lg={3}>
          <Card.Img
            variant="top"
            // eslint-disable-next-line react/prop-types
            src={hike.imagesrc}
            style={{ height: "10rem", width: "15rem", marginTop: "1rem" }}
            fluid
          />
        </Col>
        <Col>
          <Card.Body style={{ marginLeft: "4rem", marginTop: "1rem" }}>
            <Ratings rating={round(averageRatings(hike.rating), 1)} />
            <Card.Title style={{ marginTop: "1vw" }}>
              <Link to={"/hike/" + hike._id}>
                <p className=" h5 card-text text-left text-primary font-weight-bold">
                  {hike.title}{" "}
                </p>
              </Link>
            </Card.Title>
            <Card.Text>
              <div style ={{display:'flex'}}>
                <p className="card-text text-left" style={{ fontWeight: "bold" }}>
                  {hike.location}
                </p>
                <div className="difficulty-box" style={{ marginLeft:'30px', borderWidth: '2px', padding: '3px' }}>
                  <p id="difficulty" style={{ marginLeft:'10px', fontSize: "18px", textAlign:'center' }}>Difficulty: {averageDifficulty(hike.difficulty)}</p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <Row>
        <Card.Text style={{ marginLeft: "1rem", marginTop: ".7rem" }}>
          <p className="card-text text-left">
            {hike.description.substring(0, 170) + "..."}
          </p>
        </Card.Text>
      </Row>
    </Card>
  );
}

HikeCardList.propTypes = {
  hike: PropTypes.object,
};
