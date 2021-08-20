import React, {Component} from 'react';
import SearchBar from './SeachbarComponent.js';
import Category from './CategoryComponent.js';
import LatestAdditions from './LatestAdditionsComponent.js';

class Home extends Component {
    constructor(props) {
        super(props);
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
                    <LatestAdditions />
                </div>
            </div>
        )
    }
}

export default Home;