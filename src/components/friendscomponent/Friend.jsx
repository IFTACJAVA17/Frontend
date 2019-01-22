import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Card, CardBody } from 'reactstrap';
import { usersRef } from '../../config/firebase'

export default class Friend extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, avatar: 'https://pngimage.net/wp-content/uploads/2018/06/noavatar-png-6.png' };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    componentWillMount(){
        this.getFriendAvatar(this.props.id);
    }

    getFriendAvatar(uid) {
        usersRef(uid).on('value', snap => {
            if (snap.val().avatar !== undefined) {
                this.setState({avatar: snap.val().avatar});
            }
        });
    }

    renderFriend(){
        const avatar = this.state.avatar; 
        let cssStatus = (this.props.status ? 'friendlist-online' : 'friendlist-offline');
        return (
            <div>
                <Container className='friend-container'>
                    <Row onClick={this.toggle}>
                        <Col className='friendlist-element'>
                            <span className={cssStatus}>{this.props.name}</span>
                            <span className="friendlist-span"><span className={cssStatus}>
                                {(this.props.status ? 'Online' : 'Offline')}</span></span>
                        </Col>
                    </Row>
                </Container>
                <Collapse isOpen={this.state.collapse}>
                    <Card className="friend-card">
                        <CardBody>
                            <img src={avatar} alt='' width='100%' />
                            Presentation text or other fun facts about user.
                            Send private message etc.
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }

    render() {
        return this.renderFriend();
    }
}