import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./home.module.css";

const Homefooter = () => {
    return (
        <Container>
            <Row className={style.footerHeight}>
                <Col className="col-md-4">
                    <Container>
                        <Row className={style.footerHeight}>
                            <Col className="d-flex align-items-end justify-content-center">
                                <div className={style.footerPadding}>
                                    <img src="img/icon/WatsApp.png" alt="HomeLogo"/>
                                </div>
                                <div className={style.footerPadding}>
                                    <img src="img/icon/FB.png" alt="HomeLogo"/>
                                </div>
                                <div className={style.footerPadding}>
                                    <img src="img/icon/VK.png" alt="HomeLogo"/>
                                </div>
                            </Col>

                        </Row>

                    </Container>
                </Col>
                <Col className="col-md-4 d-flex align-items-center justify-content-center" >
                    <div className={style.footerTextBest}>
                        <p>Best Event Award World</p>
                        <p> 2018 и 2019 годов,</p>
                        <p> и десятка наград поменьше</p>
                       <br></br>
                        <p>Подробнее....</p>
                    </div>
                </Col>
                <Col className="col-md-4 d-flex align-items-center justify-content-center" >
                    <div className={style.footerTextMe}>
                        <p>Мы верим, что самые ценное и в мире</p>
                        <p> — эмоции. Один возглас «вау!», прозвучавший</p>
                        <p> на событии, ценнее всех лайков, лидов и кликов.</p>
                        <br></br>
                        <p> 19 лет мы делаем то, во что верим.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Homefooter;