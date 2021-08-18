import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';


class LatestAdditions extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col xs={{offset:1}}><p><strong>LATEST ADDITIONS</strong></p></Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        )
    }
}

export default LatestAdditions;
