import React from "react";
import {Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./home.module.css";

const Homefooter = () => {
    return (
            <Row className={style.footerHeight}>
                <Col className="col-md-4 d-flex align-items-end justify-content-center">
                    <div className={style.footerPadding}>
                        <img src={process.env.PUBLIC_URL +"/img/icon/WatsApp.png"} alt="HomeLogo"/>
                    </div>
                    <div className={style.footerPadding}>
                        <img src={process.env.PUBLIC_URL +"/img/icon/FB.png"} alt="HomeLogo"/>
                    </div>
                    <div className={style.footerPadding}>
                        <img src={process.env.PUBLIC_URL +"/img/icon/VK.png"} alt="HomeLogo"/>
                    </div>
                </Col>
                <Col className="col-md-4 d-flex align-items-center justify-content-center">
                    <div className={style.footerTextBest}>
                        <p>Best Event Award World <br/>2018 и 2019 годов,<br/>и десятка наград поменьше</p><br/>
                        <p>Подробнее....</p>
                    </div>
                </Col>
                <Col className="col-md-4 d-flex align-items-center justify-content-center">
                    <div className={style.footerTextMe}>
                        <p>Мы верим, что самые ценное и в мире<br/>— эмоции. Один возглас «вау!», прозвучавший
                            <br/>на событии, ценнее всех лайков, лидов и кликов.<br/>
                            <br/>19 лет мы делаем то, во что верим.
                        </p>
                    </div>
                </Col>
            </Row>
    )
}

export default Homefooter;