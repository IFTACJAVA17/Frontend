import React, { Component } from 'react';
import { userTracker, usersRef } from '../../config/firebase'
import './friendlist_style.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default class UsersOnline extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if (this.props.user.uid !== 'guestId') {
            userTracker.child(this.props.user.uid).set({ user: this.props.user.displayName });
            userTracker.child(this.props.user.uid).onDisconnect().remove();
        }
        this.handleOnlineUsers = snap => {
            if (snap.val()) this.setState({ online: snap.val() });
        }
    }

    componentDidUpdate() {
        if (this.props.user.uid !== 'guestId') {
            userTracker.child(this.props.user.uid).onDisconnect().remove();
        }
    }

    handleFriendAdd = (friendUid, name) => {
        let friends = this.getFriends();
        if (this.isFriends(friends, friendUid)) {
            console.log('already friends')
        } else {
            friends.push({ id: friendUid, name: name });
            usersRef(this.props.user.uid).update({
                friends
            });
        }
        this.setState({})
    }

    getFriends = () => {
        let friends;
        usersRef(this.props.user.uid).on('value', snap => {
            friends = snap.val().friends;
        });
        if (friends === undefined) {
            friends = [];
        }
        return friends;
    }

    isFriends = (friends, friendUid) => {
        return friends.some(friend => friend.id === friendUid);
    }

    renderOnlineUsers = () => {
        if (this.props.user.uid !== 'guestId') {
            return Object.keys(this.state.online).map(onlineUserUid => {
                if (onlineUserUid !== this.props.user.uid) {
                    const onlineUserName = this.state.online[onlineUserUid]['user'];
                    return (
                        <span key={onlineUserUid}>
                            {onlineUserName}
                            {
                                this.isFriends(this.getFriends(), onlineUserUid) ?
                                    <span></span>
                                    :
                                    <span onClick={this.handleFriendAdd.bind(this, onlineUserUid, onlineUserName)}> add</span>
                            }
                        </span>)
                }
                return <span key={onlineUserUid}></span>;
            });
        }
    }


    render() {
        if(this.props.user.uid !== 'guestId') {
            return (
                <div><div>Online</div>
                    {this.renderOnlineUsers()}
                </div>
            )
        }
        return (
            <div>
                Plz log in
            </div>
        )
    }
}
