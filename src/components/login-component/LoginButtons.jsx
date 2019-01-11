import React from 'react';
//import { googleProvider, facebookProvider } from '../bin/firebase.js';
import { Button, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { signInWithEmailAndPassword, signInWithProvider, googleProvider } from '../Firebase/firebase.js';


library.add(faIgloo)

const INITIAL_STATE = {
    email: 'marcusjohanss94@gmail.com',
    password: 'BLAJblaj',
    error: null
}

class SigninButtons extends React.Component {

    testLogin(){
        //signInWithEmailAndPassword(INITIAL_STATE.email, INITIAL_STATE.password);
        signInWithProvider(googleProvider); //loggar in med google. 
    }
    
    render (){
       return <div>
           <h1 className="login-title">Login</h1>
                <div className="login-button-div">
                    <Row className="signin-button-row">
                        <Col>
                            <Button className='btn-social btn-google signin-button' onClick={this.testLogin}><i className="fab fa-google icon-fixer"></i>Sign in</Button>
                        </Col>
                    </Row>
                    <Row className="signin-button-row">
                        <Col>
                            <Button className='btn-social btn-facebook signin-button' /*onClick={() => props.login(facebookProvider)}*/><i className="fab fa-facebook icon-fixer"></i>Sign in</Button>
                        </Col>
                    </Row>
                </div>
        </div>
    }
    
}
export default SigninButtons;