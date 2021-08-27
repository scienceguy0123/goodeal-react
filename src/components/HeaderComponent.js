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
        // alert(JSON.stringify(this.state));

        
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
            validate.regEmailState = "passed";
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
                        <Link to='/home'><img width="150" alt="rcf" src="data:image/png;base64,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"  /></Link>
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
                                <DropdownItem><Link to='/user/sellsomething'>Sell Something</Link></DropdownItem>
                                <DropdownItem><Link to='/user/selling'>I'm Selling...</Link></DropdownItem>
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
                                valid={this.state.validate.regEmailState === "passed"}
                                invalid={this.state.validate.regEmailState === "not passed"} 
                                className="mb-2"></Input>
                                <FormFeedback>Email Invalid</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="registerPassword" className="mb-2">Password</Label>
                                <Input 
                                onBlur={(e) => {
                                    console.log(e);
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