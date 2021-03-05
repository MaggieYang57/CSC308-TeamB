import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

import { Container, Row, Col } from 'react-bootstrap';
import { HikeCardList } from './components/HikeCardList'
import hikes from './testData';

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
      <Container >
        <Col>
          {hikes.map(hike => (
            <Row className="mb-5" key={'${hike.id}'} style={{margin: 20}}>
              <HikeCardList hike={hike} />
            </Row>
          ))}
        </Col>
      </Container>
    );
  }
}
export default AllHikes;
