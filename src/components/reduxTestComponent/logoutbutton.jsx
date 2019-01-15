import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';


class LogoutButton extends Component {

    render(){
        return(<button onClick={actions.signOut()}>Logout</button>)
    }
}

export default connect(null, actions)(LogoutButton);