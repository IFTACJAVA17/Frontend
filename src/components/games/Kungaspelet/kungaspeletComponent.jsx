import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class KungaspeletComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
    }

    componentDidMount() {
        window.addEventListener('message', this.addScoreToState);
    }

    addScoreToState = (e) => {
        if (e.origin !== 'https://patrikolin.github.io') {
            return;
        } else {
            this.setState({
                score: e.data
            })
        }
    }

 
    render() {
        return (
            <Iframe url= "https://patrikolin.github.io/Kungaspelet/"
            width="92%"
            height="85%"
            />
            );
        }
}