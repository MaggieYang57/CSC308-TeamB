import React from "react";
import { PropTypes } from 'prop-types';

function ReviewBody(props) {
  const rows = props.reviewList.map((row, index) => {
    return (
      <tr key={index}>
        <td style={{ width: "150px" }}>
          Review by: <br></br>
          {row.user_id}
        </td>
        <td style={{ width: "150px" }}>
          Date: <br></br>
          {row.date}
        </td>
        <td>{row.reviewBody}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

function EmptyReviews(props) {
  return <h3>No reviews yet.</h3>;
}

function ReviewTable(props) {
  const divStyle = {
    margin: " 5px 100px 5px",
    width: "1300px",
  };

  const hasReview = props.reviewList;
  let reviewTable;
  let noReviews;

  if (hasReview) {
    reviewTable = <ReviewBody reviewList={props.reviewList} />;

    // Display message if there are currently no reviews
    if (Object.keys(props.reviewList).length === 0) {
      noReviews = <EmptyReviews />;
    }
  } else {
    reviewTable = null;
  }

  return (
    <div className="table">
      <table style={divStyle}>{reviewTable}</table>
      {noReviews}
    </div>
  );
}

ReviewTable.propTypes = {
  reviewList: PropTypes.object,
};
ReviewBody.propTypes = {
  reviewList: PropTypes.object,
};
export default ReviewTable;
