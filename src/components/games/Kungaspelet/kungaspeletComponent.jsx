import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import { highscoreRef } from '../../../config/firebase'

class KungaspeletComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            scores: []
        };
    }

    componentDidMount() {
        window.addEventListener('message', this.addScoreToState);
        highscoreRef.child('kungensallahattar').on('value', (snap) => {
            this.fetchHighscore(snap);
        });
        // Use this method to test the addScoreToDatabaseMetod.
        /*setTimeout(() => {
            this.addScoreToDatabase({score: 32, userName: 'Emil Sundvall', userId: "tJ3KWf9pBsYLnFLSpJuI2MfdD452"})
        },5000); */
    }

    componentWillMount(){
        let scores = [];
        this.fetchHighscore = (snap) => {
            if(snap.val() !== undefined && snap.val() !== null) {
                scores = snap.val(); 
                this.setState({scores});
            }
        }
        this.addScoreToDatabase = (scoreObj) => {
            const scores = this.state.scores;
            if(scores.length === 0) {
                scores.push(scoreObj);
            } else {
                for (let score of scores) {
                    if(score.userId === 'guestId') {
                        break;
                    } else if (scores.some(score => score.userId === scoreObj.userId)) {
                        //console.log('this should change a score')
                        if(score.userId === scoreObj.userId) {
                            if(score.score < scoreObj.score){
                                //console.log('new bigger')
                                score.score = scoreObj.score;
                            }
                            break;
                        }
                    } else {
                        //console.log('this should add a score')
                        scores.push(scoreObj);
                        break;
                    }
                    
                }
            }
            highscoreRef.child('kungensallahattar').set(scores);
        }
    }


    componentWillUnmount(){
        highscoreRef.child('kungensallahattar').off('value', this.fetchHighscore);
    }

    addScoreToState = (e) => {
        if (e.origin !== 'https://patrikolin.github.io') {
            return;
        } else {
            
            this.setState({
                score: e.data,
            }, () => {
                if(e.data > 0) {
                    const scoreObj = { score: e.data, userName: this.props.user.displayName, userId: this.props.user.uid}
                    this.addScoreToDatabase(scoreObj)
                } else {
                    console.log('you lost');
                }
            })
        }
    }


    render() {
        return (
            <Iframe url="https://patrikolin.github.io/Kungaspelet/"
                width="92%"
                height="85%"
            />
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps, actions)(KungaspeletComponent);