import React, { Component } from 'react';
import { CarouselItem, Carousel, CarouselControl } from 'reactstrap';
import { highscoreRef } from '../../config/firebase'
import HighscoreData from './highscore-mock.json';
import ScoreList from './rankinglist.component.jsx';
import './highscoreComponent.scss';
import rand from 'random-key';

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

    componentDidMount(){
        highscoreRef.on('value', (snap) => this.fetchHighscore(snap));
    }

    componentWillMount(){
        this.fetchHighscore = (snap) => {
            /*
                HEADS UP! This is taking the mockdata and the firebase db-data and concats them.
                If thing were diffrent with more games live no concatenation would be done and gamesFromDb 
                would be set to the state.
             */
            if(snap.val() !== undefined && snap.val() !== null) {
                const staterankings = this.state.rankings;
                const games = snap.val();
                const gamesFromDb = Object.keys(snap.val()).map(gameName => {
                    const gameScore = games[gameName];
                    const gameObj = {
                        gameId: parseInt(rand.generateDigits(3)),
                        gameName: gameName,
                        scores: gameScore
                    }
                    return gameObj;
                });
                const rankings = staterankings.concat(gamesFromDb); //right here is the weirdness. 
                this.setState({rankings});
            }
        }
    }

    componentWillUnmount(){
        highscoreRef.off('value', (snap) => this.fetchHighscore(snap));
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

    renderScores() {
        const { activeIndex, rankings } = this.state;

        const slides = rankings.map((ranking) => {
            const sortedScores = ranking.scores.sort((a, b) => b.score - a.score);
            const scores = sortedScores.slice(0, 10); //slice array to only display 10 highest scores.
            return (

                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={ranking.gameId}
                >
                    <h5 className="text-primary">{ranking.gameName}</h5>
                    <ScoreList scores={scores} />
                </CarouselItem>
            );
        });

        return (

            <Carousel
                className="scoreCarousel"
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                {slides}
                <CarouselControl className="carouselArrow" direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl className="carouselArrow" direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }

    render() {
        return (
            <div className="carouselContainer">
                <div className="header">
                    <h5>Score</h5>
                </div>
                {this.renderScores()}
            </div>
        );
    }
}