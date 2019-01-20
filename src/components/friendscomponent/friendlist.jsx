import React, { Component } from 'react';
import { usersRef, userTracker } from '../../config/firebase'
import './friendlist_style.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Friend from './Friend';

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            friends: [],
            online: {}
        }
    }

    componentDidMount() {
        userTracker.on('value', this.handleOnlineUsers);
    }

    componentWillUnmount() {
        userTracker.off('value', this.handleOnlineUsers);
    }

    componentWillMount() {
        if (this.state.user.uid !== 'guestId') {
            usersRef(this.state.user.uid).on('value', snap => {
                let friends = snap.val().friends;
                if (friends === undefined) {
                    friends = [];
                }
                this.setState({ friends });
            });
        }
        this.handleOnlineUsers = snap => {
            if (snap.val()) this.setState({ online: snap.val() });
        }
    }

    trackFriend(uid) {
        return Object.keys(this.state.online).includes(uid);
    }


    render() {
        const friends = this.state.friends.map(friend => {
            return <Friend name={friend.name} key={friend.id} online={this.trackFriend(friend.id)} />
        });

        if (this.props.user.uid !== 'guestId') {
            return (
                <div>
                    Friends
                      <div>{friends}</div>
                </div>
            )
        }
        return (
            <div>Guests cant have friends</div>
        )
    }
}
