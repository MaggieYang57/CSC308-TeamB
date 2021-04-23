import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    fetch("http://localhost:3001/login/" +  localStorage.getItem("_id"))
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ ...data[0] });
      });
  }
  
  render()
  {
    return (
      <div>
        <h1>Hello, {this.state.first_name} {this.state.last_name}</h1>
        <h2>Saved hikes: <br />
          {this.state.saved_trails}</h2>
      </div>
    );
  }
  
}

export default ProfilePage;
