import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import style from "./homeheader.module.css";
import {connect} from "react-redux";
import {transformPopUp} from "../../../../Redux/popUpReducer";


const Headerbutton = (props) => {

    const openPopUp = () => {
        props.transformPopUp(true)
    }

    return (
            <Row className="h-100">
                <Col className="d-flex align-items-center justify-content-center">
                    <div >
                        <Button className={style.headerButtonHeight} onClick={openPopUp}
                                type="submit">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</Button>
                    </div>
                </Col>
            </Row>
    )
}

export default connect(null, {transformPopUp}) (Headerbutton);
