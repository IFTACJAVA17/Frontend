import * as React from 'react';
import './friendlist_style.scss';
import Popup from "reactjs-popup";
import Friend from "./Friend";
import FriendInput from "./FriendInput";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from'react-perfect-scrollbar';

class FriendList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friendList: [],
            header: props.header,
        };
    }

    componentDidMount() {

        let friendList = [
            { id: 1, name: "Kent Larsen", status: true },
            { id: 2, name: "Martin Melin", status: true },
            { id: 3, name: "Ola Melén", status: false },
            { id: 4, name: "Åsa Vilbeck", status: false },
        ]

        this.setState({ friendList: friendList });
    }

    createTable(friendList) {

        return (
        <div className="friendlistContainer"> 
            <div className="header">
            <h5>{this.state.header}</h5>
        </div>
        <PerfectScrollbar>
        <table className="friendlist-list">
            <tbody>
                {friendList.map((friend) => {
                    return <Friend friend={friend} />
                })}
                <Popup className="popup-style" trigger={<button className="btn btn-success add-friend-button">Lägg till vän</button>}
                    position="left center">
                    <FriendInput />
                </Popup>
            </tbody>
        </table>
        </PerfectScrollbar>
        </div>);
    }

    render() {
        return (
            <div>
                {this.createTable(this.state.friendList)}
            </div>
        )
    }
}

export default FriendList;
