import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';


class Loggedin extends Component {

    render(){
        if(this.props.user === null || this.props.user === undefined) {
            return <Redirect to='/' />
        }
        return(<div>Loggedin - <Link to='/loggedin2'>Keep going</Link></div>)
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
} 

export default connect(mapStateToProps, actions)(Loggedin);