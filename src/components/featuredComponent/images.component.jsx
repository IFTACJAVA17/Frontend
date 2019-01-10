import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class Images extends Component {

    render() {
        const { image } = this.props;
        let toRender;
        console.log(image.src2)
        if (image.src2 === "" || image.src2 === undefined) {
            console.log(image)
            toRender = <div><img src={image.src1} alt={image.altText} /> </div>;
        } else {
            toRender = (
                <Row>
                    <Col><img src={image.src1} alt={image.altText} /></Col><Col><img src={image.src2} alt={image.altText} /></Col>
                </Row>
            )
        }
        return (
            toRender
        )
    }
}