import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class GameLibrary extends Component {
    
    render(){
        return(
            <Container>
                <Row>
                    <Col><Link to='/KungensAllaHattar'><img src='./assets/spel.png' width= "100%"></img></Link></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        )

import Gallery from 'react-grid-gallery';


export default class GameLibrary extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        };

    }


}


GameLibrary.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "lightblue",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "1px"
};

GameLibrary.defaultProps = {
    images: [
        {
            src: "./assets/spel.png",
            thumbnail: "./assets/spel.png",
            thumbnailWidth: 320,
            thumbnailHeight: 160,
            tags: [{value: "Puzzle", title: "Hextris"}],
            caption: "An addictive puzzle game inspired by Tetris"
        },
        {
            src: "https://i.ytimg.com/vi/0BD0myegQlE/hqdefault.jpg",
            thumbnail: "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Folliebarder%2Ffiles%2F2018%2F03%2Fsuper_mario_plumber_new-1200x675.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 160,
            tags: [{value: "Classic | Adventure", title: "Mario JS"}],
            caption: "This is a clone of Infinite Mario, written in JavaScript for web browsers using HTML5."
        }
    ]
};

