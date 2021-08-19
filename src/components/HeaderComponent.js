import React, {Component} from 'react';
import './HeaderComponent.css';
import {Navbar, NavbarBrand, Button, Modal, ModalHeader, ModalBody,
Form, FormGroup, Label, FormText, Input, FormFeedback} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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
            // registerPassword2: '',
            validate:{
                regEmailState: '',
                regPasswordState: '',
                doubleCheckPasswordState:''
            }
            
        }
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.doubleCheckPassword = this.doubleCheckPassword.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.submitRegister = this.submitRegister.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
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
        //this.state.registerPassword2
        const {validate} = this.state;
        if(e.target.value === this.state.registerPassword) {
            validate.doubleCheckPasswordState = "same";
        }else{
            validate.doubleCheckPasswordState = "not same";
        }
    }

    submitRegister(e) {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }

    submitLogin(e) {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <Navbar color="dark" expand classname="">
                    <NavbarBrand className="ms-5" href="/">
                        <img src="images/goodeal-logo.png"  width="150" alt="rcf"/>
                    </NavbarBrand>
                    <Button color="secondary" className="ms-auto me-5" onClick={this.toggleLoginModal}>Login</Button>
                    <Button color="secondary"className="me-5" onClick={this.toggleRegisterModal}>Register</Button>
                </Navbar>

                <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal} >
                    <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => this.submitRegister(e)}>
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
                        <Form onSubmit={(e) => this.submitRegister(e)}>
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