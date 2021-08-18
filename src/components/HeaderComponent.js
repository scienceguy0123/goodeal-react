import React, {Component} from 'react';
import './HeaderComponent.css';
import {Navbar, NavbarBrand, Button, Container, Row, Col} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div>
                <Navbar color="dark" expand classname="">
                    <NavbarBrand className="ms-5" href="/">
                        <img src="images/goodeal-logo.png"  width="150" alt="rcf"/>
                    </NavbarBrand>
                    <Button color="secondary" className="ms-auto me-5">Login</Button>
                    <Button color="secondary"className="me-5">Register</Button>
                    
                </Navbar>
            </div>
        )
    }
}

export default Header;