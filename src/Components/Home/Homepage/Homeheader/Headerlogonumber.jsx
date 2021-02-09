import React from "react";
import {Col, Row} from "react-bootstrap";
import "../../../../App.css"
import style from "./homeheader.module.css";


const Headerlogonumber = () => {
    return (
            <Row className="h-100">
                <Col className="col-md-5 d-flex align-items-center justify-content-center">
                    <div className={style.headerLogoTest}>
                        <p>evento</p>
                        <p> agency</p>
                        <p> Minsk<span className={style.headerLogoColorBlue}>.</span></p>
                    </div>

                </Col>
                <Col className="col-md-7 d-flex align-items-center justify-content-center">
                    <div className={style.headerLogoTest}>
                        <p><span className={style.headerLogoColorNumber}>+375(29)</span> 298-98-98</p>
                    </div>
                </Col>
            </Row>
    )
}

export default Headerlogonumber;