import React from "react";
import Homeabout from "./Homecontent/Homeabout/Homeabout";
import {Col, Row} from "react-bootstrap";
import Homecontact from "./Homecontent/Homecontact/Homecontact";


const Home = () => {
    return (
        <Row>
            <Col className="col-md-12">
                <Homeabout/>
            </Col>
            <Col className="col-md-12">
                <Homecontact/>
            </Col>
        </Row>
    )
}

export default Home;