import React, { Component } from 'react';
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';
import { userTracker } from '../../config/firebase'
import FriendList from './friendlist';
import AllUsers from './allusers';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

import './friendlist_style.scss';

class FriendsComponent extends Component {

    constructor() {
        super();
        this.state = {
            modal: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidUpdate() {
        if (this.props.user.uid !== 'guestId') {
            userTracker.child(this.props.user.uid).onDisconnect().remove();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.uid !== 'guestId') {
            userTracker.child(nextProps.user.uid).set({ user: nextProps.user.displayName });
            userTracker.child(nextProps.user.uid).onDisconnect().remove();
        }
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    renderModal = () => {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} contentClassName='users-modal'>
                <h3>All users</h3>
                <ModalBody >
                    <AllUsers user={this.props.user} />
                </ModalBody>
                <ModalFooter>
                    <Button className='btn btn-default' onClick={this.toggleModal}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

    renderFriendsComponent = () => {
        return (
            <div>
                <div className='header'>
                    <h5>Friends</h5>
                </div>
                <div className='friendlistContainer'>
                    <div className='friendlist-element find' onClick={this.toggleModal}>Find More Friends</div>
                    <FriendList user={this.props.user} />
                </div>
                {this.renderModal()}
            </div>
        )
    }


    render() {
        if (!this.props.user) {
            return (
                <div></div>
            )
        } else {
            return (
                this.renderFriendsComponent()
            )
        }
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps, actions)(FriendsComponent);