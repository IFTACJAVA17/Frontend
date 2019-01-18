import React, { Component } from 'react';

export default class ExampleImage extends Component {
	constructor(props) {
		super(props);
	}
	
   render() {
       const { image } = this.props;
		console.log(image)

       return (
           <div><img src={image.src} alt={image.altText} width="100%" /> </div>
       )
   }
}