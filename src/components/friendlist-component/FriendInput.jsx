import * as React from 'react';
class FriendInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: [
            ],
        };
    }


    render() {
        return <div className="popup-style">
            <p className="friend-list-text">Lägg till vän</p>
            <form action="return false">
                <input type="text" name="friend" placeholder="Ange namn" />
                <input className="btn btn-primary add-friend-button" type="button" value="Lägg till vän" />
            </form>
        </div>

    };
}

export default FriendInput;