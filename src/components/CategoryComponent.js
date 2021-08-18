import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Container, Row, Col} from 'reactstrap';
import './CategoryComponent.css'

class Category extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ListGroup horizontal className="mb-5">
            <Container fluid>
                <Row >
                    <Col xs={{offset:1, size:2 }}>
                        <ListGroupItem tag="a" id="all" href="#">ALL</ListGroupItem>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <ListGroupItem tag="a" id="clothes" href="#">CLOTHES</ListGroupItem>
                    </Col>
                    <Col xs={{ size:2 }}> 
                        <ListGroupItem tag="a" id="shoes" href="#">SHOES</ListGroupItem>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <ListGroupItem tag="a" id="eletronics" href="#">ELETRONICS</ListGroupItem>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <ListGroupItem tag="a" id="books" href="#">Books</ListGroupItem>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={{offset:1, size:2 }}>
                        <ListGroupItem tag="a" id="furnitures" href="#">FURNITURES</ListGroupItem>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <ListGroupItem tag="a" id="stationaries" href="#">STATIONARIES</ListGroupItem>
                    </Col>
                    <Col xs={{ size:2 }}> 
                        <ListGroupItem tag="a" id="collectibles" href="#">COLLECTIBLES</ListGroupItem>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <ListGroupItem tag="a" id="services" href="#">SERVICES</ListGroupItem>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <ListGroupItem tag="a" id="others" href="#">OTHERS</ListGroupItem>
                    </Col>
                </Row>
            </Container>
            </ListGroup>
        )
    }

}

export default Category;