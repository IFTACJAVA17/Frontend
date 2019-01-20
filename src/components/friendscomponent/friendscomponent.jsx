import React, { Component } from 'react';
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';
import './friendlist_style.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
import FriendList from './friendlist';
import UsersOnline from './usersonline';

class FriendsComponent extends Component {


    render() {
        if (!this.props.user) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="friendlistContainer">
                    <div className="header">
                        <h5>Friends</h5>
                    </div>
                    <div className='friendlist-list'>
                        <FriendList user={this.props.user} />
                        <UsersOnline user={this.props.user} />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps, actions)(FriendsComponent);