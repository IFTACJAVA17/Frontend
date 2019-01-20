import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';


export default class GameLibrary extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        };
    }
    handleOnClick = () => {
        // some action...
        // then redirect
        this.setState({redirect: true});
      }

      

    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }

    render () {
        var images =
                this.state.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                            {i.hasOwnProperty('tags') &&
                             this.setCustomTags(i)}
                        </div>);
                    return i;
                });


        return (
                <div style={{
                    display: "block",
                    minHeight: "160px",
                    width: "100%",
                    overflow: "auto"}}>
                <Gallery
            images={images}
            enableImageSelection={false}/>
                </div>
        );
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
            thumbnailWidth: "30%",
            thumbnailHeight: 160,
            tags: [{value: "Puzzle", title: "Kungens Alla Hattar"}],
            caption: "An addictive puzzle game created by Patrik Olin"
        }
    ]
};
