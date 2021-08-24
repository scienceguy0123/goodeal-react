import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {ItemPageCarousel} from './ItemPageCarousel';

class ItemPage extends Component {
    constructor(props) {
        super(props);
    }
1
    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs={{size:5}}>
                        <ItemPageCarousel item={this.props.item}
                                        />
                        
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default ItemPage;