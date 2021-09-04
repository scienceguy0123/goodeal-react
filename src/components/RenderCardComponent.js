import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import './RenderCardComponent.css';
import {Loading} from './LoadingComponent';


class RenderCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        

        
        return(
            <div>
                <Card>
                    <Link to={`/item/${this.props.item._id}`} style={{ color:'inherit', textDecoration: 'none' }}>
                    
                        {/* <CardImg top height="40%" width="100%" src={this.props.item.Images[0]} alt="Card image cap" /> */}
                        <div className='addition-img'>
                            <img className='addition-image'src={this.props.item.Images[0]}></img>
                        </div>
                   

                        <CardBody>
                            <CardTitle tag="h6">{this.props.item.ItemName}</CardTitle>
                            <CardSubtitle tag="h5" className="mb-2 text-muted">{`$ ${this.props.item.ItemPrice}`}</CardSubtitle>
                            <CardSubtitle tag="h5" className="mb-2 text-muted">{`${this.props.item.ItemType1}  ${this.props.item.ItemType2}`} </CardSubtitle>
                        </CardBody>
                    </Link>
                </Card>
            </div>
        )
    }
}

export default RenderCard;
