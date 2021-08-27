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

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.auth.isAuthenticated === true &&  prevProps.auth.isAuthenticated === false) {
            this.props.fetchUserItems(this.props.auth.user.username);     
        }
      }

    render() {
        if (!this.props.auth.isAuthenticated) {
            return(
                <h1> Please Login first</h1>
            )
        }
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