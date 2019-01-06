import React, { Component } from 'react';
import {Navbar, Nav, NavbarBrand, Dropdown, NavItem, NavLink } from 'reactstrap';
import './nav.scss';

class NavComponent extends Component {
    render() {
        return (
            <div>
                <Navbar className="bg-secondary">
                    <NavbarBrand className="navbar-brand">IGaming</NavbarBrand>
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars fa-lg"></i>
                    </span>
                </Navbar>
            </div>
        );
    }
}

export default NavComponent;