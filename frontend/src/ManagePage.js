import React from "react";
import AdminReviewTable from "./components/AdminReviewTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ProfilePage.css";

require('dotenv').config()
const backendHostURL = process.env.REACT_APP_BACKEND_HOST_URL

class ManagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`${backendHostURL}/login/${localStorage.getItem("_id")}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ ...data[0] });
      });
  }

  render() {
    return (
      <div>
        <h1 className="header">
          Hello, Admin!
        </h1>
        <div className="reviews" style={{marginTop: '-50px'}}>
          <h2 className="reviews-title">
            <hr />
            List of All Reviews
            <hr />
          </h2>
          <AdminReviewTable reviewList={this.state.user_email} route={""} />
        </div>
      </div>
    );
  }
}

export default ManagePage;
