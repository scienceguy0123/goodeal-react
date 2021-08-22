import React, {Component} from 'react';
import { Button, Form, FormGroup, FormFeedback, Label, Input, FormText,
Container, Row, Col } from 'reactstrap';
import './SellSomethingComponent.css'

class SellSomething extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ItemName:'',
            ItemType1:'...',
            ItemType2:'',
            ItemDescription:'',
            SellerEmail:this.props.auth.user.username,
            validate: {
                ItemNameState:'',
                ItemType1State:'',
                ItemDescriptionState:''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validateType1 = this.validateType1.bind(this);
        this.validateDescription = this.validateDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        
    handleChange = (event) => {
        const {target} =event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;
        this.setState({
            [name]: value
        })
    }

    validateName(e) {
        const {validate} = this.state;
        if (e.target.value.length < 10) {
            validate.ItemNameState = "not passed";
        }else{
            validate.ItemNameState = "passed";
        }
        this.setState({validate});
    }

    validateType1(e) {
        const {validate} = this.state;
        if (e.target.value === '...') {
            validate.ItemType1State = "not passed";
        }else{
            validate.ItemType1State = "passed";
        }
        this.setState({validate});
    }

    validateDescription(e) {
        const {validate} = this.state;
        if (e.target.value.length < 30) {
            validate.ItemDescriptionState = "not passed";
        }else{
            validate.ItemDescriptionState = "passed";
        }
        this.setState({validate});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.postItem({ItemName:this.state.ItemName,
                            ItemType1:this.state.ItemType1,
                            ItemType2:this.state.ItemType2,
                            ItemDescription:this.state.ItemDescription,
                            SellerEmail:this.state.SellerEmail})
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                <p className="formHeader">I Want to Sell...</p>
                    </Col>
                </Row>

                <Row>
                    <Form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <FormGroup row> 
                        <Label for="ItemName" xs={{offset: 1, size: 2}} size="lg" className="mt-3">Item Name</Label>
                        <Col xs={8}>   
                            <Input 
                            onChange={(e) => {
                                this.handleChange(e);
                                this.validateName(e);
                            }}
                            type="text" name="ItemName" id="ItemName" 
                            placeholder="..." bsSize="lg" className="mt-3" 
                            required
                            valid={this.state.validate.ItemNameState === "passed"}
                            invalid={this.state.validate.ItemNameState === "not passed"}
                            />
                            
                            <FormFeedback>Name needs to be longer than 10 characters</FormFeedback>
                            <FormText>Required</FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="ItemType1" xs={{offset: 1, size: 2}} size="lg" className="mt-5">Item Type</Label>
                        <Col xs={8}>
                        <Input 
                        onChange={(e) => {
                            this.handleChange(e);
                            this.validateType1(e);
                        }}
                        type="select" name="ItemType1" id="ItemType1" 
                        bsSize="lg" className="mt-5" required
                        valid={this.state.validate.ItemType1State === "passed"}
                        invalid={this.state.validate.ItemType1State === "not passed"}
                        >
                            <option>...</option>
                            <option>Cloth</option>
                            <option>Shoes</option>
                            <option>Eletronic</option>
                            <option>Book</option>
                            <option>Furniture</option>
                            <option>Stationary</option>
                            <option>Service</option>
                            <option>Other</option>
                        </Input>
                        <FormFeedback>Needs to at least select one type</FormFeedback>
                        <FormText>Required</FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="ItemType2" xs={{offset: 1, size: 2}} size="lg" className="mt-5">Item Type 2</Label>
                        <Col xs={8}>
                        <Input 
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                        type="select" name="ItemType2" id="ItemType2" 
                        bsSize="lg" className="mt-5">
                            <option>...</option>
                            <option>Cloth</option>
                            <option>Shoes</option>
                            <option>Eletronic</option>
                            <option>Book</option>
                            <option>Furniture</option>
                            <option>Stationary</option>
                            <option>Service</option>
                            <option>Other</option>
                        </Input>
                        
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="ItemDescription" size="lg" xs={{offset: 1, size: 2}} className="mt-5">Item Description</Label>
                        <Col xs={8}>
                            <Input 
                            onChange={(e) => {
                                this.handleChange(e);
                                this.validateDescription(e);
                            }}
                            type="textarea" name="ItemDescription" 
                            id="ItemDescription" bsSize="lg"  
                            rows={6} className="mt-5" required
                            valid = {this.state.validate.ItemDescriptionState==="passed"}
                            invalid = {this.state.validate.ItemDescriptionState==="not passed"}/>
                            <FormFeedback>Description needs to have more than 20 characters</FormFeedback>
                            <FormText>Required</FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="ItemImages" xs={{offset: 1, size: 2}} size="lg" className="mt-5">Item Images</Label>
                        <Col  xs={8}>
                        <Input type="file" name="ItemImages" id="ItemImages" bsSize="lg" className="mt-5" multiple/>
                        </Col>
                        {/* <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                        </FormText> */}
                    </FormGroup>
            

                    <FormGroup row>
                        <Col xs={{offset: 6}}>
                            <Button 
                            disabled ={this.state.validate.ItemDescriptionState != "passed" ||
                                        this.state.validate.ItemNameState != "passed" ||
                                        this.state.validate.ItemType1State != "passed"}
                            type="submit" 
                            value="submit" 
                            color="primary" 
                            size='lg' 
                            className="mt-5"> Submit</Button>
                        </Col>
                    </FormGroup>
                    </Form>
                </Row>


               

            </Container>
        )
    }
}

export default SellSomething;