import React, { Component } from 'react';
import './gameLayoutContainer.scss';
import ImageData from './exampleimage-mock.json';
import ExampleImage from './exampleimage.component';

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
             
            <ExampleImage image={images[0]} />
            </div>
        )
        }
    }