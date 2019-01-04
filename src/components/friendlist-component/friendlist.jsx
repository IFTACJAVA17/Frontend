import './friendlist_style.scss';
import React from 'react';

class FriendList extends React.Component {
    render() {
        return (
            <div className="friendlist-div">
                <table className="friendlist-list">
                    <thead>
                        <tr className="friendlist-title">
                        <td>
                            <h3>Vänner</h3>
                            </td>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td><p className="friendlist-online">Kent Larsen </p><span className="friendlist-span"><p> Online</p></span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><p className="friendlist-online">Martin Melin <span className="friendlist-span">Online</span></p></td>
                        </tr>
                        <tr>
                            <td><p className="friendlist-offline">Ola Melén <span className="friendlist-span">Offline</span></p></td>
                        </tr>
                        <tr>
                            <td><p className="friendlist-offline">Åsa Vilbäck <span className="friendlist-span">Offline</span></p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FriendList;