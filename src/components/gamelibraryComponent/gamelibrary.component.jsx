import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class GameLibrary extends Component {
    
    render(){
        return(
            <Container>
                <Row>
                    <Col><Link to='/KungensAllaHattar'><img src='./assets/spel.png' width= "100%"></img></Link></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }


}
