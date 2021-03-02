import React from "react";
import {Col, Nav, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./home.module.css";
import {numberNavbarAC} from "../../../Redux/navBarScrollReducer";
import {connect} from "react-redux";
import VisibilitySensor from "react-visibility-sensor";
import {numberButtonAC} from "../../../Redux/sideBarReducer";

const Homefooter = (props) => {
    function onChange(isVisible) {
        if (isVisible)
            props.getNumberNavbar(0)
        props.staticNumberButton(0)
    }

    return (
        <Row className={style.footerHeight}>
            <Col className="col-md-4 d-flex align-items-end justify-content-center">
                <div className={style.footerPadding}>
                    <img src={process.env.PUBLIC_URL + "/img/icon/WatsApp.png"} alt="HomeLogo"/>
                </div>
                <div className={style.footerPadding}>
                    <img src={process.env.PUBLIC_URL + "/img/icon/FB.png"} alt="HomeLogo"/>
                </div>
                <div className={style.footerPadding}>
                    <img src={process.env.PUBLIC_URL + "/img/icon/VK.png"} alt="HomeLogo"/>
                </div>
            </Col>
            <Col className="col-md-4 d-flex align-items-center justify-content-center">
                <div className={style.footerTextBest}>
                    <p>Best Event Award World <br/>2018 и 2019 годов,<br/>и десятка наград поменьше</p><br/>
                    <Nav.Link className={style.footerTextBest} href="#portfolio">Подробнее....</Nav.Link>
                </div>
            </Col>
            <Col className="col-md-4 d-flex align-items-center justify-content-center">
                <div className={style.footerTextMe}>
                    <VisibilitySensor onChange={onChange}>
                        {({isVisible}) =>
                            <div>
                                {isVisible ?
                                    <p>Мы верим, что самые ценное и в мире<br/>— эмоции. Один возглас «вау!»,
                                        прозвучавший
                                        <br/>на событии, ценнее всех лайков, лидов и кликов.<br/>
                                        <br/>19 лет мы делаем то, во что верим.
                                    </p>
                                    : <p>Мы верим, что самые ценное и в мире<br/>— эмоции. Один возглас «вау!»,
                                        прозвучавший
                                        <br/>на событии, ценнее всех лайков, лидов и кликов.<br/>
                                        <br/>19 лет мы делаем то, во что верим.
                                    </p>}
                            </div>
                        }
                    </VisibilitySensor>
                </div>
            </Col>
        </Row>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNumberNavbar: (numberNavbar) => {
            dispatch(numberNavbarAC(numberNavbar));
        },
        staticNumberButton: (NewNumberCarousels) => {
            dispatch(numberButtonAC(NewNumberCarousels));
        }
    }
}

export default connect(null, mapDispatchToProps)(Homefooter);
