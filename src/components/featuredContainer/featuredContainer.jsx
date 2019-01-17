import React from 'react';
import './featuredContainer.scss';

const center = {
    textAlign: 'center',
    lineHeight: '12rem'
}

const FeaturedContainerComponent = (props) => {
    return (
        <div className="featured-container">
            <h4 style={center}>{props.text}</h4>
        </div>
    );
}

export default FeaturedContainerComponent;