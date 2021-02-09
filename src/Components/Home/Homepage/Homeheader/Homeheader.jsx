import React from "react";
import {Col, Row} from "react-bootstrap";
import Headerbutton from "./Headerbutton";
import Headerlogonumber from "./Headerlogonumber";
import style from "./homeheader.module.css";


const Homeheader = () => {
    return (
            <Row className={style.homeHeaderHeight}>
                <Col className="col-md-9">
                    <Headerlogonumber />
                </Col>
                <Col className="col-md-3">
                    <Headerbutton />
                </Col>
            </Row>
    )
}

export default Homeheader;