import React from "react";
import Homeabout from "./Homecontent/Homeabout/Homeabout";
import {Col, Row} from "react-bootstrap";
import Homecontact from "./Homecontent/Homecontact/Homecontact";
import Homeservices from "./Homecontent/Homeservices/Homeservices";
import Homereviews from "./Homecontent/Homeservices/Homereviews";


const Home = () => {
    return (
        <Row>
            <Col className="col-md-12 pr-0">
                <Homeabout/>
            </Col>
            <Col className="col-md-12">
                <Homecontact/>
            </Col>
            <Col className="col-md-12 pr-0">
                <Homeservices/>
                <Homereviews/>
            </Col>
        </Row>
    )
}

export default Home;