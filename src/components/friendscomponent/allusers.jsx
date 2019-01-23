import React, { Component } from 'react';
import { userTracker, usersRef, allUsersRef } from '../../config/firebase'
import { Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchInput, { createFilter } from 'react-search-input';

import './friendlist_style.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

const KEYS_TO_FILTER = ['username', 'email'];

export default class AllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            online: {},
            allUsers: {},
            searchTerm: ''
        }
        this.searchUpdate = this.searchUpdate.bind(this);
    }

    componentDidMount() {
        userTracker.on('value', this.handleOnlineUsers);
        allUsersRef.on('value', snap => {
            this.setState({ allUsers: snap.val() });
        })
    }

    componentWillUnmount() {
        userTracker.off('value', this.handleOnlineUsers);
    }

    searchUpdate = (term) => {
        this.setState({ searchTerm: term })
    }

    handleOnlineUsers = snap => {
        if (snap.val()) this.setState({ online: snap.val() });
    }

    handleUnFriend(friendUid) {
        let friends = this.getFriends();
        friends = friends.filter(friend => friend.id !== friendUid);
        usersRef(this.props.user.uid).update({ friends });

    }

    handleFriendAdd = (friendUid, name) => {
        let friends = this.getFriends();
        if (this.isFriends(friends, friendUid)) {
            console.log('already friends')
        } else {
            friends.push({ id: friendUid, name: name });
            usersRef(this.props.user.uid).update({ friends });
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

    userArrayBuilder = () => {
        return Object.keys(this.state.allUsers).map(userUid => {
            return {
                userUid: userUid,
                avatar: this.state.allUsers[userUid]['avatar'],
                username: this.state.allUsers[userUid]['username'],
                email: this.state.allUsers[userUid]['email']
            }
        });
    }

    userOnlineStatus = (uid) => {
        return Object.keys(this.state.online).includes(uid);
    }

    renderAllUsers = () => {
        if (this.props.user.uid !== 'guestId') {
            const { searchTerm } = this.state;
            const users = this.userArrayBuilder().filter(createFilter(searchTerm, KEYS_TO_FILTER)).map(user => {
                if (user.userUid !== this.props.user.uid) {
                    let avatar = <img className='profile-picture' src={user.avatar} alt='' height='40px' width='40px' />;
                    if (!user.avatar || user.avatar === undefined) {
                        avatar = <FontAwesomeIcon className='no-avatar' icon='user' />;
                    }
                    let onlineStatus = 'offline';
                    if (this.userOnlineStatus(user.userUid)) {
                        onlineStatus = 'online'
                    }
                    /*
                        Ursäkta för inline-stylingen nedan. Var enda sättet jag fick till det på :(
                    */
                    return (
                        <Row key={user.userUid} style={{ lineHeight: '3em', paddingTop: '0.3em', paddingBottom: '0.3em', paddingRight: '1em' }}>
                            <Col className='center' style={{ verticalAlign: 'middle' }} xs='2'>
                                {avatar}
                            </Col>
                            <Col style={{ verticalAlign: 'middle', color: 'white' }}><span className={onlineStatus}><FontAwesomeIcon icon='circle' /></span> {user.username}</Col>
                            <Col xs='1' style={{ verticalAlign: 'middle' }}>
                                {
                                    this.isFriends(this.getFriends(), user.userUid) ?
                                        <FontAwesomeIcon className='unfriend' onClick={this.handleUnFriend.bind(this, user.userUid)} icon='user-minus' />
                                        :
                                        <FontAwesomeIcon className='befriend' onClick={this.handleFriendAdd.bind(this, user.userUid, user.username)} icon='user-plus' />
                                }
                            </Col>
                        </Row>
                    )
                }
                return <span key={user.userUid}></span>;
            })
            return users;
        }
    }

    render() {
        if (this.props.user.uid !== 'guestId') {
            return (
                <Container>
                    <SearchInput inputClassName='form-control search-input' onChange={this.searchUpdate} />
                    {this.renderAllUsers()}
                </Container>
            )
        }
        return (
            <div>
                Plz log in
            </div>
        )
    }
}
