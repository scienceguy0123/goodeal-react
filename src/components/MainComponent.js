import React, {Component} from 'react';
import Header from './HeaderComponent.js';
import Home from './HomeComponent.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser , registerUser} from '../redux/actionCreators.js';

const mapStateToProps = state => {
    return {
        auth: state.auth,
        register: state.register 
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    registerUser: (creds) => dispatch(registerUser(creds))
});

class Main extends Component{
    constructor(props) {
        super(props);
    }

    render() {
    const HomePage = () => {
        return (
            <Home />
        )
    }

        return(
            <div>
                <Header 
                    loginUser={this.props.loginUser}
                    registerUser={this.props.registerUser}
                    auth={this.props.auth}
                    register={this.props.register}
                    />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/all' />
                    <Route exact path='/clothes' />
                    <Route exact path='/shoes' />
                    <Route exact path='/eletronics' />
                    <Route exact path='/books' />
                    <Route exact path='/furnitures' />
                    <Route exact path='/stationaries' />
                    <Route exact path='/others' />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));