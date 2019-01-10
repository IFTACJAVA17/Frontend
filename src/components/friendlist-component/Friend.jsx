import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import FriendInfo from './FriendInfo';

class Friend extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        let cssStatus = (this.props.friend.status ? 'friendlist-online' : 'friendlist-offline');

        return <table className="friend-table">
            <tbody>
                <tr onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    <td className="friendlist-user">
                        <p className={cssStatus}>{this.props.friend.name}</p>
                        <span className="friendlist-span"><p className={cssStatus}>
                            {(this.props.friend.status ? 'Online' : 'Offline')}</p></span>
                        <br></br>

                    </td>
                </tr>
                <tr>
                    <Collapse isOpen={this.state.collapse}>
                        <Card className="friend-card">
                            <CardBody>
                                Anim pariatur cliche reprehenderit,
                                 enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                 anim keffiyeh helvetica, craft beer labore wes anderson cred
                                 nesciunt sapiente ea proident.
                        </CardBody>
                        </Card>
                    </Collapse>
                </tr>
            </tbody>
        </table >


    }

}

/*
<tr>
            <td className="friendlist-user"><p className={cssStatus}>{this.props.friend.name}</p>
                <span className="friendlist-span"><p className={cssStatus}>
                    {(this.props.friend.status ? 'Online' : 'Offline')}</p></span>
            </td>
            

        </tr>
*/

export default Friend;