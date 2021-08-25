import React, {Component} from 'react';
import SearchBar from './SeachbarComponent.js';
import Category from './CategoryComponent.js';
import LatestAdditions from './LatestAdditionsComponent.js';
import RenderCard from './RenderCardComponent';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        this.props.fetchItems();
        
    }

    render() {
        return (
            <div>
                <div className="searchbar">
                    <SearchBar />
                </div>

                <div className="category">
                    <Category />
                </div>


                <div className="lastestAddition">
                    <LatestAdditions items={this.props.items}/>
                    
                   
                </div>
            </div>
        )
    }
}

export default Home;