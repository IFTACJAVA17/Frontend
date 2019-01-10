import * as React from 'react';
import './friendlist_style.scss';
import Popup from "reactjs-popup";
import Friend from "./Friend";
import FriendInput from "./FriendInput";

class FriendList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friendList: []
        };
    }

    componentDidMount() {

        let friendList = [
            { id: 1, name: "Kent Larsen", status: true },
            { id: 2, name: "Martin Melin", status: true },
            { id: 3, name: "Ola Melén", status: false },
            { id: 4, name: "Åsa Vilbeck", status: false }
        ]

        this.setState({ friendList: friendList });
    }

    createTable(friendList) {

        return <div>´
            <table className="friendlist-list">
                <thead className="friendlist-title">
                    <tr>
                        <th>
                            <h3>Vänner</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {friendList.map((friend) => {
                        return <Friend friend={friend} />
                    })}

                    <Popup className="popup-style" trigger={<button className="btn btn-primary add-friend-button">Lägg till vän</button>}
                        position="left center">
                        <FriendInput />
                    </Popup>

                </tbody>
            </table>
        </div>;

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
