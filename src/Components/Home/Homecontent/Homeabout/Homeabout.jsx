import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homeabout.module.css"
import Aboutuscontent from "./Aboutuscontent";

const Homeabout = () => {
    return (
        <Row>
            <Col className="col-md-12">
                <div className={style.aboutGifHeight}>
                    <img className="h-100 w-100" src="gif/gifabout.png" alt="gifabout"/>
                </div>
            </Col>
            <Col className="col-md-12">
                <div className={style.aboutImgHeight}>
                    <img className="h-100 w-100" src="img/Rectangle104.png" alt="Rectangle104"/>
                </div>
                <div className={style.aboutText}>
                    <Aboutuscontent/>
                </div>
            </Col>


        </Row>
    )
}

export default Homeabout;