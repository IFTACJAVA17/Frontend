import React, { Component } from 'react';
import { CarouselItem, Carousel, CarouselControl } from 'reactstrap';

import HighscoreData from './highscore-mock.json';
import ScoreList from './rankinglist.component.jsx';

export default class Highscore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rankings: HighscoreData,
            activeIndex: 0
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    componentDidMount() {
        console.log(this.state.rankings);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.rankings.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.rankings.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex, rankings } = this.state;

       

        const slides = rankings.map((ranking) => {
            const scores = ranking.scores.sort((a,b) => b.score - a.score);
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={ranking.gameId}
                >
                    <h5>{ranking.gameName}</h5>
                    <ScoreList scores={scores} />
            </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}