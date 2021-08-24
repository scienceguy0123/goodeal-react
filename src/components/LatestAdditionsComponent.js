import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import RenderCard from './RenderCardComponent';

class LatestAdditions extends Component {
    constructor(props){
        super(props);
    

    }

    
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col><p><strong>LATEST ADDITIONS</strong></p></Col>
                </Row>
                
                <Row>
                    {this.props.items.items.slice(0,4).map((item) => (
                        <Col xs={{size:3}}>
                            <RenderCard item={item}/>
                        </Col>
                    ))}
                </Row>
                
            </Container>
        )
    }
}

export default LatestAdditions;
