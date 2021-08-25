import React, {Component} from 'react';
import Header from './HeaderComponent.js';
import Home from './HomeComponent.js';
import SellSomething from './SellSomethingComponent.js';
import ItemPage from './ItemPageComponent';
import CategoryItems from './CategoryItemsComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser , registerUser, logoutUser, postItem, uploadImages,
    fetchItems, fetchCategoryItem} from '../redux/actionCreators.js';


const mapStateToProps = state => {
    return {
        auth: state.auth,
        register: state.register ,
        postItem:state.postItem,
        items: state.items

    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    registerUser: (creds) => dispatch(registerUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
    postItem: (info) => dispatch(postItem(info)),
    uploadImages: (images) => dispatch(uploadImages(images)),
    fetchItems: () => dispatch(fetchItems()),
    fetchCategoryItem: (category) => dispatch(fetchCategoryItem(category))
});

class Main extends Component{
    constructor(props) {
        super(props);
    }

   
    
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.register.errMess !== prevProps.errMess && this.props.register.errMess !== null) {
          alert(this.props.register.errMess);
        }
        else if (this.props.auth.errMess !== prevProps.errMess && this.props.auth.errMess !== null) {
            alert(this.props.auth.errMess);
        }
      }


    render() {
    const HomePage = () => {
        return (
            <Home items={this.props.items}
                fetchItems={this.props.fetchItems}/>
        )
    }

    const ItemWithId = ({match}) => {
        return(
            <ItemPage item={this.props.items.items.filter((item) => item._id === match.params.itemId)[0]} />
        )
    }

    const CategoryItemsPage = ({match}) => {

        return(
            <CategoryItems fetchCategoryItem={this.props.fetchCategoryItem}
                            match={match}
                            items={this.props.items}/>
        )
    }
    const params = this.props.match.params;


        return(
            <div>
                <Header 
                    loginUser={this.props.loginUser}
                    registerUser={this.props.registerUser}
                    logoutUser={this.props.logoutUser}
                    auth={this.props.auth}
                    register={this.props.register}
                    />
                <Switch>
                    <Route path='/home' render={HomePage}/>
                    <Route path='/sellsomething' component={() => <SellSomething
                                                                    postItem={this.props.postItem}
                                                                    uploadImages={this.props.uploadImages}
                                                                    auth={this.props.auth}/>}/>
                    {/* <Route exact path='/items/all' /> */}
                    <Route  exact path='/items/:category' render={CategoryItemsPage} />
                    {/* <Route exact path='/items/shoes' />
                    <Route exact path='/items/eletronics' />
                    <Route exact path='/items/books' />
                    <Route exact path='/items/furnitures' />
                    <Route exact path='/items/stationaries' />
                    <Route exact path='/items/collectibles' />
                    <Route exact path='/items/services' />
                    <Route exact path='/items/others' /> */}
                    {/* <Route exact path='/items/:itemId' component={ItemWithId} /> */}
                    <Redirect to="/home" />
                    
                </Switch>
                
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));