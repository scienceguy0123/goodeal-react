import React, {Component} from 'react';
import RenderCard from './RenderCardComponent';
import {Container, Row, Col} from 'reactstrap';
class CategoryItems extends Component {
    constructor(props) {
        super(props);
    }

    
    componentDidMount() {
        
        this.props.fetchCategoryItem(this.props.match.params.category);
        
    }
    

    

    render() {
        return(
            <Container>
                <Row>
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

export default CategoryItems;