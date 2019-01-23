import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

const imageStyle = {
    objectFit: "cover",
    maxHeight: '10em',
}

export default class Images extends Component {

    render() {
        const { image } = this.props;
        let toRender;
        if (image.src2 === "" || image.src2 === undefined) {
            toRender = (
            <Row className="featuredImage">
                <Col>
                    <img src={image.src1} alt={image.altText} style={imageStyle}/>
                    <h5 className="text-primary">{image.game}</h5>
                </Col>
            </Row>);
        } else {
            toRender = (
                <Row className="featuredImage">
                    <Col>
                        <img src={image.src1} alt={image.altText} style={imageStyle} />
                        <h5 className="text-primary">{image.game}</h5>
                    </Col>
                    <Col>
                        <img src={image.src2} alt={image.altText} style={imageStyle}/>
                        <h5 className="text-primary">{image.game}</h5>
                    </Col>
                </Row>
            );
        }
        return (
            toRender
        )
    }
}