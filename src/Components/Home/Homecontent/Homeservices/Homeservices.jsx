import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homeservices.module.css";


const Homeservices = () => {
    return (
        <Row className={"pr-0 mr-0 ml-0 " + style.rowBgColor}>
            <Col className="col-md-12 pr-0">
                <h2 id="services" className={"pt-5 text-right " + style.textStyle}>Последние кейсы,<br/>как это было:</h2>
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
                <Col className={"col-md-4 position-absolute w-100 " + style.containerText + " " + style.carouselsDiv}>
                            <h2 className="d-flex pl-5">Корпаративный <br/>викенд</h2>
                            <h3 className="d-flex pl-5 pt-5">Бизнес-мероприятия – это <br/>
                            конференции, семинары, тренинги, <br/>
                            форумы, деловые завтраки,<br/>
                            бизнес-митинги, презентации и <br/>
                            выставки. Основная их цель – создать <br/>
                            оптимальные условия для общения,<br/>
                            обмена идеями, решения важных <br/>
                            вопросов.
                            </h3>
                        <div className="d-flex justify-content-between p-5">
                            <div className={"text-center pt-2 " + style.carouselsTextBorderButton}>
                                <h4 className="mt-2 mr-5 ml-5 mb-3">УЗНАТЬ ПОДРОБНЕЕ</h4>
                            </div>
                        </div>
                </Col>
            </Col>
            <Col className="col-md-12 pr-0 pb-5">
                <Col className={"col-md-10 pr-0 " + style.imgFishPadding}>
                    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + "/img/tourism1.png"} alt="tourism1"/>
                </Col>
                <Row className="pr-0 mr-0 ml-0">
                    <Col className={"col-md-6 pr-0 " + style.imgFishPadding}>
                        <img className="img-fluid w-100 h-100" src={process.env.PUBLIC_URL + "/img/tourism2.png"} alt="tourism2"/>
                    </Col>
                    <Col className="col-md-4 pr-0 pl-0">
                        <img className="img-fluid w-100 h-100" src={process.env.PUBLIC_URL + "/img/tourism3.png"} alt="tourism3"/>
                    </Col>
                </Row>
                <Col className={"col-md-4 position-absolute w-100 " + style.containerTextTourism + " " + style.carouselsDiv}>
                    <h2 className="d-flex pl-5">Party dla Lenovo</h2>
                    <h3 className="d-flex pl-5 pt-5">Корпаративное мероприятие <br/>
                    на Ивана- купало. <br/>
                    Организовано на пляже <br/>
                    Балтийского моря, закат, <br/>
                    костер и музыка и <br/>
                    бесконечная атмосфера <br/>
                    праздника и романтики.
                    </h3>
                    <div className="d-flex justify-content-between p-5">
                        <div className={"text-center pt-2 " + style.carouselsTextBorderButton}>
                            <h4 className="mt-2 mr-5 ml-5 mb-3">УЗНАТЬ ПОДРОБНЕЕ</h4>
                        </div>
                    </div>
                </Col>
            </Col>
            <Col className="col-md-12 pr-0">
                <Col className={"col-md-10 pr-0 pt-5 " + style.imgFishPadding}>
                    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + "/img/eat1.png"} alt="eat1"/>
                </Col>
                <Row className="pr-0 mr-0 ml-0">
                    <Col className={"col-md-3 pr-0 " + style.imgFishPadding}>
                        <img className="img-fluid w-100 h-75" src={process.env.PUBLIC_URL + "/img/eat2.png"} alt="eat2"/>
                    </Col>
                    <Col className="col-md-7 pr-0 pl-0">
                        <img className="img-fluid w-100 h-75" src={process.env.PUBLIC_URL + "/img/eat3.png"} alt="eat4"/>
                    </Col>
                </Row>
                <Col className={"col-md-4 position-absolute w-100 " + style.containerTextEat + " " + style.carouselsDiv}>
                    <h2 className="d-flex pl-5">Кулинарны мастер-<br/>класс</h2>
                    <h3 className="d-flex pl-5 pt-5">Итальянский повар обучил <br/>
                    коллектив не только вкусно <br/>
                    готовить, но и взаимодействовать в <br/>
                    команде и рассчитывать время <br/>
                    необходимое для выполнения <br/>
                    совместных задач.
                    </h3>
                    <div className="d-flex justify-content-between p-5">
                        <div className={"text-center pt-2 " + style.carouselsTextBorderButton}>
                            <h4 className="mt-2 mr-5 ml-5 mb-3">УЗНАТЬ ПОДРОБНЕЕ</h4>
                        </div>
                    </div>
                </Col>
            </Col>
            <Col className="col-md-10"><a className={"d-flex justify-content-end pb-5 " + style.textNext}>Смотреть ещё > </a></Col>
        </Row>
    )
}


export default Homeservices;