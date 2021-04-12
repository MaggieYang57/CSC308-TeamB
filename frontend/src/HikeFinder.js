import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

import { Container, Row, Col } from 'react-bootstrap';
import { HikeCardList } from './components/HikeCardList'

const averageRatings = (ratings) => {
   let sum = 0
   for (const i in ratings)
      sum += +(ratings[i])
   return (sum / ratings.length).toFixed(1)
}

function HikeFinder(props) {

   return (
      <Container >
         <b className="text text-center " style={{ fontSize: 50, color: "#2C6674" }}>Hike Finder</b>
         <p className="text text-center " style={{ fontSize: 30, color: "#59BCA6" }}>Find one that's just right for you!</p>

         <hr style={{
            color: '#BDBDBDBD',
            height: 3,


         }} />

         <Col>
            {props.hikeList.map(hike => (
               <Row className="mb-5" key={hike._id} style={{ margin: 20 }}>
                  <HikeCardList hike={hike} />
               </Row>
            ))}
         </Col>
      </Container>
   );
}

export default HikeFinder;
