import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Container style={{marginTop:'50px'}}>
        <Row >
            <Col md={6}>
            <h1>Pizza Delicious</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem reiciendis a nisi illo eius ratione dolor neque aliquam alias, maxime quas fuga? Harum facere deleniti quod ratione quia sit dolore.</p>
            </Col>
        </Row>
        <Table striped bordered hover style={{marginTop:'50px'}} >

      <tbody >
        <tr>
          <td ><FiPhoneCall /></td>
          <td>Téléphone</td>
          <td>03.03.03.03.03</td>
  
        </tr>
        <tr>
          <td><ImMobile /></td>
          <td>Mobile</td>
          <td>06.06.06.06.06</td>

        </tr>
        <tr>
          <td><AiOutlineMail /></td>
          <td >Mail</td>
          <td >Mail@gmail.com</td>
  
        </tr>
      </tbody>
    </Table>
    </Container>

    
 
  )
}

export default Contact