import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./sidebar.module.css";
import Sidebareng from "./Sidebareng";

const Sidebar = () => {
    return (
        <div>
            <Row className={style.sidebarEngPosition}>
                <div className="d-flex align-items-center">
                    <Col className="col-md-12">
                        <Sidebareng/>
                    </Col>
                </div>
            </Row>
            <div className="position-fixed">
                <Row className="m-1">
                    <div className={style.sidebarRightText + " " + style.sidebarButton}>
                        <Col className="col-md-1 ">
                            <h4>КТО</h4>
                        </Col>
                    </div>
                </Row>
                <Row className="m-1">
                    <div className={style.sidebarRightText + " " + style.sidebarButton}>
                        <Col className="col-md-1 sidebar-button">
                            <h4>ЧТО</h4>
                        </Col>
                    </div>
                </Row>
                <Row className="m-1">
                    <div className={style.sidebarRightText + " " + style.sidebarButton}>
                        <Col className="col-md-1 sidebar-button">
                            <h4>КАК</h4>
                        </Col>
                    </div>
                </Row>
                <Row className="m-1">
                    <div className={style.sidebarRightText + " " + style.sidebarButton}>
                        <Col className="col-md-1 sidebar-button">
                            <h4>ГДЕ</h4>
                        </Col>
                    </div>
                </Row>
                <Row className="m-1">
                    <div className={style.sidebarRightText + " " + style.sidebarButton}>
                        <Col className="col-md-1 sidebar-button">
                            <h4>SCROLL></h4>
                        </Col>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default Sidebar;