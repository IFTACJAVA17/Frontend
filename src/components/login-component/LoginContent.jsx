import React from 'react';
import LoginButtons from './LoginButtons';
import './LoginStyle.scss';
import './LoginButtonsStyle.scss';



class LoginContent extends React.Component {




    render(){
        return <div className="login-div">
            <LoginButtons></LoginButtons>
        </div>
    }

}

export default LoginContent;

