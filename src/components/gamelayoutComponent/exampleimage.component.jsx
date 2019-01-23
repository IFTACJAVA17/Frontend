import React, { Component } from 'react';

export default class ExampleImage extends Component {

   render() {
       const { image } = this.props;
       return (
           <div><img src={image.src} alt={image.altText} width="100%" /> </div>
       )
   }
}