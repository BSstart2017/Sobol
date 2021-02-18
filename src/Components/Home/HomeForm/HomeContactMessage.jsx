import React from "react";
import style from "./homeform.module.css";
import {Col, Row} from "react-bootstrap";

const HomeContactMessage = () => {
    return (
        <Row className="pt-5 pb-5">
            <Col className={"col-md-3 pt-5 " + style.styleTextLeft}>
                <h2 className="p-2 pt-5">e-mail:</h2>
                <h2 className="p-2">телефон:</h2>
                <h2 className="p-2">адрес:</h2>
            </Col>
            <Col className={"col-md-8 pt-5 " + style.styleTextRight}>
                <h2 className="p-2 pt-5">evento@klub.by</h2>
                <h2 className="p-2">+375(29) 298-98-98</h2>
                <h2 className="p-2 pb-5" >211387, Минск, ул. Немига 56, офис 2</h2>
            </Col>
        </Row>
    )
}
export default HomeContactMessage;