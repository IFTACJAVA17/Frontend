import React, { Component } from 'react';
import './gameLayoutContainer.scss';
import ImageData from './exampleimage-mock.json';

import KungaspeletComponent from '../games/Kungaspelet/kungaspeletComponent';

export default class GameLayout extends Component {
    constructor(props){
        super(props);
        this.state = { 
            images: ImageData
        };
    }
    
    render() {

        
        return (
            <div className='gamelayout-container'>
                <KungaspeletComponent />
            </div>
        )
        }
    }