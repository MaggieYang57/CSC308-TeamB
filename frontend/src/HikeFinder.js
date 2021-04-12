import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import SearchBar from "./components/SearchBar";

import { Container, Row, Col } from 'react-bootstrap';
import { HikeCardList } from './components/HikeCardList'
import { SortBy } from './components/SortBy'



const averageRatings = (ratings) => {
   let sum = 0
   for (const i in ratings)
      sum += +(ratings[i])
   return (sum / ratings.length).toFixed(1)
}

function HikeFinder(props) {
    return (
      <div>
      <Container style = {{marginTop: '5vw'}}>
        <b class="text text-center " style={{fontSize: 50, color: "#2C6674"}}>Hike Finder</b>
        <p class="text text-center " style={{fontSize: 30, color: "#59BCA6"}}>Find one that's just right for you!</p>
      </Container>
      <Container style = {{marginTop: '2vw'}}>
        <Row>
          <form class="form-inline " style = {{marginLeft: '0vw'}} >
          <a style={{padding: '1vw'}} > <SearchBar/> </a>
          <a style={{marginLeft: '1vw'}} > Sort By: </a>
          <a style={{marginLeft: '.3vw', marginTop: ".5vw"}} > <SortBy /> </a>
          <a style={{marginLeft: '2vw'}} > Filters: </a>
          </form>
        </Row>
        <hr  style={{
            color: '#BDBDBDBD',
            height: 3,
        }}/>
      </Container>

      <Container >
        <Col>
          {props.hikeList.map(hike => (
            <Row className="mb-5" key={hike._id} style={{marginTop: '3.2vw'}}>
              <HikeCardList hike={hike} />
            </Row>
          ))}
        </Col>
      </Container>
      </div>
    );

}

export default HikeFinder;
