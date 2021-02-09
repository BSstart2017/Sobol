import React from "react";
import {Carousel, Col} from "react-bootstrap";
import style from "./homecontact.module.css";

const Contactcarousels = () => {
    return (
        <Col className={"h-100 " + style.carouselsHeight}>
            <Carousel >
                <Carousel.Item>
                    <img className="d-block w-100 h-100" src="img/Rectangle45.png" alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-100" src="img/Rectangle104.png" alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-100" src="img/biznes.png" alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Col>
    )
}


export default Contactcarousels;