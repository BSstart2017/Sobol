import React from "react";
import {Col, Row} from "react-bootstrap";
import Contactbutton from "./Contactbutton";
import ContactcarouselsContainer from "./ContactcarouselsContainer";

const Homecontact = () => {
    return (
        <Row>
            <Col className="col-md-12">
                <Contactbutton />
            </Col>
            <Col className="col-md-12">
                <ContactcarouselsContainer />
            </Col>
        </Row>
    )
}

export default Homecontact;