import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

export function HikeCardList({ hike, setOrdered }) {
  return (
    <Card
      style={{
        width: "50rem",
        height: "13rem",
        margin: "auto",
        border: "none",
      }}
    >
      <Row className="no-gutters">
        <Col md={5} lg={3}>
          <Card.Img
            variant="top"
            src={"/images/default.png"}
            style={{ height: "10rem", width: "15rem", marginTop: "1rem" }}
            fluid
          />
        </Col>
        <Col>
          <Card.Body style={{ marginLeft: "4rem" }}>
            <Card.Title>
              <Link to={"/hike/" + hike._id}>
                <p className=" h5 card-text text-left text-primary font-weight-bold">
                  {hike.title}
                </p>
              </Link>
            </Card.Title>
            <Card.Text>
              <p className="card-text text-left" style={{ fontWeight: "bold" }}>
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
      </Row>
    </Card>
  );
}

HikeCardList.propTypes = {
  hike: PropTypes.object,
  setOrdered: PropTypes.object,
};