import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homecontact.module.css";

const Contactcarousels = (props) => {
    debugger
    let ElementsTextServicesH2 = props.carouselsService.map(p =>
        <h2 key={p.id}>{p.textServicesH2}</h2>)

    return (
        <Row>
            <Col className="col-md-12 pr-0 pt-5">
                <div>
                    <img className="w-100 img-fluid" src={process.env.PUBLIC_URL + "/img/biznes.png"} alt="HomeLogo"/>
                    <div className={"pb-0 " + style.carouselsDiv}>
                        <div className="d-flex pl-5 pt-5">
                            {ElementsTextServicesH2[1]}
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
                            <div className={"text-center pt-2 " + style.carouselsTextBorderButton}><h4>ЗАКАЗАТЬ</h4>
                            </div>
                            <div className={"text-center pt-2 " + style.carouselsTextBorderButton}><h4>ПОРТФОЛИО</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="d-flex justify-content-between">
                    <div>
                        <h2>ПРЕДЫДУЩИЙ ПРОЕКТ</h2>
                    </div>
                    <div>
                        <h2>СЛЕДУЮЩИЙ ПРОЕКТ</h2>
                    </div>
                </div>
            </Col>
        </Row>
    )
}


export default Contactcarousels;