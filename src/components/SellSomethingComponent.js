import React, {Component} from 'react';
import { Button, Form, FormGroup, FormFeedback, Label, Input, FormText,
Container, Row, Col } from 'reactstrap';
import './SellSomethingComponent.css';
import ImageUpload from './ImageUploadComponent';
import { Redirect } from 'react-router-dom';
import {Loading} from './LoadingComponent';



class SellSomething extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ItemName:'',
            ItemType1:'...',
            ItemType2:'',
            ItemPrice:'',
            ItemDescription:'',
            SellerEmail:this.props.auth.user ? this.props.auth.user.username : '',
            validate: {
                ItemNameState:'',
                ItemType1State:'',
                ItemDescriptionState:'',
                ItemPriceState:'',
                ImageState:''
            },
            images:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validateType1 = this.validateType1.bind(this);
        this.validateDescription = this.validateDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImages = this.handleImages.bind(this); 
        this.validatePrice = this.validatePrice.bind(this); 
    }



    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.postItems.items.length !== prevProps.postItems.items.length && prevProps.postItems.isLoading === true && 
            this.props.postItems.isLoading === false && this.props.postItems.errMess === null) {
            this.setState({
            ItemName:'',
            ItemType1:'...',
            ItemType2:'',
            ItemPrice:'',
            ItemDescription:'',
            SellerEmail:this.props.auth.user ? this.props.auth.user.username : '',
            validate: {
                ItemNameState:'',
                ItemType1State:'',
                ItemDescriptionState:'',
                ItemPriceState:'',
                ImageState:''
            },
            images:[]});
            console.log('fire');

            alert("Item uploaded. Thank you.")
        }
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

    validatePrice(e) {
        const {validate} = this.state;
        if(e.target.value > 0 && e.target.value < 9999) {
            validate.ItemPriceState = "passed";
        }else{
            validate.ItemPriceState = "not passed";
        }
        this.setState({validate});
    }

    

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.images);
        this.props.postItem({ItemName:this.state.ItemName,
                            ItemType1:this.state.ItemType1,
                            ItemType2:this.state.ItemType2,
                            ItemPrice:this.state.ItemPrice,
                            ItemDescription:this.state.ItemDescription,
                            SellerEmail:this.state.SellerEmail,
                            Images:this.state.images})
    }


    handleImages = (childData) => {
        this.setState({images:childData});
        const {validate} = this.state;
        if (this.state.images.length === 0){
            validate.ImageState = "not passed";
        }else{
            validate.ImageState = "passed";
        }
        this.setState({validate});
    }

    render() {
        if (!this.props.auth.isAuthenticated) {
            return(
            <h1> Please Login first</h1>
            )}

        if ( this.props.postItems.isLoading) {
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        }
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
                            value={this.state.ItemName}
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
                        bsSize="lg" className="mt-5" value={this.state.ItemType1}
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
                        bsSize="lg" className="mt-5" value={this.state.ItemType2}>
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
                        <Label for="ItemPrice" size="lg" xs={{offset: 1, size: 2}} className="mt-5">Item Price</Label>
                        <Col xs={8}>
                            <Input 
                            onChange={(e) => {
                                this.handleChange(e);
                                this.validatePrice(e);
                            }}
                            type="number" name="ItemPrice" 
                            id="ItemPrice" bsSize="lg" step="0.01" 
                            rows={6} className="mt-5" value={this.state.ItemPrice}
                            valid = {this.state.validate.ItemPriceState==="passed"}
                            invalid = {this.state.validate.ItemPriceState==="not passed"}/>
                            <FormFeedback>Unreasonable Price</FormFeedback>
                            <FormText>Required</FormText>
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
                            rows={6} className="mt-5" value={this.state.ItemDescription}
                            valid = {this.state.validate.ItemDescriptionState==="passed"}
                            invalid = {this.state.validate.ItemDescriptionState==="not passed"}/>
                            <FormFeedback>Description needs to have more than 20 characters</FormFeedback>
                            <FormText>Required</FormText>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label xs={{offset: 1, size: 2}} size="lg" className="mt-4">Item Images</Label>
                        <Col  className="mt-5">
                            <ImageUpload   handleImages={this.handleImages} postItems={this.props.postItems}/>
                            <FormText>Upload at least one and at most six images. Currenly does not support HEIC, iPhone users
                                could switch their camera setting to shoot JPEG.
                            </FormText>
                        </Col>
                    </FormGroup>
            

                    <FormGroup row>
                        <Col xs={{offset: 6}} className="mt-5">
                            <Button 
                            disabled ={this.state.validate.ItemDescriptionState != "passed" ||
                                        this.state.validate.ItemNameState != "passed" ||
                                        this.state.validate.ItemType1State != "passed" ||
                                        this.state.validate.ImageState != "passed"}
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