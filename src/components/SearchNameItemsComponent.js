import React, {Component} from 'react';
import RenderCard from './RenderCardComponent';
import {Container, Row, Col} from 'reactstrap';

class SearchNameItems extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNameItems(this.props.match.params.keyword);
    }
    

    

    render() {
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