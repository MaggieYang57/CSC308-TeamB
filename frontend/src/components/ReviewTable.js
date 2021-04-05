import React from 'react'

function ReviewBody(props) {
   const divStyle = {
      margin: "10px 50px 0px 10%",
      width: '1300px'
   };
   const rows = props.reviewList.map((row, index) => {
      return (
         <div style={divStyle}>
            <tr key={index}>
               <td style={{ width: '150px' }}>Review by: <br></br>{row.user_id}</td>
               <td style={{ width: '150px' }}>Date: <br></br>{row.date}</td>
               <td>{row.reviewBody}</td>
            </tr>
         </div>
      );
   })
   return (

      <tbody>
         {rows}
      </tbody>
   );
}

function ReviewTable(props) {
   const hasReview = props.reviewList;
   let reviewTable;
   if (hasReview) {
      reviewTable = <ReviewBody reviewList={props.reviewList} />;
   } else {
      reviewTable = null;
   }
   return (
      <div className="table">
         <table>
            {reviewTable}
         </table>
      </div>
   );
}

export default ReviewTable;
