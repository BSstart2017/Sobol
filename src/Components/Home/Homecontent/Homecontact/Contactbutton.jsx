import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homecontact.module.css";

const Contactbutton = () => {
    return (
        <Row>
            <Col className="col-md-5 p-0 d-flex justify-content-end text-center">
                <div className={"d-flex align-items-center justify-content-center text-center " + style.divHeight}>
                    <h2 className={style.buttonText}>Бизнес-<br/>мероприятия</h2>
                </div>
            </Col>
            <Col className="col-md-2 p-0 d-flex justify-content-center text-center">
                <div className={"d-flex align-items-center justify-content-center text-center " + style.divHeight}>
                    <h2 className={style.buttonText}>Семейные-<br/>мероприятия</h2>
                </div>
            </Col>
            <Col className="col-md-5 d-flex justify-content-between text-center p-0">
                <div className={"d-flex align-items-center justify-content-center text-center " + style.divHeight}>
                    <h2 className={style.buttonText}>Ночные-<br/>мероприятия</h2>
                </div>
            </Col>
            <Col className="col-md-5 p-0 d-flex justify-content-end text-center">
                <div className={"d-flex align-items-center justify-content-center text-center " + style.divHeight}>
                    <h2 className={style.buttonText}>Спортивные-<br/>мероприятия</h2>
                </div>
            </Col>
            <Col className="col-md-2 p-0 d-flex justify-content-center text-center">
                <div className={"d-flex align-items-center justify-content-center text-center " + style.divHeight}>
                    <h2 className={style.buttonText}>HR-<br/>мероприятия</h2>
                </div>
            </Col>
            <Col className="col-md-5 d-flex justify-content-between text-center p-0">
                <div className={"d-flex align-items-center justify-content-center text-center " + style.divHeight}>
                    <h2 className={style.buttonText}>Индивидуальные<br/>мероприятия</h2>
                </div>
            </Col>
        </Row>
    )
}

export default Contactbutton;