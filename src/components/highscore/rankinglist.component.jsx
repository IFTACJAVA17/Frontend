import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './rankinglistComponent.scss';


export default class ScoreList extends Component {

    constructor(props){
        super(props);
        this.state = {
            scores: props.scores
        }
    }

    render(){
        let rank = 0;
        const scores = this.state.scores.map(score => {
            return (
                <Row key={score.userId}>
                    <Col>
                    <p>{rank = rank + 1}</p>
                    </Col>
                    <Col>
                    <p>{score.userName}</p>
                    </Col>
                    <Col>
                    <p>{score.score}</p>
                    </Col> 
                </Row>
            )
        });
        return(
            <div style={{width: '90%', margin: 'auto'}}>
                <Row style={{fontWeight: 'bold'}}>
                    <Col>#</Col><Col>User</Col><Col>Score</Col>
                </Row>
                {scores}
            </div>
        )
    }
}