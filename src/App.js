import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Detalle = () => {
  return (
    <>
      <Card>
        <div className='row'>
          
          <div className='col'>
            <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQ58z0te1gtsGhFgrXLpDuh5xpOZ2FFn6TA&usqp=CAU" />
          </div>

          <div className='col'>
            <Card.Body>
              <Card.Title>Drone profesional</Card.Title>
              <Card.Text>
                Conoce el mejor drone porfesional equipado con los mejores materiales y prestaciones.
              </Card.Text>
              <Card.Text className='text-center fs-3 fw-normal' >$ 120.000</Card.Text>
              <Card.Text className='bg-secondary text-white'>SKU 412112340987</Card.Text>
              <Card.Text className='bg-success text-white '>4755 disponibles</Card.Text>
              <div className='text-center d-grid'>
                <Button variant="primary">Comprar</Button>
              </div>
            </Card.Body>
          </div>

        </div>
      </Card>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1>Detalle </h1>
      <Detalle />
    </Container>
  </Container>
);

export default App;

