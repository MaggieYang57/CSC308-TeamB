import React from 'react';
import { Card, Badge, Button, Row, Col } from 'react-bootstrap';

export function HikeCardList({ hike, setOrdered }) {
   return (
      <Card style={{ width: '50rem', height: '13rem', margin: "auto", border: "none" }}
      >
         <Row className='no-gutters'>
            <Col md={5} lg={3}  >
               <Card.Img variant="top" src="/images/default.jpg" fluid />
            </Col>
            <Col>
               <Card.Body>
                  <Card.Title>
                     <p className="card-text text-left">{hike.title}</p>
                  </Card.Title>
                  <Card.Text>
                     <p className="card-text text-left">{hike.location}</p>
                  </Card.Text>

                  <Card.Text>
                     <p className="card-text text-left">{hike.description.substring(0, 150) + "..."}</p>
                  </Card.Text>

               </Card.Body>
            </Col>
         </Row>
      </Card>

   )
}