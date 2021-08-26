import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import UserSellingItem from './UserSellingItem';

class UserSellingPage extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchUserItems(this.props.auth.user.username);     
    }
    render() {
        return(
            <Container>
               
                    {this.props.items.items.map((item) => (
                        
                            <UserSellingItem item={item}
                                            deleteItem={this.props.deleteItem}/>
                       
                    ))}
   
                
            </Container>
        )
    }
}

export default UserSellingPage;