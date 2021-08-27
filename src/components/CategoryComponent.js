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
                    <Link to='/items/all'><ListGroupItem tag="a" id="all">ALL</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/items/clothes'><ListGroupItem tag="a" id="clothes" >CLOTHES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}> 
                        <Link to='/items/shoes'><ListGroupItem tag="a" id="shoes" >SHOES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/items/eletronics'><ListGroupItem tag="a" id="eletronics" >ELETRONICS</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/items/books'><ListGroupItem tag="a" id="books" >BOOKS</ListGroupItem></Link>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={{offset:1, size:2 }}>
                        <Link to='/items/furnitures'><ListGroupItem tag="a" id="furnitures" href="#">FURNITURES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/items/stationaries'><ListGroupItem tag="a" id="stationaries" href="#">STATIONARIES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}> 
                        <Link to='/items/collectibles'><ListGroupItem tag="a" id="collectibles" href="#">COLLECTIBLES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/items/services'><ListGroupItem tag="a" id="services" href="#">SERVICES</ListGroupItem></Link>
                    </Col>
                    <Col xs={{ size:2 }}>
                        <Link to='/items/others'><ListGroupItem tag="a" id="others" href="#">OTHERS</ListGroupItem></Link>
                    </Col>
                </Row>
            </Container>
            </ListGroup>
        )
    }

}

export default Category;