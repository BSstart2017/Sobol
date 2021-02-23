import React from "react";
import {Col, Row} from "react-bootstrap";
import Headerlogonumber from "./Headerlogonumber";
import style from "./homeheader.module.css";
import Headerbutton from "./Headerbutton";


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