import React, {Component} from 'react';
import Header from './HeaderComponent.js';
import Home from './HomeComponent.js';
import SellSomething from './SellSomethingComponent.js';
import ItemPage from './ItemPageComponent';
import CategoryItems from './CategoryItemsComponent';
import UserSellingPage from './UserSellingPage';
import SearchNameItems from './SearchNameItemsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser , registerUser, logoutUser, postItem, uploadImages,
    fetchItems, fetchCategoryItem, fetchItemId, fetchUserItems, deleteItem,
    fetchNameItems, fetchLatestItems} from '../redux/actionCreators.js';


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
    fetchCategoryItem: (category) => dispatch(fetchCategoryItem(category)),
    fetchItemId:(itemId) => dispatch(fetchItemId(itemId)),
    fetchUserItems: (email) => dispatch(fetchUserItems(email)),
    deleteItem: (itemId) => dispatch(deleteItem(itemId)),
    fetchNameItems: (keyWord) => dispatch(fetchNameItems(keyWord)),
    fetchLatestItems: () => dispatch(fetchLatestItems())
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
                fetchLatestItems={this.props.fetchLatestItems}
                fetchNameItems={this.props.fetchNameItems}
                />
        )
    }

    const ItemWithId = ({match}) => {
        return(
            <ItemPage   fetchItemId={this.props.fetchItemId}
                        match={match} 
                        items={this.props.items}
                        />
        )
    }

    const CategoryItemsPage = ({match}) => {

        return(
            <CategoryItems fetchCategoryItem={this.props.fetchCategoryItem}
                            match={match}
                            items={this.props.items}/>
        )
    }

    const searchNameItemsPage = ({match}) => {
        return(
            <SearchNameItems fetchNameItems={this.props.fetchNameItems}
                            match={match}
                            items={this.props.items} />
        )
    }


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
                    <Route path='/user/sellsomething' component={() => <SellSomething
                                                                    postItem={this.props.postItem}
                                                                    uploadImages={this.props.uploadImages}
                                                                    auth={this.props.auth}/>}/>
                    
                    <Route exact path='/user/selling' render={() => <UserSellingPage
                                                                    fetchUserItems={this.props.fetchUserItems}
                                                                    auth={this.props.auth}
                                                                    items={this.props.items}
                                                                    deleteItem={this.props.deleteItem} /> }/>
                    
                    <Route  exact path='/items/:category' render={CategoryItemsPage} />
                    <Route exact path='/items/name/:keyword' render={searchNameItemsPage} />
                    <Route exact path='/item/:itemId' render={ItemWithId} />
                    <Redirect to="/home" />
                    
                </Switch>
                
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));