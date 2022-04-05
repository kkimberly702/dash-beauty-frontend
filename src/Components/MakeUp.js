import React from 'react';
import { useState, useEffect } from 'react'; 
import '../MakeUp.css';
import { Card, ListGroup, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function MakeUp () {


const [makeupList, setMakeupList] = useState([]);




    useEffect(() => {
    fetch('http://localhost:8000/items/')
    .then((response) => response.json())
    .then((data) => setMakeupList(data))
    .catch((error) => console.log(error));
    
        
}, [])

    console.log(makeupList);



    return (
        <div>
            <h2>Results</h2>
            <div className="container" style={{width: '1000px', height: '2rem'}}>
           

            
            {makeupList.map(makeup => (
                <p>
                    <div className="cards-bootstrap">
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={makeup.photo} style={{width: '5rem', margin:'0 auto'}}/>
  <Card.Body>
    <Card.Title>{makeup.name}</Card.Title>
    <Card.Text>
    <ListGroup variant="flush">
    <ListGroup.Item>{makeup.brand}</ListGroup.Item>
    <ListGroup.Item>{makeup.category}</ListGroup.Item>
  </ListGroup>
    <Card.Subtitle className="mb-2 text-muted">Most Recent Review: {makeup.review}</Card.Subtitle>
    <Card.Subtitle className="mb-1 text-muted">Review written on: {makeup.created_or_updated_at}</Card.Subtitle>
    
    </Card.Text>
  </Card.Body>
</Card>


</div>


                </p>
                
                
            ))} 
        
            
            
        </div>
        </div>
    )
};


export default MakeUp;