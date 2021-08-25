import React, {Component} from 'react';

class CategoryItems extends Component {
    constructor(props) {
        super(props);
    }

    
    componentDidMount() {
        
        this.props.fetchCategoryItem('clothes');
        
    }
    

    

    render() {
        // const { category } = this.props.match.params;

        return(
            <div>
                <h1>{this.props.match.params.category}</h1>
            </div>
        )
    }
}

export default CategoryItems;