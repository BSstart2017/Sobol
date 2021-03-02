import React from "react";
import {Col, Row} from "react-bootstrap";
import Headerlogonumber from "./Headerlogonumber";
import style from "./homeheader.module.css";
import Headerbutton from "./Headerbutton";


const Homeheader = () => {
    return (
            <Row className={"pt-5 pb-5 " + style.paddingBottomXS1 + " " + style.paddingTopXS2}>
                <Col md={9} xs={12}>
                    <Headerlogonumber />
                </Col>
                <Col md={3} className="d-none d-sm-block">
                    <Headerbutton />
                </Col>
            </Row>
    )
}

export default Homeheader;