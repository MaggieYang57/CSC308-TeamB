import React, { useState, useEffect } from "react";
import { PropTypes } from 'prop-types';

function ReviewBody(props) {
  const rows = props.reviewList.map((row, index) => {
    return (
      <tr key={index}>
        <td style={{ width: "200px" }}>
          Review by: {row.user_email} <br></br>
           on {row.date.substring(0, 10)}
        </td>
        <td style={{ width: "200px" }}>
          Accessibility: {row.accessibility}
          <br></br>
          Difficulty: {row.difficulty}
        </td>

        <td style={{ width: "400px" }}>
          Activities permitted: {getActivities(row)}
        </td>
        <td>
          Comment: <br></br>
          {row.body}
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function getActivities(row) {
  console.log(row);
  var list = [];
  if (row.dog_friendly === true)
    list.push("dog friendly")
  if (row.free_parking === true)
    list.push("free parking")
  if (row.horseback_riding === true)
    list.push("horse riding")
  if (row.mountain_biking === true)
    list.push("biking")
  if (list.length !== 0)
    return list.join(", ");
  else
    return "n/a";
}

function EmptyReviews() {
  return <h3>No reviews yet.</h3>;
}

function ReviewTable(props) {
  // TODO: Fix this manual review CSS
  const divStyle = {
    // Top , right , bottom , left
    margin: "2% 5% 0% 5%",
    width: "90%"

  };

  let reviewTable;
  let noReviews = null;

  if (typeof props.reviewList === "undefined") {
    return null;
  }
  else if (props) {
    const [state, setState] = useState([]);
    useEffect(() => {
      // TODO: Update the local api to live site when we fix everything
      fetch("http://localhost:3001/review/" + props.route + "/" + props.reviewList)
        .then((resp) => resp.json())
        .then(data => setState(data))
    }, []);


    if (state) {
      reviewTable = <ReviewBody reviewList={state} />;
      // Display message if there are currently no reviews
      if (Object.keys(state).length === 0) {
        noReviews = <EmptyReviews />;
      }
    }

    return (
      <div className="table">
        <table style={divStyle}>{reviewTable}</table>
        {noReviews}
      </div>
    );
  }
}

ReviewTable.propTypes = {
  reviewList: PropTypes.object,
};
ReviewBody.propTypes = {
  reviewList: PropTypes.object,
};
export default ReviewTable;
