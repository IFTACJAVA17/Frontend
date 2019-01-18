import React, { Component } from 'react';
import { databaseRef } from '../../config/firebase';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
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
            console.log(snap.val());
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
                time: new Date().toISOString()
            });
            this.setState({ message: '' });
        }
    }

    render() {
        let counter = 0;
        const messages = Object.keys(this.state.messages).map(message => {
            const time = new Date(this.state.messages[message]['time']);
            console.log(time);
            let showTime = false;
            if (this.state.messages[message]['me'] === this.props.user.displayName)
                return (
                    <div className='me-container' key={counter++}>
                        <div className='name me'>{this.state.messages[message]['sender']}</div>
                        <div onClick={()=> { showTime = !showTime; }} className='me-box'>{this.state.messages[message]['message']}</div>  
                    </div>
                );
            else
                return (
                    <div className='sender-container' key={counter++}>
                        <div className='name sender'>{this.state.messages[message]['sender']}</div>
                        <div onClick={()=> { showTime = !showTime; }} className='sender-box'>{this.state.messages[message]['message']}</div>
                    </div>
                );
        });
        return (
            <div className='chatlist'>
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