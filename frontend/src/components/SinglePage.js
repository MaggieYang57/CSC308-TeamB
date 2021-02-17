import React from 'react';
import '../css/SinglePage.css';

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('http://localhost:3001/hike/')
      .then(res => res.json())
      .then(data => this.setState({ ...data[0] }));
  }

  render() {
    return (
        <div className="hike">
            <div className= "header">
                <h1>{this.state.title}</h1>
                <h2>- {this.state.location}</h2>
            </div>
            <img src = "https://www.margarita-adventures.com/wp-content/uploads/2017/02/Cerro_San_Luis.jpg" height="300" />
            <div className = "info">
                <div className = "stats">
                    <h2 className = "difficulty">{this.state.difficulty}</h2>
                    <h2 className = "rating">★{this.state.rating}</h2>
                </div>
                <p className="desc">{this.state.description}</p>
                <br></br>
                <p>{this.state.tags}</p>
            </div>
            <div className = "reviews">
                <h2>Reviews</h2>
                <p>{this.state.reviews}</p>
            </div>
        </div>
    );
  }
}
export default SinglePage;