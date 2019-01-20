import React,{ Component } from 'react';

export default class Friend extends Component {

    render() {
        console.log(this.props)
        const status = this.props.online ? 'online' : 'offline';
        return (
            <div>{this.props.name}: {status}</div>
        )

    }
}