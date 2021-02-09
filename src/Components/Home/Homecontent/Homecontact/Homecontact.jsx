import React from "react";
import {Col, Row} from "react-bootstrap";
import Contactbutton from "./Contactbutton";
import Contactcarousels from "./Contactcarousels";

const Homecontact = () => {
    return (
        <Row>
            <Col className="col-md-12">
                <Contactbutton />
            </Col>
            <Col className="col-md-12">
                <Contactcarousels />
            </Col>
        </Row>
    )
}

export default Homecontact;