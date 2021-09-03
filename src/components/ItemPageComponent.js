import React, {Component} from 'react';
import { Container, Row, Col,  } from 'reactstrap';
import {ItemPageCarousel} from './ItemPageCarousel';
import {  Redirect } from 'react-router-dom';

import './ItemPageComponent.css'
class ItemPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
        this.props.fetchItemId(this.props.match.params.itemId);
        
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.auth.isAuthenticated === true &&  prevProps.auth.isAuthenticated === false) {
            this.props.fetchItemId(this.props.match.params.itemId);
        }
      }

    
    render() {
        if (!this.props.auth.isAuthenticated) {
            return( 
            <h1> Please Login first</h1>
            )
        }
        if(this.props === null || this.props.items.items.length === 0){
            return null;
        }

        return(
            <div>
            <Container fluid>
                <Row>
                    <Col xs="12" sm="6" className="mt-5 ms-5">
                        <ItemPageCarousel item={this.props.items.items[0]}
                                         />
                        
                    </Col>
                    
                    <Col>
                        <Container>
                            <Row>
                                <Col xs>
                                    <h1 className="title mt-5">{this.props.items.items[0].ItemName}</h1>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="auto" >
                                    <h2 className="mt-5">Price :</h2>
                                    
                                </Col>
                                <Col>
                                    <h2 id="price" className="text-danger mt-5 content">{`$ ${this.props.items.items[0].ItemPrice}`}</h2>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="auto" >
                                    <h2 className="mt-5">Categorty :</h2>
                                    
                                </Col>
                                <Col xs>
                                    <h2 className="mt-5 content" id="category" >{`${this.props.items.items[0].ItemType1} , ${this.props.items.items[0].ItemType2}`}</h2>
                                </Col>
                            </Row>


                            <Row>
                                <Col xs="auto" >
                                    <h2 className="mt-5">Upload At :</h2>
                                    
                                </Col>
                                <Col>
                                    <h2 className="mt-5 content" id="price" >{` ${this.props.items.items[0].createdAt.slice(0, 10)}`}</h2>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="auto" >
                                    <h2 className="mt-5">Contact Seller :</h2>
                                    
                                </Col>
                                <Col>
                                    <h2 className="mt-5 content" id="price" ><a href={`mailto:${this.props.items.items[0].SellerEmail}`}>{this.props.items.items[0].SellerEmail}</a></h2>
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
                    <Col className="mb-5">
                        <h3 className="mt-5 ms-5 content">{this.props.items.items[0].ItemDescription}</h3>
                    </Col>
                </Row>
                
            </Container>
        </div>
        )
    }
}

export default ItemPage;