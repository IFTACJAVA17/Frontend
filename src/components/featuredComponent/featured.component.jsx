import React, { Component } from 'react';
import { Carousel, CarouselIndicators, CarouselControl, CarouselItem } from 'reactstrap';
import Images from './images.component';

import ImageData from './images-mock.json';
import './featuredComponent.scss';

export default class FeaturedComponent extends Component {

    constructor(props){
        super(props);
        this.state = { 
            activeIndex: 0,
            images: ImageData
         };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.images.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.images.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }


      render() {
        const { activeIndex, images } = this.state;
        let counter = 0;
        const slides = images.map((image) => {
          return (
            <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={counter = counter + 1}
            >
              <Images image={image} />
            </CarouselItem>
          )
        });
    
        return (
          <div className="featuredContainer">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
              >
              <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </div>
        );
      }
}
