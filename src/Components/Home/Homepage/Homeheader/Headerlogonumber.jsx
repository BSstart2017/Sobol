import React from "react";
import {Col, Row} from "react-bootstrap";
import "../../../../App.css"
import style from "./homeheader.module.css";


const Headerlogonumber = () => {
    return (
            <Row className="h-100">
                <Col md={5} xs={12} className="d-flex align-items-center justify-content-md-center">
                    <div className={"p-md-0 m-md-0 w-25 col-pl-5 " + style.headerLogoTest + " " + style.widthsXS}>
                       <h1 className={style.paddingLeftXS2}>
                           evento agency Minsk<span>.</span></h1>
                    </div>
                </Col>
                <Col md={7} className="d-none d-sm-block ">
                    <Col className={"d-flex align-items-center justify-content-center h-100 " + style.headerLogoTest}>
                        <h1><span>+375(29)</span> 298-98-98</h1>
                    </Col>
                </Col>
            </Row>
    )
}

export default Headerlogonumber;