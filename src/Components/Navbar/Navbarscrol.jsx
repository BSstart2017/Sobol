import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import style from "../Home/Homepage/Homeheader/homeheader.module.css";

const Navbarscrol = () => {
    return (
        <Row className={"w-100 bg-white " + style.positionNavbarScroll}>
            <Col className="d-flex align-items-center justify-content-center">
                <div className={style.headerLogoTest}>
                    <p>evento</p>
                    <p> agency</p>
                    <p> Minsk<span className={style.headerLogoColorBlue}>.</span></p>
                </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
                <div className={style.headerLogoTest}>
                    <p><span className={style.headerLogoColorNumber}>+375(29)</span> 298-98-98</p>
                </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
                <div >
                    <Button className={style.headerButtonHeight} type="submit">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</Button>
                </div>
            </Col>
            <Col>
                <span>ENG</span>
            </Col>
        </Row>
    )
}

export default Navbarscrol;