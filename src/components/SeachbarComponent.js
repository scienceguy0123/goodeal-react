import React, {Component} from 'react';
import {Container, Form, Button, Input, Col, Row} from 'reactstrap';

class SearchBar extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
    
            <Form className="mt-5 mb-5">
                <Container fluid>
                    <Row >
                        <Col xs={{ offset:1, size: 9}}>
                            <Input type="SearchItem" name="SearchItem" id="SeachItem" placeholder="What are you looking for..." bsSize="lg" /> 
                        </Col>
                        <Col xs={{size: 2}}>
                            <Button color="success" size="lg">Search</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
               
         

        )
    }
}

export default SearchBar;