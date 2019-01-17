import React from 'react';
//import { googleProvider, facebookProvider } from '../bin/firebase.js';
import { Button, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { signInWithEmailAndPassword, signInWithProvider, googleProvider, facebookProvider } from '../Firebase/firebase.js';


library.add(faIgloo)

const INITIAL_STATE = {
    email: 'marcusjohanss94@gmail.com',
    password: 'BLAJblaj',
    error: null
}

class SigninButtons extends React.Component {

    login(provider){
        //signInWithEmailAndPassword(INITIAL_STATE.email, INITIAL_STATE.password);
        //signInWithProvider(googleProvider); //loggar in med google. 
        signInWithProvider(provider);
    }
    
    render (){
       return <div>
           <h1 className="login-title">Login</h1>
                <div className="login-button-div">
                    <Row className="signin-button-row">
                        <Col>
                            <Button className='btn-social btn-google signin-button' onClick={() => this.login(googleProvider)}><i className="fab fa-google icon-fixer"></i>Sign in</Button>
                        </Col>
                    </Row>
                    <Row className="signin-button-row">
                        <Col>
                            <Button className='btn-social btn-facebook signin-button' onClick={() => this.login(facebookProvider)}><i className="fab fa-facebook icon-fixer"></i>Sign in</Button>
                        </Col>
                    </Row>
                </div>
        </div>
    }
    
}
export default SigninButtons;