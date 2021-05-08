import React from "react";
import { Image } from "react-bootstrap";
import { PropTypes } from 'prop-types';

function getStar(rating, star) {
  if (rating <= star || rating === 0) {
    return "/images/stars/empty.png";
  } else if (rating >= star + 1) {
    return "/images/stars/full.png";
  } else if (rating >= star + 0.9) {
    return "/images/stars/p9.png";
  } else if (rating >= star + 0.8) {
    return "/images/stars/p8.png";
  } else if (rating >= star + 0.7) {
    return "/images/stars/p7.png";
  } else if (rating >= star + 0.6) {
    return "/images/stars/p6.png";
  } else if (rating >= star + 0.5) {
    return "/images/stars/p5.png";
  } else if (rating >= star + 0.4) {
    return "/images/stars/p4.png";
  } else if (rating >= star + 0.3) {
    return "/images/stars/p3.png";
  } else if (rating >= star + 0.2) {
    return "/images/stars/p2.png";
  } else {
    return "/images/stars/p1.png";
  }
}

export function Ratings({ rating }) {
  return (
    <div>
      <form className="form-inline " style={{ marginLeft: "0vw" }}>
        <a>
          {" "}
          <Image
            src={getStar(rating, 0)}
            style={{ height: "2rem", width: "2.1rem", borderRadius: 0 }}
            fluid
          />{" "}
        </a>
        <a style={{ marginLeft: ".3vw" }}>
          {" "}
          <Image
            src={getStar(rating, 1)}
            style={{ height: "2rem", width: "2.1rem", borderRadius: 0 }}
            fluid
          />{" "}
        </a>
        <a style={{ marginLeft: ".3vw" }}>
          {" "}
          <Image
            src={getStar(rating, 2)}
            style={{ height: "2rem", width: "2.1rem", borderRadius: 0 }}
            fluid
          />{" "}
        </a>
        <a style={{ marginLeft: ".3vw" }}>
          {" "}
          <Image
            src={getStar(rating, 3)}
            style={{ height: "2rem", width: "2.1rem", borderRadius: 0 }}
            fluid
          />{" "}
        </a>
        <a style={{ marginLeft: ".3vw" }}>
          {" "}
          <Image
            src={getStar(rating, 4)}
            style={{ height: "2rem", width: "2.1rem", borderRadius: 0 }}
            fluid
          />{" "}
        </a>
        <a style={{ marginLeft: ".5vw", fontSize: 15 }}> {rating} </a>
      </form>
    </div>
  );
}
Ratings.propTypes = {
  rating: PropTypes.node,
}
