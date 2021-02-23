import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import style from "../Home/Homepage/Homeheader/homeheader.module.css";
import {connect} from "react-redux";
import {transformPopUp} from "../../Redux/popUpReducer";

const Navbarscrol = (props) => {
    const openPopUp = () => {
        props.transformPopUp(true)
    }
    return (
        <Row className={"w-100 bg-white " + style.positionNavbarScroll}>
            <Col className="col-md-3 d-flex align-items-center justify-content-center">
                <div>
                    <p className={style.navbarScrollText}>evento
                        <span className={style.headerLogoColorBlue}>.</span>
                    </p>
                </div>
            </Col>
            <Col className="col-md-2 d-flex align-items-center justify-content-center">
                <div >
                    <p className={style.navbarScrollText}>О НАС</p>
                </div>
            </Col>
            <Col className="col-md-3 d-flex align-items-center justify-content-center">
                <div>
                    <p className={style.navbarScrollTextNumber}><span className={style.headerLogoColorNumber}>
                        +375(29)</span> 298-98-98</p>
                </div>
            </Col>
            <Col className="col-md-3 p-2 d-flex align-items-center justify-content-center">
                <div>
                    <Button onClick={openPopUp} className={"p-3 " + style.headerButtonHeight} type="submit">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</Button>
                </div>
            </Col>
            <Col className={"col-md-1 d-flex align-items-center  justify-content-center pl-5 " + style.navbarScrollTextEng}>
                <span>ENG</span>
            </Col>
        </Row>
    )
}

export default connect(null, {transformPopUp}) (Navbarscrol);