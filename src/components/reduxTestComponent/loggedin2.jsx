import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import LogoutButton from './logoutbutton';


class Loggedin2 extends Component {
    
    render(){
        if(this.props.user === null || this.props.user === undefined) {
            return <Redirect to='/' />
        }
        return(<div>Loggedin 2 - <LogoutButton /></div>)
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
} 

export default connect(mapStateToProps, actions)(Loggedin2);