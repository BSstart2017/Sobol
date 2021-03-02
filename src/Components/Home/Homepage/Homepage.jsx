import React from "react";
import style from "./home.module.css";
import {Col, Row} from "react-bootstrap";
import Homefooter from "./Homefooter";
import Homeheader from "./Homeheader/Homeheader";
import Headerbutton from "./Homeheader/Headerbutton";


const Homepage = () => {
    return (
        <Row>
            <Col md={12} xs={12}>
                <Homeheader/>
            </Col>
            <Col md={12} xs={12} className="p-0">
                <div className={style.text + " " + style.slider + " " + style.textXS}>
                    <Row>
                        <Col xs={8} className={"d-block d-sm-none " + style.borderXS}>
                            <div className={"d-flex align-items-center justify-content-md-center"}>
                                <h2 className="pl-5 pt-4 pb-3">+375(29) 298-98-98</h2>
                            </div>
                        </Col>
                        <Col xs={4} className={"d-block d-sm-none " + style.borderXS}>
                            <div className={"d-flex align-items-center justify-content-md-center"}>
                                <h2 className="pl-4 pt-4 pb-3 ">+375</h2>
                            </div>
                        </Col>
                    </Row>
                    <h1 className="pl-5 pt-3 pb-3">ОРГАНИЗУЕМ <br/> МЕРОПРИЯТИЯ</h1>
                    <div className="d-block d-sm-none">
                    <h2 className="pl-5 pt-3 pb-5">Мы верим, что —  один <br/>возглас «вау!»,  прозвучавший
                        <br/>на событии, ценнее всех <br/>лайков,  лидов и кликов.</h2>
                    </div>
                </div>
            </Col>
            <Col className="pt-5 pb-5 d-block d-sm-none">
                <Headerbutton />
            </Col>
            <Col md={12} className="d-none d-sm-block">
                <Homefooter />
            </Col>
        </Row>
    )
}

export default Homepage;