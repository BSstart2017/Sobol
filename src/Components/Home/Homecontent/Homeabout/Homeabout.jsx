import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homeabout.module.css"
import Aboutuscontent from "./Aboutuscontent";

const Homeabout = () => {
    return (
        <Row>
            <Col md={12}>
                <div className={style.slider + " " + style.sliderXS}>
                </div>
            </Col>
            <Col md={12} className="pr-0">
                <Aboutuscontent/>
            </Col>
        </Row>
    )
}

export default Homeabout;