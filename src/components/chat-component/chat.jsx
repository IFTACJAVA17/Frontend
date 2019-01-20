import React, { Component } from 'react';
import { databaseRef } from '../../config/firebase';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Emoji from 'react-emoji-render';
import './chat_style.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

class Chat extends Component {
    messagesEnd = React.createRef()
    constructor() {
        super();
        this.state = {
            message: '',
            messages: {},
        };
    }

    componentWillMount() {
        this.chatRoom = databaseRef.child('chat').child('global');
        this.handleNewMessages = snap => {
            // if not null then update state
            if (snap.val()) this.setState({ messages: snap.val() });
        };
    }

    componentDidMount() {
        // subscribe
        this.chatRoom.on('value', this.handleNewMessages);
        this.scrollToBottom()
    }
    componentWillUnmount() {
        // unsubscribe
        this.chatRoom.off('value', this.handleNewMessages);
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
    }

    handleMsgChange = e => this.setState({ message: e.target.value });

    handleKeyDown = e => {
        if (e.key === 'Enter') {
            this.chatRoom.push({
                sender: this.props.user.displayName,
                message: this.state.message,
                time: new Date().toISOString(),
                avatar: this.props.user.photoURL
            });
            this.setState({ message: '' });
        }
    }

    render() {
        let counter = 0;
        const messages = Object.keys(this.state.messages).map(message => {
            if (this.state.messages[message]['sender'] === this.props.user.displayName)
                return (
                    <div className='me-container' key={counter++}>
                        <div className='name me'>{this.state.messages[message]['sender']}</div>
                        <div className='me-avatar-container'>
                        <div className='message me-message'><Emoji text={this.state.messages[message]['message']} /></div>
                        {
                            this.state.messages[message]['avatar'] !== 'guest' ?
                                <img className='chat-avatar' src={this.state.messages[message]['avatar']} alt='' height='25px' width='25px' />
                                :
                                <FontAwesomeIcon className='guest-avatar'  icon='user' />
                        }
                        </div>
                    </div>
                );
            else
                return (
                    <div className='sender-container' key={counter++}>
                        <div className='name sender'>{this.state.messages[message]['sender']}</div>
                        <div className='sender-avatar-container'>
                        {
                            this.state.messages[message]['avatar'] !== 'guest' ?
                                <img className='chat-avatar' src={this.state.messages[message]['avatar']} alt='' height='25px' width='25px' />
                                :
                                <FontAwesomeIcon className='guest-avatar'  icon='user' />
                        }
                        <div className='message sender-message'><Emoji text={this.state.messages[message]['message']} /></div>
                        </div>
                    </div>
                );
        });
        return (
            <div>
                <div className='header'>
                    <h5>Chat</h5>
                </div>
                <div className='chat-area'>
                    {messages}
                    <div ref={this.messagesEnd} />
                </div>
                <input className='input' onChange={this.handleMsgChange} onKeyDown={this.handleKeyDown} value={this.state.message} placeholder='Skriv här...'></input>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps, actions)(Chat);