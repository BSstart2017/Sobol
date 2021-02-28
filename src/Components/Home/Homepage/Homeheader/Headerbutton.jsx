import React from "react";
import {Button, Col, Modal, Row} from "react-bootstrap";
import style from "./homeheader.module.css";
import PopUp from "../../../PopUp/PopUp";

function Headerbutton() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Row className="h-100">
                <Col className="d-flex align-items-center justify-content-center">
                    <div>
                        <Button className={style.headerButtonHeight}
                                onClick={() => setModalShow(true)}>
                            БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</Button>
                    </div>
                </Col>
            </Row>
            <PopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Headerbutton;

