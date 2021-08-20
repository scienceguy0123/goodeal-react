import React, {Component} from 'react';
import './HeaderComponent.css';
import {Navbar, NavbarBrand, NavbarText,NavItem, Button, Modal, ModalHeader, ModalBody,
Form, FormGroup, Label, FormText, Input, FormFeedback, Dropdown, DropdownToggle, 
DropdownMenu, DropdownItem, Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom'; 


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginModalOpen:false,
            isRegisterModalOpen:false,
            loginEmail:'',
            loginPassword:'',
            registerEmail: '',
            registerPassword: '',
            validate:{
                regEmailState: '',
                regPasswordState: '',
                doubleCheckPasswordState:''
            },
            isDropped:false
            
        }
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.doubleCheckPassword = this.doubleCheckPassword.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleLogout =this.handleLogout.bind(this);
    }
    
    toggleLoginModal() {
        this.setState({
            isLoginModalOpen:!this.state.isLoginModalOpen
        });
    }

    toggleRegisterModal() {
        this.setState({
            isRegisterModalOpen:!this.state.isRegisterModalOpen
        });
    }

    toggleDropdown() {
        this.setState({
            isDropped:!this.state.isDropped
        });
    }

    handleLogin(event) {
        event.preventDefault();
        this.toggleLoginModal();
        this.props.loginUser({username: this.state.loginEmail, password: this.state.loginPassword});
        alert(JSON.stringify(this.state));
        
    }

    handleRegister(event) {
        event.preventDefault();
        this.toggleRegisterModal();
        this.props.registerUser({username: this.state.registerEmail, password: this.state.registerPassword});
        // alert(JSON.stringify(this.state));
    }

    handleLogout() {
        this.props.logoutUser();
    }
    
    
    handleChange = (event) => {
        const {target} =event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;
        this.setState({
            [name]: value
        })
    }


    validateEmail(e) {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const {validate} =this.state;
        if (emailRegex.test(e.target.value)) {
            validate.regEmailState = "passes";
        }else{
            validate.regEmailState = "not passed";
        }
        this.setState({validate});
    }

    validatePassword(e) {
        const {validate} = this.state;
        if(e.target.value.length <12 && e.target.value.length > 5) {
            validate.regPasswordState = 'passed';
        } else{
            validate.regPasswordState = 'not passed';
        }

        this.setState({validate});
    }

    doubleCheckPassword (e) {
        
        const {validate} = this.state;
        if(e.target.value === this.state.registerPassword) {
            validate.doubleCheckPasswordState = "same";
        }else{
            validate.doubleCheckPasswordState = "not same";
        }
    }






    render() {
        return (
            <div>
                <Navbar color="dark" expand classname="">
                    <NavbarBrand className="ms-5" href="/">
                        <Link to='/home'><img src="images/goodeal-logo.png"  width="150" alt="rcf"/></Link>
                    </NavbarBrand>
                    { !this.props.auth.isAuthenticated ?
                    <>
                        <Button color="secondary" className="ms-auto me-5" onClick={this.toggleLoginModal}>Login</Button>
                        <Button color="secondary"className="me-5" onClick={this.toggleRegisterModal}>Register</Button>
                    </>
                    :
                    <>
                        
                        <NavbarText className='text-light ms-auto me-5'>{`Hi, ${this.props.auth.user.username}`}</NavbarText>
                        
                        <Dropdown isOpen={this.state.isDropped} toggle={this.toggleDropdown} className='me-5 pe-5'>
                            <DropdownToggle caret>Menu</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Sell Something</DropdownItem>
                                <DropdownItem>I'm Selling...</DropdownItem>
                                <DropdownItem onClick={(e)=> this.handleLogout()}>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </>
                    }
                </Navbar>

                <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal} >
                    <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => this.handleLogin(e)}>
                            <FormGroup>
                                <Label for="loginEmail" className="mb-2">Email</Label>
                                <Input 
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                                type="email" 
                                name="loginEmail" 
                                id="loginEmail" 
                                className="mb-2"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="loginPassword" className="mb-2">Password</Label>
                                <Input 
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                                type="password" 
                                name="loginPassword" 
                                id="loginPassword" className="mb-2"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Button 
                                disabled={this.state.loginEmail === '' ||
                                          this.state.loginPassword === ''}
                                type="submit" 
                                value="submit" 
                                color="primary">Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isRegisterModalOpen} toggle={this.toggleRegisterModal} >
                    <ModalHeader toggle={this.toggleRegisterModal}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => this.handleRegister(e)}>
                            <FormGroup>
                                <Label for="registerEmail" className="mb-2">Email</Label>
                                <Input 
                                onBlur={(e) => {
                                    this.handleChange(e);
                                    this.validateEmail(e);
                                }}
                                type="email" 
                                name="registerEmail" 
                                id="registerEmail"
                                valid={this.state.validate.regEmailState === "passes"}
                                invalid={this.state.validate.regEmailState === "not passed"} 
                                className="mb-2"></Input>
                                <FormFeedback>Email Invalid</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="registerPassword" className="mb-2">Password</Label>
                                <Input 
                                onBlur={(e) => {
                                    this.handleChange(e);
                                    this.validatePassword(e);
                                }}
                                type="password" 
                                name="registerPassword" 
                                id="registerPassword" 
                                valid={this.state.validate.regPasswordState === 'passed'}
                                invalid={this.state.validate.regPasswordState === 'not passed'}
                                className="mb-2"></Input>
                                <FormText>Password needs to have at least 6 characters and no more than 12 characters</FormText>
                                <FormFeedback>Password needs to be longer than 6 characters or no more than 12 characters</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="registerPassword2" className="mb-2">Double Check Password</Label>
                                <Input 
                                onChange={(e) => {
                                    this.handleChange(e);
                                    this.doubleCheckPassword(e);
                                }}
                                type="password" 
                                name="registerPassword2" 
                                id="registerPassword2"
                                valid={this.state.validate.doubleCheckPasswordState === 'same'}
                                invalid={this.state.validate.doubleCheckPasswordState === 'not same'} 
                                className="mb-2"></Input>
                                <FormFeedback>Password not identical</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Button 
                                disabled = {this.state.validate.doubleCheckPasswordState === "not same" ||
                                            this.state.validate.doubleCheckPasswordState === "" ||
                                            this.state.validate.regEmailState === "not passed" ||
                                            this.state.validate.regEmailState === "" ||
                                            this.state.validate.regPasswordState === 'not passed' ||
                                            this.state.validate.regPasswordState === ''}
                                type="submit" 
                                value="submit" 
                                color="primary">Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Header;