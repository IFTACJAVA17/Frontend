import React, { Component } from 'react';
import Images from './exampleimage.component';
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
        const center = {
            textAlign: 'center',
            lineHeight: '25rem'
        }
        const { images } = this.state;
        
        console.log(images);
        
        return (
            <div className='gamelayout-container'>
             
            <ExampleImage image={images[0]} />
            </div>
        )
        }
    }