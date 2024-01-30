import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
  return (
    <Container style ={{ marginTop: "50px" }}>
    <h1>Qui sommes nous ?</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum laborum minima illum fugit incidunt quod, ipsam ab doloribus impedit libero natus, earum repellat mollitia odio consequuntur eveniet fugiat consectetur.</p>
    <h1>Notre spécialité</h1>
    <Row>
        <Col md={6}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora deleniti, explicabo sunt maiores, harum voluptate repudiandae necessitatibus minus sed aliquid eveniet distinctio vel itaque animi. Fugiat consequuntur beatae voluptates?</p>
        </Col>
        <Col md={6}>
            <p>200</p>
        </Col>
    </Row>
    <Row>
        <h1> Le chef</h1>
        <Col md={3}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at labore, consequatur voluptate, tempore dolorem perspiciatis repudiandae velit odit voluptatibus fugiat, necessitatibus facilis deserunt et aperiam animi consequuntur fuga ipsam!</p>
        </Col>
        <Col md={3}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at labore, consequatur voluptate, tempore dolorem perspiciatis repudiandae velit odit voluptatibus fugiat, necessitatibus facilis deserunt et aperiam animi consequuntur fuga ipsam!</p>
        </Col>
        <Col md={3}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at labore, consequatur voluptate, tempore dolorem perspiciatis repudiandae velit odit voluptatibus fugiat, necessitatibus facilis deserunt et aperiam animi consequuntur fuga ipsam!</p>
        </Col>

    </Row>
</Container>
  )
}

export default About