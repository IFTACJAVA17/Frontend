import React, { Component } from 'react';
import {Navbar, Nav, NavbarBrand, Dropdown, NavItem, NavLink, Collapse, FormGroup, Form, Button, Input } from 'reactstrap';
import './nav.scss';

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

    render() {
        return (
            <div>
                <Navbar className="bg-secondary">
                    <span className="navbar-toggler" onClick={this.toggle}>
                        <i className="fas fa-bars fa-lg"></i>
                    </span>
                    <NavbarBrand className="navbar-brand order-0">IGaming</NavbarBrand>
                    <Form inline>
                        <FormGroup>
                            <Input type="email" name="email" id="emailInput" placeholder="email" />
                            <Input type="password" name="password" id="passwordInput" placeholder="password" />
                        </FormGroup>
                        <Button className="btn btn-success">Log in</Button>
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

export default NavComponent;