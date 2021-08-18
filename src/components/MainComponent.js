import React, {Component} from 'react';
import Header from './HeaderComponent.js';
import SearchBar from './SeachbarComponent.js';
import Category from './CategoryComponent.js';
import LatestAdditions from './LatestAdditionsComponent.js';

class Main extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div classname="header">
                    <Header />
                </div>
                
                <div classname="searchbar">
                    <SearchBar />
                </div>

                <div classname="category">
                    <Category />
                </div>

                <div classname="lastestAddition">
                    <LatestAdditions />
                </div>
            </div>
        )
    }
}

export default Main;