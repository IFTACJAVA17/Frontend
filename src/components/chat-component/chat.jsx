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
            msg: "",
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

    handleMsgChange = e => this.setState({ msg: e.target.value });

    handleKeyDown = e => {
        if (e.key === "Enter") {
            // send the msg
            this.chatRoom.push({
                sender: this.props.user.displayName,
                msg: this.state.msg,
            });
            // clear the field
            this.setState({ msg: "" });
        }
    }

    render() {
        let counter = 0;
        const messages = Object.keys(this.state.messages).map(message => {
            // Check if the msg is from the user

            if (this.state.messages[message]["sender"] === this.props.user.displayName)
                return (
                    <div className="me-container" key={counter++}>
                        <div className="name me">{this.state.messages[message]["sender"]}</div>
                        <div className="me-box">{this.state.messages[message]["msg"]}</div>
                    </div>
                );
            else
                return (
                    <div className="sender-container" key={counter++}>
                        <div className="name sender">{this.state.messages[message]["sender"]}</div>
                        <div className="sender-box">{this.state.messages[message]["msg"]}</div>
                    </div>
                );
        });
        return (
            <div className="chatlist">
                <div className="header">
                    <h5>Chat</h5>
                </div>
                <div className="chat-area">
                    {messages}
                    <div ref={this.messagesEnd} />
                </div>
                <input className="input" onChange={this.handleMsgChange} onKeyDown={this.handleKeyDown} value={this.state.msg} placeholder="Skriv här..."></input>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps, actions)(Chat);