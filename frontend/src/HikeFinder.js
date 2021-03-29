import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

import { Container, Row, Col } from 'react-bootstrap';
import { HikeCardList } from './components/HikeCardList'
import { SortBy } from './components/SortBy'
import hikes from './trails3';

const averageRatings = (ratings) => {
  let sum = 0
  for (const i in ratings)
    sum += +(ratings[i])
  return (sum / ratings.length).toFixed(1)
}

class AllHikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <Container style = {{marginTop: '5vw'}}>
        <b class="text text-center " style={{fontSize: 50, color: "#2C6674"}}>Hike Finder</b>
        <p class="text text-center " style={{fontSize: 30, color: "#59BCA6"}}>Find one that's just right for you!</p>
      </Container>

      <Container style = {{marginTop: '2vw'}}>
        <Row>
          <Col >Sort By:</Col>
          <Col><SortBy /></Col>
          <Col>Filters:</Col>
        </Row>
        <hr  style={{
            color: '#BDBDBDBD',
            height: 3,
        }}/>
      </Container>

      <Container style = {{marginTop: '5vw'}}>

          <Col>
            {hikes.map(hike => (
              <Row className="mb-5" key={'${hike.id}'} >
                <HikeCardList hike={hike} />
              </Row>
            ))}
          </Col>
      </Container>
      </div>
    );
  }
}
export default AllHikes;
