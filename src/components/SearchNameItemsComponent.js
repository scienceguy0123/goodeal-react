import React, {Component} from 'react';
import RenderCard from './RenderCardComponent';
import {Container, Row, Col} from 'reactstrap';
import { Redirect } from 'react-router-dom';


class SearchNameItems extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNameItems(this.props.match.params.keyword);
    }
    

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.auth.isAuthenticated === true &&  prevProps.auth.isAuthenticated === false) {
            this.props.fetchNameItems(this.props.match.params.keyword);
        }
      }

    render() {
        if (!this.props.auth.isAuthenticated) {
            return(
                <h1>Please login first</h1>
            )
        }
        return(
            <Container>
                <Row className="mt-5">
                    {this.props.items.items.map((item) => (
                        <Col xs={{size:3}}>
                            <RenderCard item={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default SearchNameItems;