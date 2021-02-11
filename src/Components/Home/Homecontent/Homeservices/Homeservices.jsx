import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homeservices.module.css";


const Homeservices = () => {
    return (
        <Row className={"pr-0 mr-0 ml-0 " + style.rowBgColor}>
            <Col className="col-md-12 pr-0">
                    <h2 className={"pt-5 text-right " + style.textStyle}>Последние кейсы,<br/>как это было:</h2>
                <Col className={"col-md-10 pr-0 pt-5  " + style.imgFishPadding}>
                    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + "/img/fish1.png"} alt="Fish1"/>
                </Col>
                <Row className="pr-0 mr-0 ml-0">
                <Col className={"col-md-4 pr-0 " + style.imgFishPadding}>
                    <img className="img-fluid w-100 h-75" src={process.env.PUBLIC_URL + "/img/fish2.png"} alt="Fish2"/>
                </Col>
                <Col className="col-md-6 pr-0 pl-0">
                    <img className="img-fluid w-100 h-75" src={process.env.PUBLIC_URL + "/img/fish3.png"} alt="Fish2"/>
                </Col>
                </Row>
                <Col className={"col-md-4 position-absolute h-50 w-100 " + style.containerText}>
                    <div className={"pb-0 " + style.carouselsDiv}>
                        <div className="d-flex pl-5 pt-5">
                            <h2>Бизнес- <br/>мероприятия</h2>
                        </div>
                        <div className="d-flex pl-5 pt-3">
                            <h3>Бизнес-мероприятия – это конференции,<br/>
                                семинары, тренинги, форумы, деловые <br/>
                                завтраки, бизнес-митинги, презентации <br/>
                                и выставки. Основная их цель – создать <br/>
                                оптимальные условия для общения,<br/>
                                обмена идеями, решения важных <br/>
                                вопросов.
                            </h3>
                        </div>
                        <div className="d-flex justify-content-between pl-5 pt-5 pr-5 ">
                            <div className={"text-center pt-2 " + style.carouselsTextBorderButton}>
                                <h4>УЗНАТЬ ПОДРОБНЕЕ</h4>
                            </div>
                        </div>
                    </div>
                </Col>
            </Col>
            <Col className="col-md-12 pr-0 ">
                <h2 className={"pt-5 text-right " + style.textStyle}>Последние кейсы,<br/>как это было:</h2>
                <Col className={"col-md-10 pr-0 pt-5 " + style.imgFishPadding}>
                    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + "/img/fish1.png"} alt="Fish1"/>
                </Col>
                <Row className="pr-0 mr-0 ml-0">
                    <Col className={"col-md-4 pr-0 " + style.imgFishPadding}>
                        <img className="img-fluid w-100 h-75" src={process.env.PUBLIC_URL + "/img/fish2.png"} alt="Fish2"/>
                    </Col>
                    <Col className="col-md-6 pr-0 pl-0">
                        <img className="img-fluid w-100 h-75" src={process.env.PUBLIC_URL + "/img/fish3.png"} alt="Fish2"/>
                    </Col>
                </Row>
            </Col>
            <Col className="col-md-12 pr-0 ">
                <h2 className={"pt-5 text-right " + style.textStyle}>Последние кейсы,<br/>как это было:</h2>
                <Col className={"col-md-10 pr-0 pt-5 " + style.imgFishPadding}>
                    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + "/img/fish1.png"} alt="Fish1"/>
                </Col>
                <Row className="pr-0 mr-0 ml-0">
                    <Col className={"col-md-4 pr-0 " + style.imgFishPadding}>
                        <img className="img-fluid w-100 h-75" src={process.env.PUBLIC_URL + "/img/fish2.png"} alt="Fish2"/>
                    </Col>
                    <Col className="col-md-6 pr-0 pl-0">
                        <img className="img-fluid w-100 h-75" src={process.env.PUBLIC_URL + "/img/fish3.png"} alt="Fish2"/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}


export default Homeservices;