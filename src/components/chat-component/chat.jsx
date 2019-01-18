import * as React from 'react';
import './chat_style.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Chat = (props) => {
    return (
        <div className="chatlist">
            <div className="header">
                <h5>{props.header}</h5>
            </div><br></br>
                <div>
                    <textarea className="texty" readOnly disabled></textarea><br></br>
                    <input className="inputy" placeholder="Skriv här..."></input>
                </div>
        </div>
    );
}



export default Chat;