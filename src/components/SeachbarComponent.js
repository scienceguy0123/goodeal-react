import React, {Component} from 'react';
import {Container, Form, Button, Input, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom'; 

class SearchBar extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            searchbarContent: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleChange = (event) => {
        const {target} =event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;
        this.setState({
            [name]: value
        })
    }

    onSearch = () => {
        this.props.fetchNameItems(this.state.searchbarContent)
    }


    render(){
        return(
    
            <Form className="mt-5 mb-5">
                <Container fluid>
                    <Row >
                        <Col xs={{ offset:1, size: 9}}>
                            <Input 
                            onChange={(e) => {
                                this.handleChange(e);
                            }}
                            type="text" name="searchbarContent" 
                            id="searchbarContent" placeholder="What are you looking for..." bsSize="lg" /> 
                        </Col>
                        <Col xs={{size: 2}}>
                            <Link to={`/items/name/${this.state.searchbarContent}`} style={{ color:'inherit', textDecoration: 'none' }}>
                                <Button
                                
                                color="success" size="lg">Search</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Form>
               
         

        )
    }
}

export default SearchBar;