import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Container, Row, Col} from 'reactstrap';
import './CategoryComponent.css';
import { Link } from 'react-router-dom'; 

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
                    <Link to='/all'><ListGroupItem tag="a" id="all">ALL</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/clothes'><ListGroupItem tag="a" id="clothes" >CLOTHES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}> 
                        <Link to='/shoes'><ListGroupItem tag="a" id="shoes" >SHOES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/eletronics'><ListGroupItem tag="a" id="eletronics" >ELETRONICS</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/books'><ListGroupItem tag="a" id="books" >BOOKS2</ListGroupItem></Link>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={{offset:1, size:2 }}>
                        <Link to='/furnitures'><ListGroupItem tag="a" id="furnitures" href="#">FURNITURES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/stationaries'><ListGroupItem tag="a" id="stationaries" href="#">STATIONARIES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}> 
                        <Link to='/collectibles'><ListGroupItem tag="a" id="collectibles" href="#">COLLECTIBLES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/services'><ListGroupItem tag="a" id="services" href="#">SERVICES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/others'><ListGroupItem tag="a" id="others" href="#">OTHERS</ListGroupItem></Link>
                    </Col>
                </Row>
            </Container>
            </ListGroup>
        )
    }

}

export default Category;