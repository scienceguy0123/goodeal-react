import React, {Component} from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import {ItemPageCarousel} from './ItemPageCarousel';
import './ItemPageComponent.css'
class ItemPage extends Component {
    constructor(props) {
        super(props);
    }
1
    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs="12" sm="auto" className="mt-5 ms-5">
                        <ItemPageCarousel item={this.props.item}
                                         />
                        
                    </Col>
                    
                    <Col>
                        <Container>
                            <Row>
                                <Col xs>
                                    <h1 className="title mt-5">{this.props.item.ItemName}</h1>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="auto" >
                                    <h2 className="mt-5">Price :</h2>
                                    
                                </Col>
                                <Col>
                                    <h2 id="price" className="text-danger mt-5 content">{`$ ${this.props.item.ItemPrice}`}</h2>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="auto" >
                                    <h2 className="mt-5">Categorty :</h2>
                                    
                                </Col>
                                <Col xs>
                                    <h2 className="mt-5 content" id="category" >{`${this.props.item.ItemType1} , ${this.props.item.ItemType2}`}</h2>
                                </Col>
                            </Row>


                            <Row>
                                <Col xs="auto" >
                                    <h2 className="mt-5">Upload At :</h2>
                                    
                                </Col>
                                <Col>
                                    <h2 className="mt-5 content" id="price" >{` ${this.props.item.createdAt.slice(0, 10)}`}</h2>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="auto" >
                                    <h2 className="mt-5">Contact Seller :</h2>
                                    
                                </Col>
                                <Col>
                                    <h2 className="mt-5 content" id="price" ><a href={`mailto:${this.props.item.SellerEmail}`}>{this.props.item.SellerEmail}</a></h2>
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                </Row>

                <Row>
                    <Col xs>
                        <h3 className="mt-5 ms-5">Description : </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="mt-5 ms-5 content">{this.props.item.ItemDescription}</h3>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default ItemPage;