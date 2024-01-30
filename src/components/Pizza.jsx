import React, {useState} from 'react';
import { Col, Row, Modal, Container, Image } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Pizza = (props) => {
    const[varients, setTaille] = useState('small');
    const[quantite, setQuantite] = useState(1);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
  
    <Container>
    <Card style={{ width: '18rem', marginBottom:'2em' }} >
      <Card.Img variant="top" src={props.lapizza.image} onClick={handleShow} />
      <Card.Body>
        <Card.Title>{props.lapizza.name}</Card.Title>
        <Card.Text>
       <Row>
        <Col md={6}>
            <h6>Taille :
                <select name="" id=""
                value={varients}
                onChange={(e) => setTaille(e.target.value)}
                >
                    {props.lapizza.varients.map(varients=>(
                        <option value={varients}>{varients}</option>
                    ))}

                </select>
            </h6>
        </Col>
        <Col md={6}>
        <h6>Quantité : <br/>
            <select name="" id=""
            value={quantite}
            onChange={(e) => setQuantite(e.target.value)}
            >
                {[...Array(10).keys()].map((v,i)=>(
                    <option value={i+1}>{i+1}</option>
                ))}

            </select>
        </h6>
        </Col>
       </Row>
        </Card.Text>
        <Row>
            <Col md={6}>
                Prix : {props.lapizza.prices[0][varients] * quantite} $            
            </Col>
            <Col md={6}>
                  <Button className='bg-warning text-light'>Add</Button>
            </Col>
        </Row>        
      
      </Card.Body>
    </Card>

<Modal size='lg' show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>{props.lapizza.name}</Modal.Title>
</Modal.Header>
<Modal.Body>{props.lapizza.description}
    <Image style={{width: '45rem'}} src={props.lapizza.image}></Image>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>

</Modal.Footer>
</Modal>

</Container>
  )
}

export default Pizza