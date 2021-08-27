import React, {Component} from 'react';
import RenderCard from './RenderCardComponent';
import {Container, Row, Col, Alert} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class CategoryItems extends Component {
    constructor(props) {
        super(props);
    }

    
    componentDidMount() {
        
        this.props.fetchCategoryItem(this.props.match.params.category);
        
    }
    
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.auth.isAuthenticated === true &&  prevProps.auth.isAuthenticated === false) {
            this.props.fetchCategoryItem(this.props.match.params.category);        }
      }
    

    render() {
        if (!this.props.auth.isAuthenticated) {
            
            return (
                <h1> Please Login first</h1>
            )}

        return(
            <Container>
                <Row >
                    {this.props.items.items.map((item) => (
                        <Col xs={{size:3}} className="mt-5">
                            <RenderCard item={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default CategoryItems;