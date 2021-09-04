import React, {Component} from 'react';
import SearchBar from './SeachbarComponent.js';
import Category from './CategoryComponent.js';
import LatestAdditions from './LatestAdditionsComponent.js';
import RenderCard from './RenderCardComponent';
import {Loading} from './LoadingComponent';

class Home extends Component {
    constructor(props) {
        super(props);

        // this.state={
        //     showAlert:false,
            
        // }
    }

    componentDidMount() {       
        this.props.fetchLatestItems();
       }    
    

    render() {
        return (
            <div>

                <div className="searchbar">
                    <SearchBar fetchNameItems={this.props.fetchNameItems}
                                auth={this.props.auth}/>
                </div>

                <div className="category">
                    <Category />
                </div>


                { this.props.items.isLoading ?


                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
                :
                <div className="lastestAddition">
                    <LatestAdditions items={this.props.items}
                                auth={this.props.auth}/>
                    
                   
                </div>
                }
            </div>
        )
    }

}

export default Home;