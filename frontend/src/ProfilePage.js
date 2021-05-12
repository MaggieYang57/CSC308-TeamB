import React from "react";
import ReviewTable from "./components/ReviewTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ProfilePage.css";

require('dotenv').config()
const backendHostURL = process.env.REACT_APP_BACKEND_HOST_URL

class ProfilePage extends React.Component {
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
          Hello, {this.state.first_name} {this.state.last_name}
        </h1>
        <div className="saved-trails">
          <h2 className="saved-title">
            <hr />
            Saved Trails
            <hr />
          </h2>
          <h3>{(this.state.saved_trails || []).map(item => (
            <li key={item} style={{ marginBottom: "10px" }}>{item}</li>
          ))}</h3>
        </div>
        <div className="reviews">
          <h2 className="reviews-title">
            <hr />
            Reviews
            <hr />
          </h2>
          <ReviewTable reviewList={this.state.user_email} route={"user"} />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
