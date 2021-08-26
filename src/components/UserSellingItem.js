import React, {Component} from 'react';
import {Media, Container, Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom'; 
class UserSellingItem extends Component {
    constructor(props){
        super(props);

        this.state ={
            refresh:false
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem =() => {
        this.props.deleteItem(this.props.item._id);
        
        //refresh the page after deleting item
        window.location.reload(false);


    }

    render() {
        return(
            
                <Row className="mt-5" >
                    <Col xs={{size:1}} className="bg-light">
                        <Link to={`/item/${this.props.item._id}`} style={{ color:'inherit', textDecoration: 'none' }}>
                            <img src={this.props.item.Images[0]} width="100" height="100" ></img>
                        </Link>
                    </Col>
                    <Col xs={{size:7}} className="bg-light">
                        <Link to={`/item/${this.props.item._id}`} style={{ color:'inherit', textDecoration: 'none' }}>
                            <Media>
                                <Media body>
                                    <Media heading>
                                        {this.props.item.ItemName}
                                    </Media>
                                    {this.props.item.ItemDescription}
                                </Media>
                            </Media>
                        </Link>
                    </Col>
                    <Col className="ms-4 mt-4">
                        <Button color="danger" onClick={this.deleteItem}>Delete</Button>
                    </Col>
                </Row>

         
        )
    }
}

export default UserSellingItem;