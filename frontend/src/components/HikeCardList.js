import React from 'react';
import { Card, Badge, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Ratings } from './Ratings'

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export function HikeCardList({ hike, setOrdered}) {
	return (
		<Card style={{ width: '45rem', height: '13rem', margin: "auto", border: "none"}}>
		  <Row className='no-gutters'>
			  <Col md={5} lg={3}  >
			  	<Card.Img variant="top" src={hike.imagesrc} style={{height: '10rem', width: '15rem', marginTop: '1rem'}}fluid />
			  </Col>
			  <Col>
				  <Card.Body style={{marginLeft: '4rem', marginTop: '1rem'}}>
				  	<Ratings rating = {round(hike.rating, 1)} />
				    <Card.Title style={{marginTop: '1vw'}}>
							<Link to={"/hike/" + hike._id} >
							<p class=" h5 card-text text-left text-primary font-weight-bold" >{hike.title} </p>
							</Link>
				    </Card.Title>
				    <Card.Text>
				      <p class="card-text text-left" style={{fontWeight:'bold'}}>{hike.location}</p>
				    </Card.Text>

				  </Card.Body>
			  </Col>
		  </Row>
		  <Row>
		  	<Card.Text style={{marginLeft: '1rem', marginTop: '.7rem'}} >
		      <p class="card-text text-left">{hike.description.substring(0,170) + "..."}</p>
		    </Card.Text>
		  </Row>
		</Card>

   )
}
