import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import style from "./homeheader.module.css";


const Headerbutton = () => {
    return (
            <Row className="h-100">
                <Col className="d-flex align-items-center justify-content-center">
                    <div >
                        <Button className={style.headerButtonHeight} type="submit">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</Button>
                    </div>
                </Col>
            </Row>
    )
}

export default Headerbutton;