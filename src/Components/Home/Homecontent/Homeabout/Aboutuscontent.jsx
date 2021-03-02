import React from "react";
import style from "./homeabout.module.css"
import {Col, Row} from "react-bootstrap";

const Aboutuscontent = () => {
    return (
        <Row className={"pl-2 w-100 " + style.aboutText + " " + style.aboutImgHeight + " " + style.whiteSpace}>
            <Col md={12} xs={12} className="pl-5 pb-5 pt-5">
                <h1>“EVENTOVO AGENCY”</h1>
            </Col>
            <Col md={4} xs={12}
                 className={"d-flex align-items-center justify-content-md-center " + style.aboutTextStrategy}>
                <Row>
                    <Col md={8} xs={7} className="pt-5 pr-0">
                        <Col md={12} className="pt-5 pl-5 pr-0">
                            <h2>Стратегия</h2>
                        </Col>
                        <Col md={12} className="pl-5 pr-0">
                            <h3 className={style.whiteSpace}>Задаем правильные<br/>вопросы и умеем слушать<br/>отеты.
                            </h3>
                        </Col>
                    </Col>
                    <Col md={4} xs={4} className="d-flex align-items-center justify-content-md-end pb-5 pr-5 ">
                        <span className={style.gradientText1}>1</span>
                    </Col>
                </Row>
            </Col>
            <Col md={4} xs={12}
                 className={"d-flex align-items-center justify-content-md-center " + style.aboutTextStrategy}>
                <Row>
                    <Col md={8} xs={6} className="pt-5 pr-0">
                        <Col md={12} className="pl-5 pt-5 pr-0">
                            <h2>Взаимодействие</h2>
                        </Col>
                        <Col md={12} className="pl-5 pr-0">
                            <h3>Менеджер будет <br/>находится <br/>с вами на связи <br/>24/7. </h3>
                        </Col>
                    </Col>
                    <Col md={4} xs={4} className="d-flex align-items-center justify-content-md-end pb-5 pr-3">
                        <span className={style.gradientText2}>2</span>
                    </Col>
                </Row>
            </Col>
            <Col md={4} xs={12}
                 className={"d-flex align-items-center justify-content-md-center " + style.aboutTextStrategy}>
                <Row>
                    <Col md={8} xs={6} className="pt-5 pr-0">
                        <Col md={12} className="pt-5 pl-5 pr-0">
                            <h2>Креатив</h2>
                        </Col>
                        <Col md={12} className="pl-5 pr-0">
                            <h3>Каждое мероприятие <br/>составляется индивидуально <br/>учитывая все <br/>нюансы.</h3>
                        </Col>
                    </Col>
                    <Col md={4} xs={4} className="d-flex align-items-center justify-content-md-end pb-5 pr-5">
                        <span className={style.gradientText3}>3</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Aboutuscontent;