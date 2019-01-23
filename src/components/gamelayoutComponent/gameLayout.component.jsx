import React, { Component } from 'react';
import './gameLayoutContainer.scss';
import ImageData from './exampleimage-mock.json';
import ExampleImage from './exampleimage.component';
import KungaspeletComponent from '../games/Kungaspelet/kungaspeletComponent';

export default class GameLayout extends Component {
    constructor(props){
        super(props);
        this.state = { 
            images: ImageData
        };
    }
    
    render() {
        const { images } = this.state;
        
        return (
            <div className='gamelayout-container'>
                <KungaspeletComponent />
            </div>
        )
        }
    }