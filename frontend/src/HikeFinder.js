import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { HikeCardList } from "./components/HikeCardList";

function HikeFinder(props) {
  return (
    <div>
      <Container style={{ marginTop: "5vw" }}>
        <b
          className="text text-center "
          style={{ fontSize: 50, color: "#2C6674" }}
        >
          Hike Finder
        </b>
        <p
          className="text text-center "
          style={{ fontSize: 30, color: "#59BCA6" }}
        >
          Find one that&apos;s just right for you!
        </p>
      </Container>
      <Container style={{ marginTop: "2vw" }}>
        <hr
          style={{
            color: "#BDBDBDBD",
            height: 3,
          }}
        />
      </Container>

      <Container>
        <Col>
          {props.hikeList.map((hike) => (
            <Row className="mb-5" key={hike._id} style={{ marginTop: "3.2vw" }}>
              <HikeCardList hike={hike} />
            </Row>
          ))}
        </Col>
      </Container>
    </div>
  );
}

HikeFinder.propTypes = {
  hikeList: PropTypes.object,
};
export default HikeFinder;
