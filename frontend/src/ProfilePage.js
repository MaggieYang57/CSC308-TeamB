import React from "react";
import AdminUserReviewTable from "./components/AdminUserReviewTable";
import { Container, Row, Col } from "react-bootstrap";
import { HikeCardList } from "./components/HikeCardList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ProfilePage.css";

require('dotenv').config()
const backendHostURL = process.env.REACT_APP_BACKEND_HOST_URL

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hikeCard: [],
      data:[]
    };
  }

  componentDidMount() {
    fetch(`${backendHostURL}/login/${localStorage.getItem("_id")}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data[0] });
        this.getHikeCards()
      });
  }

  getHikeCards() 
  {
    for (let i =0; i < this.state.data.saved_trails.length; i++)
    {
      const savedTrail = this.state.data.saved_trails[i]
    
      fetch(`${backendHostURL}/hike/${savedTrail}`, {
      }).then((res) => res.json())
      .then((data) => {
        const added = this.state.hikeCard.concat(data[0])
        this.setState({hikeCard: added})
      });
    }
  }

  render() {
    return (
      <div>
        <h1 className="header">
          Hello, {this.state.data.first_name} {this.state.data.last_name}
        </h1>
        <div className="saved-trails">
          <h2 className="saved-title">
            <hr />
            Saved Trails
            <hr />
          </h2>
          <React.Fragment>
            <Container>
              <Col>
              {(this.state.hikeCard || []).map((hike) => (
                  <Row className="mb-5" key={hike._id} style={{ marginTop: "3.2vw" }}>
                    <HikeCardList hike={hike} />
                  </Row>
                ))}
              </Col>
            </Container>
          </React.Fragment>
        </div>
        <div className="reviews">
          <h2 className="reviews-title">
            <hr />
            Reviews
            <hr />
          </h2>
          <AdminUserReviewTable reviewList={this.state.data.user_email} route={"user"} />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
