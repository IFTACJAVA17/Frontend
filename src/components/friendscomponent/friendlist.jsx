import React, { Component } from 'react';
import { usersRef, userTracker } from '../../config/firebase'
import Friend from './Friend';
import SearchInput, { createFilter } from 'react-search-input';

import './friendlist_style.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

const KEYS_TO_FILTER = ['name'];

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            friends: [],
            online: {},
            searchTerm: ''
        }
        this.searchUpdate = this.searchUpdate.bind(this);
    }

    componentDidMount() {
        userTracker.on('value', this.handleOnlineUsers);
    }

    componentWillUnmount() {
        userTracker.off('value', this.handleOnlineUsers);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ user: nextProps.user }, () => {
            this.fetchFriends();
        });
    }

    componentWillMount() {
        this.fetchFriends();
        this.handleOnlineUsers = this.handleOnlineUsers.bind(this);
    }

    searchUpdate = (term) => {
        this.setState({ searchTerm: term })
    }

    handleOnlineUsers = (snap) => {
        if (snap.val()) this.setState({ online: snap.val() });
    }

    fetchFriends = () => {
        if (this.state.user.uid !== 'guestId') {
            usersRef(this.state.user.uid).on('value', snap => {
                let friends = snap.val().friends;
                if (friends === undefined) {
                    friends = [];
                }
                this.setState({ friends });
            });
        }
    }

    trackFriend = (uid) => {
        return Object.keys(this.state.online).includes(uid);
    }

    render() {
        const searchTerm = this.state.searchTerm;
        if (this.state.user.uid !== 'guestId') {
            const friends = this.state.friends.filter(createFilter(searchTerm, KEYS_TO_FILTER)).map(friend => {
                return <Friend
                    key={friend.id}
                    name={friend.name}
                    status={this.trackFriend(friend.id)}
                    id={friend.id}
                />
            });
            return (
                <div className='friendlist-div'>
                    <SearchInput inputClassName='form-control search-input' onChange={this.searchUpdate} />
                    {friends}
                </div>
            )
        } else {
            return (
                <div>Guests cant have friends</div>
            )
        }
    }
}
