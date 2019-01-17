import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, NavItem, NavLink, Collapse, Form, Button } from 'reactstrap';
import './nav.scss';
import Popup from "reactjs-popup";
import LoginContent from '../login-component/LoginContent';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';

class NavComponent extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    signMethod() {
        if (this.props.user == null) {
            return (
                <Popup className="popup-style" modal trigger={<Button className="btn btn-success">Sign in</Button>}>
                    <LoginContent />
                </Popup>
            );
        } else {
            return (
                <button className="btn btn-success" onClick={actions.signOut()}>Sign out</button>
            );
        }
    }

    render() {
        console.log(this.props.user);
        return (
            <div>
                <Navbar className="bg-secondary">
                    <span className="navbar-toggler" onClick={this.toggle}>
                        <i className="fas fa-bars fa-lg"></i>
                    </span>
                    <NavbarBrand className="navbar-brand order-0">IGaming</NavbarBrand>
                    <Form inline>
                        {this.signMethod()}
                    </Form>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav>
                            <NavItem>
                                <NavLink href="/">Länk 1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Länk 2</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps, actions)(NavComponent);