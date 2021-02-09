import React from "react";
import style from "./home.module.css";
import {Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homefooter from "./Homefooter";
import Homeheader from "./Homeheader/Homeheader";



const Homepage = () => {
    return (
            <Row>
                <Col className="col-md-12" >
                    <Homeheader />
                </Col>
                <Col className="col-md-12 sidebar-button p-0">
                    <div className={style.height}>
                        <img className="w-100 h-100" src="img/Rectangle45.png" alt="HomeLogo"/>
                    </div>
                    <div className={style.text}>
                        <p>ОРГАНИЗУЕМ
                           МЕРОПРИЯТИЯ</p>
                    </div>
                </Col>
                <Col className="col-md-12">
                    <Homefooter/>
                </Col>
            </Row>
    )
}

export default Homepage;